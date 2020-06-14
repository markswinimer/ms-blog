import React from 'react';

import BlogPostPreview from './BlogPostPreview';

import { StyledBlog, BlogContainer, BlogPosts, Author, AuthorImage, AuthorBlurb, Month, BlogDivider,
    Intro, ReadMore, Footer, IntroBlurb, Spacing, IntroSection, IntroSectionContainer } from './Blog.styled';

class Blog extends React.Component {
    
    render() {
        return(
            <StyledBlog>
                <IntroSectionContainer>
                <IntroSection>
                    <h1>Development, my thoughts and experiences</h1>
                    <h3>by Mark Swinimer</h3>
                    <Intro>
                        <IntroBlurb>
                            <p>
                                I'm a design oriented Jr. Full-Stack Web Developer. I've always been driven by creativity and continue to pursue new ways to express it. I am focused on learning Full-Stack Web development and creating clean, creative, and functional solutions.
                                    </p>
                        </IntroBlurb>
                    </Intro>
            </IntroSection>
                </IntroSectionContainer>


                <BlogContainer>

                    {/* <IntroSection>
                    <h1>Development, my thoughts and experiences</h1>
                    <h3>by Mark Swinimer</h3>
                        <Intro>
                            <IntroBlurb>
                                <p>
                                    I'm a design oriented Jr. Full-Stack Web Developer. I've always been driven by creativity and continue to pursue new ways to express it. I am focused on learning Full-Stack Web development and creating clean, creative, and functional solutions.
                                </p>
                            </IntroBlurb>
                        </Intro>
                    </IntroSection> */}

                <BlogPosts>
                    {this.props.blogposts}
                    {/* <Spacing/> */}
                </BlogPosts>
                    <Footer>
                        <h2>About the author</h2>
                        <Author>
                            <AuthorImage>
                                <img src="https://markswinimer.github.io/portfolio/static/media/profile-dog.a0bffbfc.jpg" alt="profile image of Mark"/>
                            </AuthorImage>
                            <AuthorBlurb>
                                <p>
                                    I'm a design oriented Jr. Full-Stack Web Developer. I've always been driven by creativity and continue to pursue new ways to express it. I am focused on learning Full-Stack Web development and creating clean, creative, and functional solutions.
                                </p>
                            </AuthorBlurb>
                        </Author>
                    </Footer>
                </BlogContainer>
            </StyledBlog>
        )
    }
}

export default Blog;