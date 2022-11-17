import React from 'react';
import { Styled } from './index.styles';
import { CardComponentProps } from '../../index.types';
// import { IntroProps } from '../index.types';

function TimelineCardComponent({cardData, id}: CardComponentProps) {
    return (
        <>
            <Styled>
                <div key={id} className={"card-container " + ((id % 2 == 0)? `right-card`:`left-card`)}>
                    <div className="timeline-card">
                        <div className="timeline-year">
                            {cardData?.year}
                        </div>
                        <div className="timeline-description">
                            {cardData?.description}
                        </div>
                    </div>
                </div>
            </Styled>
        </>
    );
}



export default TimelineCardComponent;