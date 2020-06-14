import React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/layout';
import Blog from '../sites/blog-site/Blog';
import { BlogPostPreview, Category, Date, Excerpt } from '../sites/blog-site/BlogPostPreview.styled';

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  
    const blogposts = posts.map(({ node: post }) => {
      const { frontmatter } = post;
      return (
        <BlogPostPreview>
          <Category>DEVELOPMENT</Category>
          <h2>
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
          </h2>
          <Date>{frontmatter.date}</Date>
          <Excerpt>{frontmatter.excerpt}</Excerpt>
        </BlogPostPreview>
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