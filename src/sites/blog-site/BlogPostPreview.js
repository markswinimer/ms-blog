import React from 'react';
import Link from 'gatsby-link';

import { StyledBlogPostPreview, Date, Excerpt } from './BlogPostPreview.styled';

class BlogPostPreview extends React.Component {
    render() {
        console.log(this.props);

        const { frontmatter } = this.props;
        
        return(
            <StyledBlogPostPreview>
                <h2>
                    <Link to={frontmatter.path}>
                        {frontmatter.title}
                    </Link>
                </h2>
                <Date>{frontmatter.date}</Date>
                <Link to={frontmatter.path}><Excerpt>{frontmatter.excerpt}</Excerpt></Link>
                {/* <ul>
                    {frontmatter.tags.map(tag => {
                        return (
                            <li>
                                <Link to={`/tags/${tag}`}>
                                    {tag}
                                </Link>
                            </li>
                        );
                    })}
                </ul> */}
            </StyledBlogPostPreview>
        )
    }
}

export default BlogPostPreview;