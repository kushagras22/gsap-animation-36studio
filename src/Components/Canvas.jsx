import { useEffect, useRef, useState } from 'react'
import image from '../image'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import PropTypes from 'prop-types';


const Canvas = ({ details }) => {

  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = useState({ value: startIndex });

  const canvasRef = useRef(null);


  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
      repeat: -1,
    });
  }, []);
  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = `${canvas.offsetWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    }
  }, [index]);

  return (
    <>
      <canvas
        data-scroll
        data-scroll-speed={
          Math.random().toFixed(1)
        }
        ref={canvasRef}
        className='absolute'
        style={{ width: `${size}px`, height: `${size}px`, top: `${top}%`, left: `${left}%`, zIndex: `${zIndex}` }}
        id="canvas"></canvas>

    </>
  )
}

Canvas.propTypes = {
  details: PropTypes.shape({
    startIndex: PropTypes.number.isRequired,
    numImages: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    zIndex: PropTypes.number.isRequired
  }).isRequired
};

export default Canvas
