import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './index.styles';
import { CardDataProps, TimelineComponentProps } from '../../index.types';
import TimelineCardComponent from '../../atoms/timelineCardComponent';

function TimelineComponent( {timelineData}: TimelineComponentProps ) {
    return (
        <>
            <Styled>
                <div className="timeline-container">
                    <div className="timeline">
                        <div className="timeline-ruler">
                            {timelineData.map((item: CardDataProps, key: number) => 
                                <div className="card-item" key={key}>
                                    <TimelineCardComponent cardData={item} id={key}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Styled>
        </>
    );
}

export default TimelineComponent;