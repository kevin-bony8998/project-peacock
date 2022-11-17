import React from 'react';
import { Styled } from './index.styles';
import { CardDataProps } from '../../index.types';
import TimelineComponent from '../../molecules/timelineComponent';

export default function WorkExperience() {
    const timelineData: CardDataProps[] = [
        {
            year: "2021",
            description: "Joined as a frontend developer at Deloitte USI."
        },
        {
            year: "2021",
            description: "Joined as a frontend developer at Deloitte USI."
        }
    ];
    return (
        <>
            <Styled>
                <div className="work-deets">
                    <div className="section-title">
                        <h1>Professional Experience:</h1>
                    </div>
                    <div className="section-content">
                        <TimelineComponent timelineData={timelineData}/>
                    </div>
                </div>
            </Styled>
        </>
    );
}