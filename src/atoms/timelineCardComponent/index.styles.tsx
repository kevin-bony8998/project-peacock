import styled from 'styled-components';

export const Styled = styled.div`
.card-container {
    width: 200px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 20px;
    margin: 30px;
    position: relative;
    animation-duration: 5s;
    animation-iteration-count: 1;
    animation-name: fade-in;
    &::before {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        border: 1px solid grey;
        border-radius: 50%;
        background-color: white;
        top: 45%;
    }
    &.right-card {
        &::before {
            left: -35px;
        }
    }
    &.left-card {
        right: 300px;
        &::before {
            right: -37px;
        }
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
`;
