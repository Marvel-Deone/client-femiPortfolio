import { useState } from "react"
import { Link } from "react-router-dom"


const Projects = () => {
    const projects = [
        {
            asset: 'assets/images/work/7.jpg',
            link: '/airpeace-case-study',
            tag: 'Mobile App',
            projectName: 'Airpeace Airline app',
            category: 'ui',
            popup: false
        },
        {
            asset: 'assets/images/work/1.jpg',
            link: '/health-case-study',
            tag: 'Mobile App',
            projectName: 'Health Pass app',
            category: 'management',
            popup: false
        },
    ]
    const [allProjects] = useState(projects)
    // const filter = (category) => {
    //     const updateProjects = projects.filter((project) => {
    //         return project.category === category
    //     })
    //     setAllProjects(updateProjects)
    // }
    return (
        <div className="project-gallery" id="project-gallery">
            <img className="shape" src="assets/images/shape1.png" alt="" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-title extra">
                            <h2 className="title">Select Work </h2>
                            <p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row project-gallery-item">
                            {allProjects.map((item, index) => (
                                <div key={index} className="col-md-6 col-lg-6 gallery-item">
                                    <div className="gallery-item-content">
                                        <div className="item-thumbnail">
                                            <img src={item.asset} alt="" />
                                            <div className="content-overlay">
                                                <div className="content">
                                                    <div className="links">
                                                        {item.popup ? (<Link className="img-popup image-preview" to={item.link}>
                                                            <i className="fas fa-long-arrow-alt-right"></i>
                                                        </Link>) : (
                                                            <Link to={item.link}>
                                                                <i className="fas fa-long-arrow-alt-right"></i>
                                                            </Link>
                                                        )}
                                                    </div>
                                                    <div className="info">
                                                        <p className="tag">{item.tag}</p>
                                                        <h4 className="project-name">{item.projectName}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects