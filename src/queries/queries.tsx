import { gql } from '@apollo/client';

export const TimeLineDataQuery = gql`
    query TimeLineDataQuery{
        workExperienceCardDataEntriesCollection{
            items{
                entryName
                description
                year
                technologyImagesCollection{
                    items{
                        title
                        fileName
                        url
                    }
                }
            }
        }
    }
`;