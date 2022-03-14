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

export const fetchPosts = () => {
  const res = axios.get(POSTS);
  return res;
}

export const fetchMessages = () => {
  const res = axios.get(MESSAGES);
  return res;
}