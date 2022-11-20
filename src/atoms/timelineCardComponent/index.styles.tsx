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
    .timeline-card {
        .timeline-year {
            font-size: 28px;
            font-weight: 700;
            color: gold;
        }
        .timeline-description {
            margin-top: 12px;
            margin-bottom: 12px;
        }
        .tech-used{
            position: relative;
            .shine {
                overflow: hidden;
                position: relative;
                overflow: hidden;
                width: 100%;
                height: 100%;
                display: inline-block;
                border: 1px solid transparent;
                border-radius: 10px;
                .cta-text {
                    font-size: 14px;
                    font-weight: 800;
                    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(221,10,10,1) 0%, rgba(0,212,255,1) 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin: 0;
                    cursor: pointer;
                    transition: all 1s ease-in-out;
                    overflow: hidden;
                    cursor: pointer;
                }
                &:after {
                    content: "";
                    position: absolute;
                    top: -110%;
                    left: -210%;
                    width: 200%;
                    height: 200%;
                    opacity: 0;
                    background: rgba(255, 255, 255, 0.13);
                    background: linear-gradient(
                        to right, 
                        rgba(255, 255, 255, 0.13) 0%,
                        rgba(255, 255, 255, 0.13) 77%,
                        rgba(255, 255, 255, 0.5) 92%,
                        rgba(255, 255, 255, 0.0) 100%
                    );
                    cursor: pointer;
                }
                &:hover:after {
                    opacity: 1;
                    top: -30%;
                    left: -30%;
                    transition-property: left, top, opacity;
                    transition-duration: 0.7s, 0.7s, 0.15s;
                    transition-timing-function: ease;
                    cursor: pointer;
                }
                &:active:after {
                    opacity: 0;
                }
            }
            .tech-stack-pop-up {
                &.hide-pop-up {
                    display: none;
                }
            }
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

@keyframes shine {
  to {
    opacity: 1;
    right: 210%;
  }
}
`;
