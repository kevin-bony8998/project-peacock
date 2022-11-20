import { useState, useContext } from 'react';
import { Styled } from './index.styles';
import { CardComponentProps } from '../../index.types';
// import { IntroProps } from '../index.types';
import TechStackPopupComponent from '../techStackPopupComponent';
import { TechPopUpOptions } from '../../organisms/workExperience';

function TimelineCardComponent({cardData, id}: CardComponentProps) {

    const { currentOpenPopUp, setCurrentOpenPopUp } = useContext(TechPopUpOptions);
    function seeTechnologiesClickHandler(e: any) {
        if ((e.keyCode === 13) || (e?.type ==="click")) {
            if ( id === currentOpenPopUp ) {
                setCurrentOpenPopUp(-1);
            }
            else {
                setCurrentOpenPopUp(id);
            }
        }
    }

    return (
        <>
            <Styled>
                <div key={id} className={`card-container ` + ((id % 2 == 0)? `right-card`:`left-card`)}>
                    <div className="timeline-card">
                        <div className="timeline-year">
                            {cardData?.year}
                        </div>
                        <div className="timeline-description">
                            {cardData?.description}
                        </div>
                        <div className="tech-used"  onClick={(e): any => seeTechnologiesClickHandler(e)} onKeyDown={(e): any => seeTechnologiesClickHandler(e)}>
                            <div className="shine">
                                <div className="cta-text">
                                    {
                                        (currentOpenPopUp === id)? `Hide technologies used`: `Show technologies used`
                                    }
                                </div>
                            </div>
                            <div className={"tech-stack-pop-up " + ((currentOpenPopUp === id)? `show-pop-up`: `hide-pop-up`)}>
                                <TechStackPopupComponent techStack={cardData?.technologyImagesCollection} id={id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Styled>
        </>
    );
}



export default TimelineCardComponent;