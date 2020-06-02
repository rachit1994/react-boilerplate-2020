export interface AppLayoutInterface {
    location: Record<string, any>;
    match: {
        path: string;
        url: string;
        isExact: boolean;
        params: Record<string, any>;
    };
}
