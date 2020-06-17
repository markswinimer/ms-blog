import React, { Component } from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';
import { StyledProjects, ProjectCard, ProjectCardTags, ProjectCardLinks, ProjectsGrid, ProjectCardBottomRightTag, ProjectCardPlaceholder } from './Projects.styled';

class Projects extends Component {
    render() {
        return (
            <StyledProjects>
                <h1>Projects</h1>
                <p>What I'm working on.</p>
                <p>The two projects I'm currently working on are <strong>Nerd Words</strong>, web app for creating and sharing Word Libraries, and my new <strong>personal blog</strong>! Nerd Words is a passion project of mine, and I've recently redesigned it using Node.js with MongoDB and express. I've wanted to start a blog for a long time now and used this opportunity to build my own using Gatsby.
                </p>
                <ProjectsGrid>

                    <ProjectCard>
                        <a href="http://nerdwordsapp.herokuapp.com/"><h2>Nerd Words</h2></a>
                        <ProjectCardTags>
                            <h4>NodeJS</h4>
                            <h4>React</h4>
                            {/* <h4>React</h4> */}
                        </ProjectCardTags>
                            <p>My passion project. Web app for the creation and sharing of word libraries (think Pictionary decks).</p>
                        <ProjectCardLinks>
                            <a href="https://github.com/markswinimer/nerd-words"><FaGithub className="icon"/></a>
                            <a href="http://nerdwordsapp.herokuapp.com/"><FaEye className="icon"/></a>
                            <ProjectCardBottomRightTag>
                                <h4>Personal</h4>
                            </ProjectCardBottomRightTag>
                        </ProjectCardLinks>
                    </ProjectCard>
                    
                    <ProjectCard>
                        <a href="https://www.uie.com/"><h2>UIE Landing Page</h2></a>
                        <ProjectCardTags>
                            <h4>WordPress</h4>
                            <h4>UX Design</h4>
                            {/* <h4>React</h4> */}
                        </ProjectCardTags>
                            <p>Static landing page design for my internship at UIE. I lead and implemented the code and design.</p>
                        <ProjectCardLinks>
                            <a href="https://github.com/markswinimer/uie-wordpress-intern"><FaGithub className="icon"/></a>
                            <a href="https://www.uie.com/"><FaEye className="icon"/></a>
                            <ProjectCardBottomRightTag>
                                <h4>Production</h4>
                            </ProjectCardBottomRightTag>
                        </ProjectCardLinks>
                    </ProjectCard>

                    <ProjectCard>
                        <a href="/blog"><h2>Blog Site</h2></a>
                        <ProjectCardTags>
                            <h4>Gatsby</h4>
                            <h4>React</h4>
                        </ProjectCardTags>
                            <p>My personal blog that lives on my portfolio. Built from the ground up using Gatsby.</p>
                        <ProjectCardLinks>
                            <a href="https://github.com/markswinimer/ms-blog"><FaGithub className="icon"/></a>
                                <a href="/blog"><FaEye className="icon"/></a>
                            <ProjectCardBottomRightTag>
                                <h4>Personal</h4>
                            </ProjectCardBottomRightTag>
                        </ProjectCardLinks>
                        </ProjectCard>
                        
                    <ProjectCardPlaceholder/>
                </ProjectsGrid>

            </StyledProjects>
        )
    }
}
export default Projects;
