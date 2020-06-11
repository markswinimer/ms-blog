import React from 'react';

import Layout from '../components/layout';
import Blog from './blog-site/Blog';

const BlogPage = ({ data }) => {

    const none = '';
    return (
        <Layout>
            <Blog data={data}/>
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
            category
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