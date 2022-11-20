import styled from 'styled-components';

export const Styled = styled.div`
    .pop-up-container {
        animation: slide 0.5s forwards;
        border: 1px solid white;
        border-radius: 16px;
        position: absolute;
        padding: 25px 50px 50px 50px;
        top: -116px;
        padding-right: 4px;
        &.right-card {
            left:125%;
        }
        &.left-card {
            right: 125%;
        }
        .pop-up-header {
            margin-bottom: 25px;
            margin-left: -40px;
        }
        .tech-used {
            max-height: 500px;
            overflow-y: auto;
            overflow-x: hidden;
            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                background: black;
            }
            ::-webkit-scrollbar-thumb {
                background-color: white;
                border: 1px solid transparent;
                border-radius: 4px;
                border: 4px solid rgba(0, 0, 0, 0);
                background-clip: padding-box;
            }
            .individual-tech-item {
                margin-bottom: 16px;
                border: 1px solid transparent;
                padding: 4px;
                margin-right: 46px;
                &:hover {
                    background: rgba(255,255,255,0.25);
                    border-radius: 8px;
                }
            }
        }
    }

    @keyframes slide {
        0% {transform: translateX(-10%)}
        100% { transform: translateX(0%); }
    }
`;
