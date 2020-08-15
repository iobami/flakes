import React from 'react';
import { Link } from 'react-router-dom';
import { pageUrl } from '../router';

export default function Blog() {
  return (
    <div>
      <h1>Hello Blog</h1>
      <Link to={pageUrl.home}>
        click to go home
      </Link>
    </div>
  );
}