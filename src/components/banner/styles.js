import styled from "styled-components";


export const Banner = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    background-color: #fff;

    .banner-wrapper {
        position: relative;
        max-width: 1800px;
        width: 100%;
        height: calc(100% - 60px);
        margin: 30px;
        display: flex;
        align-items: center;
        background: rgba(217, 217, 217, 0.085);
        box-shadow: inset 90.6667px -90.6667px 90.6667px rgba(165, 165, 165, 0.085), inset -90.6667px 90.6667px 90.6667px rgba(255, 255, 255, 0.085);
        backdrop-filter: blur(6.34667px);
        border-radius: 50px;
        z-index: 1;
    }

    .image-container {
        max-width: 1800px;
        width: 100%;
        height: calc(100% - 60px);
        margin: 0 30px;
        padding: 10px;
        position: absolute;        
    }

    .image-wrapper {
        width: 50%;
    }
    
    .image-container  .image-wrapper img {
        max-height: 800px;
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1;
    }

    .space-holder {
        width: 50%;
        height: 100%;
    }

    .text-container {
        padding: 0 40px;
    }

    .text-container h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        
        text-transform: uppercase;
        color: #272727;
    }

    .text-container h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        
        text-transform: uppercase;
        color: #2C2C2C;
    }

    .text-container h2 strong {
        font-weight: 900;
    }


    .redux-icon {
        position: absolute;
        right: 45px;
        bottom: 45px;
    }

    @media (max-width: 1312px) {
        .space-holder {
            width: 0%;
            height: 0%;
        }

        .text-container {
            margin: 0 auto;
        }
    }

    @media (max-width: 1024px) {
        .image-container {
            width: 65%;
            margin: 0;
            padding: 0;
        }

        .image-wrapper {
            width: 100%;
        }

        .image-wrapper img {
            object-fit: contain !important;
        }
    }

    @media (max-width: 768px) {
        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .text-container h1 {
            font-size: 8vw;
            text-align: center;
        }

        .text-container h2 {
            font-size: 3.9vw;
            text-align: center;
        }
    }

    @media (max-width: 500px) {
        .image-container {
            width: 100%;
        }

        .banner-wrapper {
            margin: 10px;
            border-radius: 20px;
            height: calc(100% - 45px);
        }
    }

`