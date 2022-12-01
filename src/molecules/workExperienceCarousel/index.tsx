import React, { useState } from 'react';
import { Styled } from './index.styles';
import { TimelineComponentProps } from '../../index.types';
import CarouselImageAtom from '../../atoms/carouselImageAtom';
import CarouselTextAtom from '../../atoms/carouselTextAtom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'node:constants';

export default function WorkExperienceCarousel({timelineData}: TimelineComponentProps ) {
    const [currActiveSlide, setCurrActiveSlide] = useState(0);
    let currentAngle = 0;
    function changeSlideBefore(e: any) {
        if ((e.keyCode === 13) || (e?.type ==="click")) {
            const children = document.getElementsByClassName('card-container');
            for (let i = 0; i < children.length; i++) {
                const child = children[i] as HTMLElement;
                child.style.transformOrigin = 'left bottom';
                child.animate([
                        { 
                            transform: 'rotate(0deg)' ,
                            opacity: 1
                        },
                        { 
                            transform: 'rotate(90deg)',
                            opacity: 0,
                            offset: 0.3
                        },
                        { 
                            transform: 'rotate(270deg)',
                            opacity: 0,
                            offset: 0.5
                        },
                        { 
                            transform: 'rotate(350deg)',
                            opacity: 1,
                            offset: 0.9
                        },
                        { 
                            transform: 'rotate(360deg)',
                            opacity: 1
                        },
                    ], 
                    {
                        duration: 1000,
                        easing: 'linear',
                        iterations: 1,
                        fill: 'forwards'
                    }
                );
            }
            setCurrActiveSlide(currActiveSlide - 1);
        }
    }
    function changeSlideAfter(e: any) {
        if ((e.keyCode === 13) || (e?.type ==="click")) {
            const children = document.getElementsByClassName('card-container');
            for (let i = 0; i < children.length; i++) {
                const child = children[i] as HTMLElement;
                child.style.transformOrigin = '100% 100%';
                child.animate([
                        { 
                            transform: 'rotate(0deg)' ,
                            opacity: 1
                        },
                        { 
                            transform: 'rotate(90deg)',
                            opacity: 0,
                            offset: 0.3
                        },
                        { 
                            transform: 'rotate(270deg)',
                            opacity: 0,
                            offset: 0.5
                        },
                        { 
                            transform: 'rotate(350deg)',
                            opacity: 1,
                            offset: 0.9
                        },
                        { 
                            transform: 'rotate(360deg)',
                            opacity: 1
                        },
                    ], 
                    {
                        duration: 1000,
                        easing: 'linear',
                        iterations: 1,
                        fill: 'forwards'
                    }
                );
            }
            setCurrActiveSlide(currActiveSlide + 1);
        }
    }
    return (
        <>
            <Styled>
                <div className="work-experience-carousel">
                    <button className={"left-arrow carousel-arrow " + ((currActiveSlide > 0)? ``: `hide-class`)} onClick={(e): any => changeSlideBefore(e)} onKeyDown={(e): any => changeSlideBefore(e)}>
                        <FontAwesomeIcon icon={ faChevronLeft} />
                    </button>
                    <button className={"right-arrow carousel-arrow " + ((currActiveSlide < timelineData.length - 1)? ``: `hide-class`)} onClick={(e): any => changeSlideAfter(e)} onKeyDown={(e): any => changeSlideAfter(e)}>
                        <FontAwesomeIcon icon={ faChevronRight} />
                    </button>
                    <div className="main-carousel-container">
                        <div className="items">
                            {timelineData?.map((cardData, idx) => 
                                <div className="container">
                                    <div className={"card-container " + ((currActiveSlide == idx)? `active-class`: ``)}>
                                        <div className={"work-experience-card-container " + ((currActiveSlide == idx)? ``: `hide-class`)} key={idx}>
                                            <div className="image-card-atom">
                                                <CarouselImageAtom techStack={cardData?.technologyImagesCollection} id={idx}/>
                                            </div>
                                            <div className="text-card-atom">
                                                <CarouselTextAtom cardData={cardData} id={idx}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    
                </div>
            </Styled>
        </>
    );
}