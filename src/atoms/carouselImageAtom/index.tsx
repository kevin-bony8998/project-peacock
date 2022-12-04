import React from 'react';
import { Styled } from './index.styles';
import { TechStackComponentProps } from '../../index.types';

export default function CarouselImageAtom({techStack, id}: TechStackComponentProps) {
    return (
        <>
            <Styled>
                <div className="image-card-atom-container">
                    <h1 className="tech-section-subheading">
                        Technologies I used in this position
                    </h1>
                    <div className="technology-section">
                        {techStack.items.map((item, key) =>
                            <div className="individual-tech-item">
                                <div className="tech-logo">
                                    <img src={item?.url} alt={item?.title} height={100} width={100}/>
                                </div>
                                <div className="tech-name">
                                    {item?.title}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Styled>
        </>
    );
}