import styled from 'styled-components';
// import url('https://fonts.googleapis.com/css?family=Cairo');

export const Styled = styled.div`
.work-experience-carousel {
    width: 90%;
    margin: auto;
    background: #000;
    height: 400px;
    border-radius: 20px;
    position: relative;
    .carousel-arrow {
        padding: 15px 17px;
        border-radius: 50%;
        border: 1px transparent;
        position: absolute;
        top: 43%;
        cursor: pointer;
        z-index: 1;
    }
    .left-arrow {
        right: 98.5%;
    }
    .right-arrow {
        left: 98.5%;
    }
    .main-carousel-container {
        position: relative;
        border: 1px transparent;
        border-radius: 50%;
        transform: rotate(0deg);
        transition: transform 0.7s linear;
        width: 100%;
        .items {
            display: flex;
            flex-direction: column;
            .container {
                position: relative;
                transform: translate(-50%,25%);
                transform: rotate(0deg);
                width: 100%;
                .active-class {
                    z-index: 100000 !important;
                }
                .card-container {
                    position: relative;
                    /* animation: anim-ball 5s linear infinite; */
                    /* transform-origin: 100% 100%; */
                    .work-experience-card-container {
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        position: absolute;
                        right: 0;
                        .image-card-atom {
                            width: 50%;
                            height: 400px;
                            border-radius: 0px 20px 20px 0px;
                            &:nth-child(3n + 2) {
                                background: #3F3F3F;
                            }
                        }
                        .text-card-atom {
                            width: 50%;
                            height: 400px;
                            border-radius: 20px 0px 0px 20px;
                            &:nth-child(3n + 1) {
                                background: #464646;
                            }
                        }
                    }
                    .currently-displayed-class {
                        z-index: 10000;
                    }
                }
            }
        }
    }
}
@keyframes anim-ball {
    from {  transform: rotate(0deg);   }
    to {    transform: rotate(360deg); }
}
.hide-class {
    display: none !important;
}
.old-class {
    display: none;
}
`;