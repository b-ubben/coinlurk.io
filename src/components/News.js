import React from 'react';
import useAPI from '../hooks/useAPI';
import Window from './Window';

export default function News() {
  const [api, endpoints] = useAPI();
  const initState = {
    status: 'idle',
    articles: [],
  };
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'started':
        return { ...state, status: 'pending' };
      case 'error':
        return { ...state, status: 'rejected' };
      case 'success':
        return { ...state, status: 'resolved', articles: action.payload.articles };
      default:
        throw new Error('unsupported action type given on News reducer');
    }
  }, initState);

  const getArticles = React.useCallback(() => {
    (async () => {
      try {
        dispatch({ type: 'started' });
        const response = await api.get(endpoints.news.TOP_NEWS);
        const { result, data, error } = response.data;
        if (!result || error) {
          throw new Error(error);
        }
        dispatch({ type: 'success', payload: { articles: data } });
      } catch (err) {
        dispatch({ type: 'error' });
        window.alert(err);
      }
    })();
  }, [api, endpoints]);

  React.useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <Window title="Top Crypto News">
      {state.status === 'pending' ? (
        <div className="flex items-center justify-center" style={{ height: 300 }}>
          <div className="font-bold">fetching...</div>
        </div>
      ) : (
        <ul>
          {state.articles.map(article => (
            <li key={article._id} className="my-4">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Window>
  );
}
