import React from 'react';

import Divider from './Divider';
import Projects from './Projects';

import { StyledPortfolio, Title, TitleName, TitleAbout,
    AboutMe, LeftSection, RightSection, AboutMeProfileImage,
    ContactMe, ContactMeButton, Paragraph,
    Learning, LearningLeftSection, LearningRightSection, LearningMediaQ } from './Portfolio.styled';

class Portfolio extends React.Component {
    render() {
        return(
            <StyledPortfolio>
                <Title>
                    <TitleName>
                        <h1>Mark Swinimer</h1>
                        <h2>web developer</h2>
                    </TitleName>
                    <TitleAbout>
                        I'm a Web Developer located in Boston MA. My passion is writing clean code and developing creative applications with functional solutions for the web.
                    </TitleAbout>
                </Title>

                <Divider topColor="white"/>

                <AboutMe>
                    <LeftSection>
                        <AboutMeProfileImage>
                            <img alt="profile" src="https://markswinimer.github.io/portfolio/static/media/profile-dog.a0bffbfc.jpg" />
                        </AboutMeProfileImage>
                    </LeftSection>
                    <RightSection>
                        <h1>About me</h1>
                        <p>
                            Nice to meet you! I'm Mark and I create web applications and implement web  based solutions. Also, I love Dogs.
                        </p>
                        <p>
                            I have an interest in full stack development; especially using the technologies: Ruby, Javascript, React and other front end libraries which make creating web applications smoother and progressive.
                        </p>
                    </RightSection>
                </AboutMe>

                <Divider topColor="navy"/>

                <Projects/>

                <Divider topColor="white" />

                <Learning>
                        <LearningLeftSection>
                            <p>React</p>
                            <p>ES6 Javascript</p>
                            <p>Node</p>
                            <p>Ruby on Rails</p>
                            <p>WordPress</p>
                        </LearningLeftSection>
                        <LearningRightSection>
                            <h1>What I'm learning</h1>
                            <h2>New technologies</h2>
                            
                            <p>I have been familiarizing myself with React and exploring news ways to utilize this libray. New javascript technologies like Gatsby and Node applications have been fascinating to jump into.</p>
                            <LearningMediaQ>
                                <li>React</li>
                                <li>ES6 Javascrilit</li>
                                <li>Node</li>
                                <li>Ruby on Rails</li>
                                <li>WordPress</li>
                            </LearningMediaQ>
                        </LearningRightSection>
                </Learning>

                <Divider topColor="navy"/>

                <ContactMe>
                    <h1>Contact me!</h1>
                    <Paragraph>
                        <p>I'd love to share some of my work with you. Feel free to reach out via email or explore my work on github. I have also provided links to the live versions in the projects sections above. Local to Boston? I'm interested in meeting up with like-minded developers over coffee at a local cafe.</p>
                            <a href="mailto:markswinimer@gmail.com">
                                <ContactMeButton>
                                    Reach out
                                </ContactMeButton>
                            </a>
                        </Paragraph>
                </ContactMe>
                
            </StyledPortfolio>
        )
    }
}

export default Portfolio;