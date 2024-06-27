import './Video.css' ;
import React from 'react';

function Video(){
    const vidRef = React.useRef();
    const [playV,setPlayv]=React.useState(false);
    function handleClic(){
        document.querySelector('.Video-container video').style.visibility="visible";
        setPlayv((playV)=> !playV);
        if(playV){
            vidRef.current.pause();
            document.querySelector('.Video-container video').style.visibility="hidden";
        }else{
            vidRef.current.play();
            document.querySelector('.Video-container video').style.visibility="visible";
        }
    }

    return(
    <div className="Video-container">
        <video ref={vidRef} src="/Rgericht/assets/video.mp4" loop controls={false}></video>
        <div className='cirdev'>
            <div onClick={handleClic} className='circle'>
                {playV ? <div className='play'>| |</div>:<div className='triangle'></div>}
            </div>
        </div>
    </div>);
} export default Video
