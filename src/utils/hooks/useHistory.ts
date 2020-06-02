import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useForceUpdate from 'use-force-update';
import BroadcasterContext from 'contexts/broadcaster';

const useCustomHistory = (): Record<any, any> => {
  const forceUpdate = useForceUpdate();
  const history = useHistory();
  const broadcaster = useContext(BroadcasterContext);
  return (
      {
          push: (params: Location): void => {
              if (process.env.NODE_ENV === 'production') {
                broadcaster?.push(params);
                forceUpdate();
              } else {
                  history.push(params);
              }
          },
      }
  );
};

export default useCustomHistory;
