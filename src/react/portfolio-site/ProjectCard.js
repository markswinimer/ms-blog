import React, { Component } from 'react';

class ProjectCard extends Component {
    render() {
        const { title, liveSite, github, description } = this.props;

        const tags = this.props.tags.map(tag => {
            return <h4>{tag}</h4>
        })

        return (
            <div className="ProjectCard">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="ProjectCard-links">
                    <a href={github}><i className="fab fa-github" /></a>
                    <a href={liveSite}><i className="fas fa-eye"></i></a>
                    <div className="ProjectCard-tags">
                        {tags}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard;
