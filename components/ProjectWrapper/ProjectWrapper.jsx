
import Fancybox from '@/components/FancyBox/FancyBox'
import Image from 'next/image'
import React from 'react'

const ProjectWrapper = () => {
    return (
        <div className="project-wrapper">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="project-box">
                        <div className="project-img">
                            <Image src="/assets/images/project-1.png" width="300"
                                height="700" alt="Project 1" />
                            <div className="project-overlay">
                                <Fancybox
                                >
                                    <a data-fancybox="projects" href="/assets/videos/1.mp4" className="project-play">

                                        <i className="bi bi-play-fill"></i>
                                    </a>

                                </Fancybox>

                            </div>
                        </div>
                        <div className="project-content">
                            <h3><a href="#">Project 1</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus necari</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="project-box project-box2">
                        <div className="project-img">
                            <Image width="300"
                                height="700" src="/assets/images/project-2.png" alt="Project 2" />
                            <div className="project-overlay">
                                <Fancybox
                                >
                                    <a data-fancybox="projects" href="/assets/videos/2.mp4" className="project-play">

                                        <i className="bi bi-play-fill"></i>
                                    </a>

                                </Fancybox>

                            </div>
                        </div>
                        <div className="project-content">
                            <h3><a href="#">Project 2</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus necari</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="project-box">
                        <div className="project-img">
                            <Image width="300"
                                height="700" src="/assets/images/project-3.png" al3t="Project 3" />
                            <div className="project-overlay">
                                <Fancybox
                                >
                                    <a data-fancybox="projects" href="/assets/videos/3.mp4" className="project-play">

                                        <i className="bi bi-play-fill"></i>
                                    </a>

                                </Fancybox>

                            </div>
                        </div>
                        <div className="project-content">
                            <h3><a href="#">Project 3</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus necari</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="project-box project-box2">
                        <div className="project-img">
                            <Image width="300"
                                height="700" src="/assets/images/project-4.png" alt="Project 4" />
                            <div className="project-overlay">
                                <Fancybox
                                >
                                    <a data-fancybox="projects" href="/assets/videos/4.mp4" className="project-play">

                                        <i className="bi bi-play-fill"></i>
                                    </a>

                                </Fancybox>

                            </div>
                        </div>
                        <div className="project-content">
                            <h3><a href="#">Project 4</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus necari</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectWrapper