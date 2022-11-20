export interface TimelineComponentProps {
    timelineData: CardDataProps[];
}

export interface CardDataProps {
    year: string;
    description: string;
    entryName: string;
    technologyImagesCollection: TechProps;
    // techStack: pi;
}

export interface TechProps {
    items: TechItemProps;
}

export interface TechItemProps {
    fileName: string;
    url: string;
    title: string;
}

export interface CardComponentProps {
    cardData: CardDataProps;
    id: number;
}