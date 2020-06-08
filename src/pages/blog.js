import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Layout from '../components/layout';

export const StyledBlog = styled.div`
    border: .5em solid ${props => props.theme.color.navy};
    border-bottom: none;
    border-top: none;
    height: 100vh;
`

export const BlogContainer = styled.div`
    margin: auto;
    padding-top: 3em;
    max-width: ${props => props.theme.screen.maxWidth};
`

export const BlogPostPreview = styled.div`
    margin-top: 2em;

    h2 {
        margin-top: .25em;
        font-size: 24px;
    }
    h3 {
        margin-top: .25em;
        color: #6f6f6f;
    }
    h4 {
        color: #EB6841;
        font-weight: 700;
    }
`
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