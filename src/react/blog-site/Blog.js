import React from 'react';

import BlogPostPreview from './BlogPostPreview';

import { StyledBlog, BlogContainer, BlogPosts, Author, AuthorImage, AuthorBlurb, Month } from './Blog.styled';

class Blog extends React.Component {
    
    render() {
        return(
            <StyledBlog>
                <BlogContainer>
                    <Author>
                        <AuthorImage>
                            <img src="https://markswinimer.github.io/portfolio/static/media/profile-dog.a0bffbfc.jpg" alt="profile image of Mark"/>
                        </AuthorImage>
                        <AuthorBlurb>
                            <h2>Welcome to my blog</h2>
                            <p>
                                I'm a design oriented Jr. Full-Stack Web Developer. I've always been driven by creativity and continue to pursue new ways to express it. I am focused on learning Full-Stack Web development and creating clean, creative, and functional solutions.
                            </p>
                        </AuthorBlurb>
                    </Author>
                    {/* <Month>May Posts</Month> */}
                <BlogPosts>
                    {this.props.blogposts}
                </BlogPosts>

                </BlogContainer>
            </StyledBlog>
        )
    }
}

export default Blog;