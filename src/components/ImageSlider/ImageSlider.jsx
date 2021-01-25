import React, {useState} from 'react';
import {ImageData} from './ImageData';
import './image-slider.scss';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextPicture = () => {
        setCurrent(current === ImageData.length - 1 ? 0 : current + 1)
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? ImageData.length - 1: current - 1)
    }
    
    // if (!Array.isArray(ImageData) || ImageData.length <= 0) {
    //     return null;
    // }
   
    return (
            <section className='image-page'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevPicture}/>
                <FaArrowAltCircleRight className='right-arrow' onClick={nextPicture}/>
                {ImageData.map((image, index) => {
                    return (
                        <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                            {index === current && (
                                <img src={image.image} alt='' className='image'/>
                            ) }
                            
                        </div>
                    )
                })}
            </section>
    )
}

export default ImageSlider;
