'use client'

import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";


const Reviews = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: false,
        prevArrow: false
    };

    return (
        <>
            <div className="reviews-slider-wrap" id="reviews-slider">

                <Slider {...settings}>
                    <div className="review-slide">
                        <div className="review-item">
                            <div className="review-content">
                                <h5>Our Expertise</h5>
                                <h3>we are professional in the field aerial &amp; drone</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="review-author">
                                <Image width={'80'} height={'80'} src="/assets/images/thumbnail.png" alt="Jason Haris" />
                                <div className="review-author-info">
                                    <strong>Jason Haris</strong>
                                    <span>Lorem Ipsum is</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="review-slide">
                        <div className="review-item">
                            <div className="review-content">
                                <h5>Our Expertise</h5>
                                <h3>we are professional in the field aerial &amp; drone</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="review-author">
                                <Image width={'80'} height={'80'} src="/assets/images/thumbnail.png" alt="Jason Haris" />
                                <div className="review-author-info">
                                    <strong>Jason Haris</strong>
                                    <span>Lorem Ipsum is</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>


            </div>
        </>
    )
}

export default Reviews