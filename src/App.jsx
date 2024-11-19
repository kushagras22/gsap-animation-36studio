import "./index.css"
import data from './data'
import Canvas from './Components/Canvas'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="overflow-hidden font-[Helvetica_Now_Display]">
        <div className="text-3xl relative w-full min-h-screen">
          {data.map((item, index) => (
            <div key={index}>
              {item.map((canvasdets, i) => (
                <Canvas key={i} details={canvasdets} />
              ))}
            </div>
          ))}
        </div>

        <div className="w-full absolute top-0 h-screen text-white">
          <nav className="p-8 w-full flex justify-between bg-black/50">
            <div className="brand text-2xl font-regular">Thirtysixstudios</div>
            <div className="links flex gap-10">
              {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (

                <a key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-white hover:text-gray-400 transition-colors text-md"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          <div className="relative w-64 h-64 ">
            <style>
              {`
          @keyframes rotateText {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .rotating-text {
            animation: rotateText 20s linear infinite;
            transform-origin: center;
          }
        `}
            </style>
            <svg viewBox="0 0 100 100" className="w-full h-full absolute ml-[1000px] mt-[250px] ">
              <defs>
                <path
                  id="textCircle"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
              </defs>
              <text className="rotating-text uppercase text-[8px] tracking-wider fill-white">
                <textPath href="#textCircle" startOffset="0%">
                  THIRTYSIXSTUDIO — FOR ALL THINGS DIGITAL PRODUCTION —
                </textPath>
              </text>
            </svg>
          </div>

          <div className="w-full px-[20%]">
            <div className="text w-[40%] ">
              <h3 className="text-4xl top-0 text-medium leading-[1.2]">At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.</h3>
              <p className="text-md w-full mt-10 font-light">
                We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.
              </p>
              <p className="text-md w-full mt-10 font-light">scroll</p>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-[16.2rem] font-md leading-none tracking-tight mt-36">Thirtysixstudio</h1>
          </div>


          <div className="w-full h-screen relative  text-white mt-32 px-10">
            <div className="text-3xl absolute w-full min-h-screen">
              {data.map((item, index) => (
                <div key={index}>
                  {item.map((canvasdets, i) => (
                    <Canvas key={i} details={canvasdets} />
                  ))}
                </div>
              ))}
            </div>
            <h1 className="text-8xl font-normal tracking-tighter">about our studio</h1>
            <p className="text-3xl leading-[1.2] w-[80%] mt-10 font-light">we are a passionate team of designers, developers and creative technologists dedicated to crafting exceptional digital experiences. With expertise in motion design, interactive development and cutting-edge technology, we help brands tell their stories in innovative and engaging ways.</p>
            <video
              className="w-[50%]  mt-10 rounded-t-full rounded-b-full bg-black"
              src="https://directus.funkhaus.io/assets/f08ea7b3-5d63-4ae0-9d87-eb2e5d85cbb6"
              autoPlay
              muted
              loop
              playsInline
            ></video>

          </div>

        </div >

      </div >
    </>
  )
}

export default App
