import axios from 'axios';
import { PAGES, CATEGORIES, POSTS, MESSAGES } from './url.js';

export const fetchPages = () => {
  const res = axios.get(PAGES); 
  return res;
}

export const fetchCategories = () => {
  const res = axios.get(CATEGORIES);
  return res;
}

export const fetchPosts = (context) => {
  const { queryKey } = context;
  const [, params] = queryKey;
  const res = axios.get(POSTS, {params,});
  
  return res;
}

export const fetchMessages = () => {
  const res = axios.get(MESSAGES);
  return res;
}

export const createMessage = (params) => {
  const res = axios.post(MESSAGES, params);
  return res;
}



