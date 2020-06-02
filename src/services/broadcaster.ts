import { History, createBrowserHistory } from 'history';

export interface Mail {
    id: number;
    from: string;
    to: string;
    type: string;
    payload: any;
}

export
class Broadcaster {
    private history: History | null = null;

    private path = '';

    private basename = '';

    private lastMessageId = 0;

    private isReady = false;

    private currentMailReader: ((message: Mail[]) => void) | null = null;

    private currentOnCookieChange: (() => void) | null = null;

    private channelListeners: {
        channel: string;
        cb: (message: any) => void;
    }[] = [];

    /* eslint-disable class-methods-use-this */
    private postMessage(type: string, data: any = {}): void {
        window.parent.postMessage({
            id: Date.now(),
            type,
            ...data,
        }, '*');
    }

    push(location: Location): void {
        const normalizedUrl = location.pathname.replace(this.basename, '');

        this.history?.push({
            pathname: normalizedUrl,
            search: location.search,
        });
    }

    emit(channel: string, message: any): void {
        this.postMessage('channel', {
            channel,
            message,
        });
    }

    on(channel: string, cb: (message: any) => void): void {
        this.channelListeners.push({
            channel,
            cb,
        });
    }

    removeListener(channel: string, cb: (message: any) => void): void {
        this.channelListeners = this.channelListeners.filter(
            (listener) => listener.channel !== channel && cb !== listener.cb,
        );
    }

    onInit(cb: (history: History) => void): void {
        window.addEventListener('message', (message) => {
            const { data } = message;

            if (data.id !== this.lastMessageId) {
                switch (data.type) {
                    case 'init': {
                        const {
                            basename,
                            path,
                            cookie,
                            pathname,
                        } = data;
                        const history = createBrowserHistory({ basename });

                        this.history = history;
                        this.basename = basename;
                        this.path = path;
                        document.cookie = cookie;

                        // sync shell history with mf
                        this.isReady = true;
                        this.registerHistory(history, pathname, cb);

                        break;
                    }
                    case 'history-update': {
                        const { pathname } = data;
                        if (this.history && this.isReady) {
                            const mfPath = this.getMFPathFromShellPath(
                                this.path,
                                pathname,
                            );
                            const currentMfPath = this.getCurrentMfPath();
                            const shellPathname = window.parent.location.pathname;

                            if (
                                shellPathname.startsWith(this.path)
                                && mfPath !== currentMfPath
                            ) {
                                this.history.replace(mfPath);
                            }
                        }

                        break;
                    }
                    case 'mail-pop': {
                      const { messages }: { messages: Mail[] } = data;

                      if (this.currentMailReader) {
                        this.currentMailReader(messages);
                      }
                      break;
                    }
                    case 'cookie-update': {
                        const { cookie }: { cookie: string } = data;

                        document.cookie = cookie;

                        if (this.currentOnCookieChange) {
                            this.currentOnCookieChange();
                        }
                        break;
                    }
                    case 'channel': {
                        const {
                            channel,
                            message: msg,
                        }: { channel: string; message: any } = data;

                        this.channelListeners.forEach((listener) => {
                            if (listener.channel === channel) {
                                listener.cb(msg);
                            }
                        });

                        break;
                    }
                    default:
                }
            }

            this.lastMessageId = data.id;
        });
    }

    onCookieChange(cb: () => void): void {
        this.currentOnCookieChange = cb;
    }

    readMessages(cb: (message: Mail[]) => void): void {
      this.currentMailReader = cb;

      this.postMessage('read-mail', { path: this.path });
    }

    sendMessage(message: { to: string; payload: any }): void {
      this.postMessage('mail', {
        message: {
          id: Date.now(),
          from: this.path,
          to: message.to,
          payload: message.payload,
        },
      });
    }

    registerHistory(history: History, shellPath: string, cb: (history: History) => void): void {
        // load the mf route based on the shell url
        const mfPath = this.getMFPathFromShellPath(this.path, shellPath);
        history.replace(mfPath);

        history.listen((location) => {
            const shellPathname = window.parent.location.pathname;

            if (shellPathname.startsWith(this.path)) {
                this.postMessage('history-update', {
                    location: {
                        pathname: location.pathname,
                        search: location.search,
                    },
                });
            }
        });

        cb(history);
    }

    private getCurrentMfPath(): string {
        const pathname = window.location.pathname.replace(this.basename, '');

        return `${pathname}${window.location.search}`;
    }

    /* eslint-disable class-methods-use-this */
    private getMFPathFromShellPath(mfPath: string, shellPath: string): string {
        const normalizedPath = `${shellPath.replace(mfPath, '')}`;

        const normalizedPathArr = normalizedPath.split('');

        while (normalizedPathArr[normalizedPathArr.length - 1] === '/') {
            normalizedPathArr.pop();
        }

        return `${normalizedPathArr.join('')}${window.parent.location.search}`;
    }

    navigate(pathname: string): void {
        this.postMessage('navigate', {
            pathname,
        });
    }
}
