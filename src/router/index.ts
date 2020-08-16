import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Blog1  from '../pages/iobami/Blog';

// routes
const home = '/';
const blog = '/blog';
const blog1 = '/blog/iobami';

export const pageUrl = { home, blog, blog1, };

export const routeObject = [
  {
    path: pageUrl.home,
    component: Home,
  },
  {
    path: pageUrl.blog,
    component: Blog,
  },
  {
    path: pageUrl.blog1,
    component: Blog1,
  },
];
