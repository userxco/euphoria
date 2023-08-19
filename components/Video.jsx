import React, { useRef, useState } from 'react';
import x from '../assets/pexels-cottonbro-9156344.mp4';
import { BsPauseCircle, BsPlayCircle } from 'react-icons/bs';

const Video = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();
    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);
        if(playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    };
  return (
    <div className='relative'>
        <video 
        src={x}
        type='video/mp4'
        loop
        controls={false}
        muted
        ref={vidRef}
        />
            <div className='absolute inset-0 flex justify-center items-center'>
                <div onClick={handleVideo} className='w-[100px] h-[100px] rounded-[50%] cursor-pointer flex justify-center items-center'>
                    {playVideo ? <BsPauseCircle color='#fff' size={300}/> : <BsPlayCircle color='#fff' size={300}/>}
                </div>
            </div>
    </div>
  )
}

export default Video