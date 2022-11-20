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

export const TrialQuery= gql`{
        getPokemon(pokemon: dragonite) {
          sprite
          num
          species
          color
        }
}`;