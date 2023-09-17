import Fancybox from '@/components/FancyBox/FancyBox'
import ProjectWrapper from '@/components/ProjectWrapper/ProjectWrapper'
import Reviews from '@/components/Reviews/Reviews'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <main className="main-wrap">
        <section className="banner" id="home">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner-content">
                  <h4>Professional Drone Services</h4>
                  <h1>Photography &amp; Videography Innovation With Drones</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus necari ullamcorper mattis pulvinar dapibus leo consectetur adipiscing.</p>
                  <div className="banner-cta">
                    <a href="#" className="btn-s1">Get Started</a>
                    <a href="#" className="btn-s2"><span><i className="las la-angle-right"></i></span> Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-section counter-section bg-dark" data-counter>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="counter-box">
                  <h5 className="counter" data-count="789">0</h5>
                  <p>Lorem Ispum Lorem</p>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="counter-box">
                  <h5 className="counter" data-count="789">0</h5>
                  <p>Lorem Ispum Lorem</p>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="counter-box">
                  <h5 className="counter" data-count="789">0</h5>
                  <p>Lorem Ispum Lorem</p>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="counter-box">
                  <h5 className="counter" data-count="789">0</h5>
                  <p>Lorem Ispum Lorem</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-section our-work-section" id="our-works">
          <div className="container">
            <div className="headings1">
              <h2>Our Recent Works & Cinematic Shots</h2>
              <div className="headings1-divider">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <ProjectWrapper />

            <div className="section-cta text-center">
              <a href="#" className="btn-s1">Get Started</a>
            </div>
          </div>
        </section>
        <section className="main-section our-gear-section bg-light" id="our-gears">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="headings1">
                  <h2>Our Gears & Equipements</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-lg-6 order-lg-2 col-md-12 order-md-3">
                <div className="og-image">
                  <Image height={400} width={541} src="/assets/images/drone-img.png" alt="Drone" />
                </div>
              </div>
              <div className="col-lg-3 order-lg-1 col-md-6 order-md-1">
                <div className="iconbox">
                  <div className="iconbox-img">
                    <Image height={80} width={80} src="/assets/images/4k-icon.png" alt="4K 60 FPS" />
                  </div>
                  <h3>4K 60 FPS</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus necari</p>
                </div>
              </div>
              <div className="col-lg-3 order-lg-3 col-md-6 order-md-2">
                <div className="iconbox">
                  <div className="iconbox-img">
                    <Image height={80} width={80} src="/assets/images/bs-icon.png" alt="Best Sensor" />
                  </div>
                  <h3>Best Sensor</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus necari</p>
                </div>
              </div>
              <div className="col-lg-3 order-lg-4 col-md-6 order-md-4">
                <div className="iconbox">
                  <div className="iconbox-img">
                    <Image height={80} width={80} src="/assets/images/ms-icon.png" alt="Mechanical Shutter" />
                  </div>
                  <h3>Mechanical Shutter</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus necari</p>
                </div>
              </div>
              <div className="col-lg-3 order-lg-5 col-md-6 order-md-5">
                <div className="iconbox">
                  <div className="iconbox-img">
                    <Image height={80} width={80} src="/assets/images/1h-icon.png" alt="1 Hour Flight" />
                  </div>
                  <h3>1 Hour Flight</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Utelit tellus luctus necari</p>
                </div>
              </div>
            </div>
            <div className="section-cta text-center">
              <a href="#" className="btn-s1">Get Started</a>
            </div>
          </div>
        </section>
        <section className="our-expertise-section bg-dark" data-counter>
          <div className="container">
            <div className="our-expertise-wrap">
              <div className="row">
                <div className="col-lg-6">
                  <div className="oex-left-area">
                    <div className="oex-larea-content">
                      <h5>Our Expertise</h5>
                      <h2>we are professional in the field aerial &amp; drone</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiu smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiu smod tempor incididunt ut labore et</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiu smod tempor incididunt ut labore et</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="oex-larea-counters">
                      <div className="oex-cbox">
                        <h5 className="counter" data-count="789">0</h5>
                        <p>Lorem Ispum Lorem</p>
                      </div>
                      <div className="oex-cbox">
                        <h5 className="counter" data-count="789">0</h5>
                        <p>Lorem Ispum Lorem</p>
                      </div>
                      <div className="oex-cbox">
                        <h5 className="counter" data-count="789">0</h5>
                        <p>Lorem Ispum Lorem</p>
                      </div>
                      <div className="oex-cbox">
                        <h5 className="counter" data-count="789">0</h5>
                        <p>Lorem Ispum Lorem</p>
                      </div>
                    </div>
                    <div className="oex-larea-cta">
                      <a href="#" className="btn-s1">Get Started</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="oex-right-area">
                    <div className="oex-rarea-img">
                      <Image width="750"
                        height="900" src="/assets/images/img1.png" alt='Drone' />
                    </div>
                    <div className="oex-rarea-content">
                      <h3>ready to embrace the future</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiu smod tempor incididunt ut labore et</p>
                      <a href="#">Overview <i className="las la-chevron-circle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-section reviews-section" id="reviews">
          <div className="container">
            <div className="reviews-wrap">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="video-box">
                    <Image width="490"
                      height="700" src="/assets/images/poster.png" alt="Poster" />
                    <div className="video-box-overlay">
                      <Fancybox
                      >
                        <a data-fancybox="projects" href="/assets/videos/1.mp4" className="project-play">

                          <i className="bi bi-play-fill"></i>
                        </a>

                      </Fancybox>
                    </div>

                  </div>
                </div>
                <div className="col-lg-7">
                  <Reviews />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home