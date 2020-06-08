import React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/layout';

import { StyledBlog, BlogContainer, BlogPostPreview, BlogExcerpt } from './blog-site/Blog.styled';

const BlogPage = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;
    console.log(posts);
    return (
        <Layout>
            <StyledBlog>
            <BlogContainer>
            {posts.map(({ node: post }) => {
                const { frontmatter } = post;
                return (
                    <BlogPostPreview>
                        <h4>LIFESTYLE</h4>
                        <h2>
                            <Link to={frontmatter.path}>
                                {frontmatter.title}
                            </Link>
                        </h2>
                        <h3>{frontmatter.date}</h3>
                        <p>{frontmatter.excerpt}</p>
                        <ul>
                            {frontmatter.tags.map(tag => {
                                return (
                                    <li>
                                        <Link to={`/tags/${tag}`}>
                                            {tag}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </BlogPostPreview>
                );
            })}
                </BlogContainer>
            </StyledBlog>
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