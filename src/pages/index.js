import React from 'react';
import Link from 'gatsby-link';

import Portfolio from './portfolio-site/Portfolio';
import { GlobalStyle, theme } from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Portfolio/>
      Home Page
      <Link to={"/blog"}>
        Blog
      </Link>
    </ThemeProvider>
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