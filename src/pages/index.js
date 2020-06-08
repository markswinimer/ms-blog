import React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/layout';
import Portfolio from './portfolio-site/Portfolio';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);
  return (
    <Layout>
      <Portfolio/>
    </Layout>

  );
};

export const query = graphql`
  query IndexQuery {
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

export default IndexPage;