import React, { useState, createContext } from 'react';
import { Styled } from './index.styles';
import { TechPopUpsOpenProps } from '../../index.types';
import { useQuery } from '@apollo/client';
import { TimeLineDataQuery } from '../../queries/queries';
import WorkExperienceCarousel from '../../molecules/workExperienceCarousel';

export const TechPopUpOptions = createContext<TechPopUpsOpenProps>({
    currentOpenPopUp: -1
});

export default function WorkExperience() {
    const { loading, error, data } = useQuery(TimeLineDataQuery);
    const [currentOpenPopUp, setCurrentOpenPopUp] = useState(-1);
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(`[graphQlError][useQuery] Ran into an error while fetching the data. This is the error: ${error}`);
    }
    else {
        console.log(`[graphQlSuccess][useQuery] Got the data from graphQL: ${JSON.stringify(data)}`);
    }
    const timelineData = data?.workExperienceCardDataEntriesCollection?.items;
    const value = {currentOpenPopUp, setCurrentOpenPopUp};
    return (
        <>
            <TechPopUpOptions.Provider value={value}>
                <Styled>
                    <div className="work-deets">
                        <div className="section-title">
                            <h1>Professional Experience</h1>
                        </div>
                        <div className="section-content">
                            <WorkExperienceCarousel timelineData={timelineData}/>
                        </div>
                    </div>
                </Styled>
            </TechPopUpOptions.Provider>
        </>
    );
}