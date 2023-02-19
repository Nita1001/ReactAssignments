import { useRef } from 'react';
import Button from './Button'
const Player = () => {
    const videoRef = useRef(null);

    const playVideo = () => {
        videoRef.current.play();
    };

    const pauseVideo = () => {
        videoRef.current.pause();
    };

    return (
        <div>
            <video ref={videoRef} width="400px" height="400px" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <div className='buttons'>
                <Button clickHandler={playVideo} label='Play'></Button>
                <Button clickHandler={pauseVideo} label='Pause'></Button>
            </div>
        </div>
    )
}

export default Player;