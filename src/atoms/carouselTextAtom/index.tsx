import React from 'react';
import { Styled } from './index.styles';
import { CardComponentProps } from '../../index.types';

export default function CarouselTextAtom({cardData, id}: CardComponentProps) {
    return (
        <>
            <Styled>
                <div className="text-atom">
                    <div className="technology-section">
                        <div className="timeline-card">
                            <p className="timeline-year">
                                {cardData?.year}
                            </p>
                            <div className="timeline-description">
                                {cardData?.description}
                            </div>
                        </div>
                    </div>
                </div>
            </Styled>
        </>
    );
}