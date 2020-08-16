import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  image: any;
  title: string;
  teaser: string;
  date: string;
  // any other props that come into the component
}

export default function BlogItem({ image, title, teaser, date }: IProps) {
  return (
    <div className="col-md-6 col-12 post-grid-2">
      <div className="post-prw-big">
        <Link to="/" className="post-img">
          <img src={image} alt="blog1" />
        </Link>
        <div className="post-inside">
          <ul className="tags-list post-tags-list">
            <li><Link to="/">Goodwin</Link></li>
            <li><Link to="/">Seiko</Link></li>
            <li><Link to="/">Goku</Link></li>
            <li><Link to="/">Techie</Link></li>
          </ul>
          <h2 className="post-title">
            <Link to="/">{title}</Link>
          </h2>
          <p className="post-teaser">{teaser}</p>
          <div className="post-bot">
            <div className="post-date">{date}</div>
            <Link to="/blog-post.html" className="post-link">read more</Link>
            <div className="post-action">
              <Link to="/" className="icon-heart" />
              <Link to="/" className="icon-share" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
