import styled from 'styled-components';
// import url('https://fonts.googleapis.com/css?family=Cairo');

export const Styled = styled.div`
.image-card-atom-container {
    border-radius: 20px 0px 0px 20px;
    color: gold;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    .tech-section-subheading {
        color: gold;
        font-weight: 700;
    }
    .technology-section {
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        margin: auto;
        flex-wrap: wrap;
        overflow-y: auto;
        height: 100%;
        .individual-tech-item {
            margin: 10px;
        }
    }
}
`;