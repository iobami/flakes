import Home from '../pages/Home';
import Blog from '../pages/Blog';

// routes
const home = '/';
const blog = '/blog';

export const pageUrl = { home, blog, };

export const routeObject = [
  {
    path: pageUrl.home,
    component: Home,
  },
  {
    path: pageUrl.blog,
    component: Blog,
  },
];
