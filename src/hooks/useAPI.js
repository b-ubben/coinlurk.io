import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const endpoints = {
  news: {
    TOP_NEWS: '/news',
    TOP_FEED: '/news/aggregated',
    TWEETS: '/news/tweets',
  },
};

export default function useAPI() {
  return [api, endpoints];
}
