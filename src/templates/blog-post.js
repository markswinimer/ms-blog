import React from 'react';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';

import { StyledBlogPost, BlogContent, Date, PostContent } from '../sites/blog-site/BlogPost.styled';

const Template = ({ data, location, pathContext }) => {
    const { markdownRemark: post } = data;
    const { frontmatter, html } = post;
    const { title, date } = frontmatter;
    const { next, prev } = pathContext;

  return(
    <Layout>
        <Helmet title={`${title} - My Blog`} />
        <StyledBlogPost>
          <BlogContent>
              <h2>{title}</h2>
          <Date><strong>Mark Swinimer</strong> {date}</Date>
              <PostContent>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </PostContent>

              {/* <p>
                  {prev &&
                      <Link to={prev.frontmatter.path}>
                          Previous: {prev.frontmatter.title}
                      </Link>
                  }
              </p>
              <p>
                  {next &&
                      <Link to={next.frontmatter.path}>
                          Next: {next.frontmatter.title}
                      </Link>
                  }
              </p> */}
        </BlogContent>
      </StyledBlogPost>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template;