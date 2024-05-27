import axios from 'axios';


const backendURL = 'http://127.0.0.1:8000/';

console.log(`API URL: ${backendURL}api/blog/blog/`);

const blogApi = axios.create({
  baseURL: `${backendURL}api/blog/blog/`,
});


export const getAllBlog = () => blogApi.get('/');
export const getBlog= (id) => blogApi.get(`/${id}`);
export const createBlog = (blog) => blogApi.post('/', blog);
export const updateBlog = (id, blog) => blogApi.put(`/${id}/`, blog);
export const deleteBlog = (id) => blogApi.delete(`/${id}`);
