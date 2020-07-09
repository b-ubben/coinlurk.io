import React from 'react';
import useAPI from '../hooks/useAPI';
import Window from './Window';

export default function Tweets() {
  const [api, endpoints] = useAPI();
  const initState = {
    status: 'idle',
    tweets: [],
  };
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'started':
        return { ...state, status: 'pending' };
      case 'error':
        return { ...state, status: 'rejected' };
      case 'success':
        return { ...state, status: 'resolved', tweets: action.payload.tweets };
      default:
        throw new Error('unsupported action type given on News reducer');
    }
  }, initState);

  const getTweets = React.useCallback(() => {
    (async () => {
      try {
        dispatch({ type: 'started' });
        const response = await api.get(endpoints.news.TWEETS + '/bitcoin');
        const { result, data, error } = response.data;
        if (!result || error) {
          throw new Error(error);
        }
        dispatch({ type: 'success', payload: { tweets: data } });
      } catch (err) {
        dispatch({ type: 'error' });
        window.alert(err);
      }
    })();
  }, [api, endpoints]);

  React.useEffect(() => {
    getTweets();
  }, [getTweets]);

  return (
    <Window title="Bitcoin Tweets">
      {state.status === 'pending' ? (
        <div className="text-center">loading...</div>
      ) : (
        <ul>
          {state.tweets.map(tweet => (
            <li key={tweet._id} className="my-4">
              <a
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {tweet.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Window>
  );
}
