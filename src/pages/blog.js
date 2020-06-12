import React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/layout';
import Blog from '../react/blog-site/Blog';

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

    const blogposts = posts.map(({ node: post }) => {
      const { frontmatter } = post;
      return (
        <div>
          <h2>
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
          </h2>
          <p>{frontmatter.date}</p>
          <p>{frontmatter.excerpt}</p>
        </div>
      );
    })

    return (
        <Layout>
            <Blog blogposts={blogposts}/>
        </Layout>
    );
};

export const query = graphql`
  query indexQueryAndIndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

export default BlogPage;