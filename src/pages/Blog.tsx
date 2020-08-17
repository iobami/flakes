import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { pageUrl } from '../router';
import { BlogItem } from '../components';
import { blogPost } from '../database/blogPostMockData';

export default function Blog() {
  const storeObject = useSelector((state) => state);
  console.log(storeObject);

  return (
    <div className="page-content">
      <div className="holder mt-0">
        <div className="container">
          <ul className="breadcrumbs">
            <li><Link to={pageUrl.home}>Home</Link></li>
            <li><span>Blog</span></li>
          </ul>
        </div>
      </div>
      <div className="holder mt-0">
        <div className="container">
          <h1 className="text-center">Blog</h1>
          <br/>
          <div className="row">
            {blogPost
              ? blogPost.map((item, index) => {
                  return (
                    <BlogItem
                      key={index}
                      image={item.image}
                      title={item.title}
                      teaser={item.teaser}
                      date={item.date}
                    />
                  );
                })
              : null}
          </div>

          <div className="text-center">
            <Link to="/" className="btn-decor">show more</Link>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}
