import { useEffect, useState, useRef } from 'react';

const Squares = () => {
  const [greenVisible, setGreenVisible] = useState(false);
  const [brownVisible, setBrownVisible] = useState(false);
  const [yellowVisible, setYellowVisible] = useState(false);
  const [lightBrownVisible, setLightBrownVisible] = useState(false);
  const [redVisible, setRedVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [fadeAway, setFadeAway] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const squaresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (squaresRef.current) {
        const rect = squaresRef.current.getBoundingClientRect();
        const fadeThreshold = window.innerHeight / 2;
        const newFadeAway = rect.top < -fadeThreshold;
        setFadeAway(newFadeAway);
        
        // Check if component is in view
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsInView(isVisible);
        
        // Reset animations when component is out of view
        if (!isVisible) {
          setGreenVisible(false);
          setBrownVisible(false);
          setYellowVisible(false);
          setLightBrownVisible(false);
          setRedVisible(false);
          setTextVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const greenTimer = setTimeout(() => setGreenVisible(true), 300);
    const textTimer = setTimeout(() => setTextVisible(true), 450);
    const brownTimer = setTimeout(() => setBrownVisible(true), 600);
    const yellowTimer = setTimeout(() => setYellowVisible(true), 900);
    const lightBrownTimer = setTimeout(() => setLightBrownVisible(true), 1200);
    const redTimer = setTimeout(() => setRedVisible(true), 1600);

    return () => {
      clearTimeout(greenTimer);
      clearTimeout(textTimer);
      clearTimeout(brownTimer);
      clearTimeout(yellowTimer);
      clearTimeout(lightBrownTimer);
      clearTimeout(redTimer);
    };
  }, [isInView]);

  return (
    <div 
      ref={squaresRef} 
      className={`
        relative 
        h-[90vh]
        -mt-[10vh]
        transition-opacity 
        duration-700
        ${fadeAway ? 'opacity-0' : 'opacity-100'}
      `}
    >
      {/* Green Square */}
      <div 
        className={`
          absolute 
          w-[20.39vw] 
          h-[26.68vh] 
          left-[calc(10vw+15.08vw+0.234vw)]
          top-[25.96vh]
          bg-[#407A54]
          transition-all 
          duration-700
          ease-in-out
          origin-right
          ${greenVisible 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-x-0'
          }
        `}
      >
        <div 
          className={`
            absolute
            w-[9.375vw]
            h-[10.697vh]
            left-[0.5vw]
            top-[15.02vh]
            text-[#F5D0B3]
            font-inria
            font-bold
            text-[2.5vw]
            leading-tight
            transition-opacity
            duration-500
            whitespace-nowrap
            ${textVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          Hi, my<br />name is
        </div>
      </div>

      {/* Brown Rectangle */}
      <div 
        className={`
          absolute 
          w-[15.08vw] 
          h-[34.74vh] 
          left-[10vw]
          top-[25.96vh]
          bg-[#6A5550]
          transition-all 
          duration-700
          ease-in-out
          origin-top
          ${brownVisible 
            ? 'opacity-100 scale-y-100' 
            : 'opacity-0 scale-y-0'
          }
        `}
      />

      {/* Yellow Rectangle */}
      <div 
        className={`
          absolute 
          w-[14.69vw] 
          h-[7.57vh] 
          left-[calc(10vw+15.08vw+0.234vw)]
          top-[calc(25.96vh+26.68vh+0.361vh)]
          bg-[#FEC439]
          transition-all 
          duration-700
          ease-in-out
          origin-left
          ${yellowVisible 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-x-0'
          }
        `}
      >
        <div 
          className={`
            absolute
            w-full
            h-full
            flex
            items-center
            left-[0.5vw]
            text-black
            font-inria
            font-bold
            text-[1.8vw]
            transition-opacity
            duration-500
            ${yellowVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          Patrick Nguyen
        </div>
      </div>

      {/* Light Brown Rectangle */}
      <div 
        className={`
          absolute 
          w-[5.39vw] 
          h-[20.79vh] 
          left-[calc(10vw+15.08vw+0.234vw+14.69vw+0.234vw)]
          top-[calc(25.96vh+26.68vh+0.361vh)]
          bg-[#AA835C]
          transition-all 
          duration-700
          ease-in-out
          origin-top
          ${lightBrownVisible 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-y-0'
          }
        `}
      />

      {/* Red Rectangle */}
      <div 
        className={`
          absolute 
          w-[30.08vw] 
          h-[12.74vh] 
          left-[10vw]
          top-[calc(25.96vh+34.74vh+0.361vh)]
          bg-[#C03B2A]
          transition-all 
          duration-700
          ease-in-out
          origin-right
          ${redVisible 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-x-0'
          }
        `}
      >
        <div 
          className={`
            absolute
            w-[14vw]
            left-1/2
            ml-[1vw]
            text-[#BEAD8E]
            font-inria
            font-bold
            text-[1.1vw]
            leading-tight
            transition-opacity
            duration-500
            whitespace-pre-wrap
            ${redVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          I'm a 4th year student at
          UC Davis and fullstack
          SWE passionate about
          creating user driven
          products
        </div>
      </div>
    </div>
  );
};

export default Squares; 