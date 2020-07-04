import React, { Component } from 'react';
import { VideoContainer, IconContainer, CanvasContainer, PreviewImageWrapper } from './videoStyles';
import { Button } from '../appStyles';

class ImageCapture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            processing: false,
            canvasWidth: 0,
            canvasHeight: 0
        }
    }

    handleSuccess = (stream) => {
        const video = document.querySelector('video');
        window.stream = stream;
        video.srcObject = stream;
    }
    
    handleError = (error) => {
        console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
    }

    componentDidMount() {
        this.enableVideoConfiguration();
    }

    enableVideoConfiguration = () => {
        const constraints = {
            audio: false,
            video: true
        };
        navigator.mediaDevices.getUserMedia(constraints).then(this.handleSuccess).catch(this.handleError);
    }
        
    captureImage = () => {
        this.setState({
            processing: true
        });
        const canvas = window.canvas = document.querySelector('canvas');
        const video = document.querySelector('video');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        this.setState({
            canvasWidth: canvas.width,
            canvasHeight: canvas.height
        })
    }

    storeImage = () => {
        setTimeout(() => this.props.history.push('/'), 5000);
    }

    reTake = () => {
        this.setState({
            processing: false
        });
        this.enableVideoConfiguration();
    }


    render() {
        const { processing, canvasHeight, canvasWidth } = this.state;
        return(
            <>
            { !processing && <>
                <VideoContainer playsInline autoPlay></VideoContainer>
                <IconContainer onClick={this.captureImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-10 -10 68 68">
                        <title>title</title>
                        <circle cx="24" cy="24" r="34">
                            <title>Capture</title>
                        </circle>
                        <path className="on" transform="scale(0.6), translate(17,18)" d="M38 22h-3.4c0 1.49-.31 2.87-.87 4.1l2.46 2.46C37.33 26.61 38 24.38 38 22zm-8.03.33c0-.11.03-.22.03-.33V10c0-3.32-2.69-6-6-6s-6 2.68-6 6v.37l11.97 11.96zM8.55 6L6 8.55l12.02 12.02v1.44c0 3.31 2.67 6 5.98 6 .45 0 .88-.06 1.3-.15l3.32 3.32c-1.43.66-3 1.03-4.62 1.03-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c1.81-.27 3.53-.9 5.08-1.81L39.45 42 42 39.46 8.55 6z" fill="white"></path>
                        <path className="off" transform="scale(0.6), translate(17,18)" d="M24 28c3.31 0 5.98-2.69 5.98-6L30 10c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zm10.6-6c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c6.56-.97 12-6.61 12-13.44h-3.4z" fill="white"></path>
                    </svg>
                </IconContainer>
            </>}
            <PreviewImageWrapper>
                <CanvasContainer canvasWidth={canvasWidth} hide={!processing} canvasHeight={canvasHeight}></CanvasContainer>
            </PreviewImageWrapper>
            { processing && <IconContainer>
                <Button onClick={this.storeImage}>Save</Button>
                <Button onClick={this.reTake}>Retake</Button>
                </IconContainer> 
            }
            </>
        );
    }

}

export default ImageCapture;