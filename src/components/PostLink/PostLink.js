import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import "./postLink.css";

const PostLink = ({ post }) => (
  <div>
    <Link className="card" to={post.frontmatter.slug}>
      <Img fixed={post.frontmatter.image.childImageSharp.fixed} />
      <div className="card-txt">
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>({post.frontmatter.date})
      </div>
    </Link>
  </div>
);
export default PostLink;
