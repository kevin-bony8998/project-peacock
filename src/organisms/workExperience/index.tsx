import React from 'react';
import { Styled } from './index.styles';
import { CardDataProps } from '../../index.types';
import TimelineComponent from '../../molecules/timelineComponent';
import { useQuery } from '@apollo/client';
import { TimeLineDataQuery } from '../../queries/queries';

export default function WorkExperience() {
    const { loading, error, data } = useQuery(TimeLineDataQuery);
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(`[graphQlError][useQuery] Ran into an error while fetching the data. This is the error: ${error}`);
    }
    else {
        console.log(`[graphQlSuccess][useQuery] Got the data from graphQL: ${JSON.stringify(data)}`);
    }
    const timelineData = data?.workExperienceCardDataEntriesCollection?.items;
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