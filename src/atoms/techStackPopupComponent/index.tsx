import React from 'react';
import { Styled } from './index.styles';
import { TechStackComponentProps } from '../../index.types';

function TechStackPopupComponent({techStack, id}: TechStackComponentProps) {
    return (
        <>
            <Styled>
                <div className={"pop-up-container " + ((id % 2 == 0)? `right-card`:`left-card`)} key={id}>
                    <div className="pop-up-header">
                        Technologies used:
                    </div>
                    <div className="tech-used">
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



export default TechStackPopupComponent;