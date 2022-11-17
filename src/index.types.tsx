export interface TimelineComponentProps {
    timelineData: CardDataProps[];
}

export interface CardDataProps {
    year: string;
    description: string;
}

export interface CardComponentProps {
    cardData: CardDataProps;
    id: number;
}