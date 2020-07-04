import styled from 'styled-components';

export const VideoContainer = styled.video`
    display: 'block';
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    position: absolute;
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    transition: opacity 1s;
    width: 100%;
`;

export const IconContainer = styled.div`
    bottom: 77px;
    left: 50vw;
    position: absolute;
    transform: translateX(0);
`;

export const CanvasContainer = styled.canvas`
    display: ${props => props.hide ? 'none' : 'block'};
    height: ${props => props.canvasHeight ? `${props.canvasHeight}px` : '0px'};
    width: ${props => props.canvasWidth ? `${props.canvasWidth}px` : '0px'};
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    transition: opacity 1s;
`;

export const PreviewImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;