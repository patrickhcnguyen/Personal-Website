import { useEffect, useState } from 'react';

const Squares = () => {
  const [greenVisible, setGreenVisible] = useState(false);
  const [brownVisible, setBrownVisible] = useState(false);
  const [yellowVisible, setYellowVisible] = useState(false);
  const [lightBrownVisible, setLightBrownVisible] = useState(false);
  const [redVisible, setRedVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const greenTimer = setTimeout(() => {
      setGreenVisible(true);
    }, 300);

    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 450);

    const brownTimer = setTimeout(() => {
      setBrownVisible(true);
    }, 600);

    const yellowTimer = setTimeout(() => {
      setYellowVisible(true);
    }, 900);

    const lightBrownTimer = setTimeout(() => {
      setLightBrownVisible(true);
    }, 1200);

    const redTimer = setTimeout(() => {
      setRedVisible(true);
    }, 1600);

    return () => {
      clearTimeout(greenTimer);
      clearTimeout(textTimer);
      clearTimeout(brownTimer);
      clearTimeout(yellowTimer);
      clearTimeout(lightBrownTimer);
      clearTimeout(redTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">

      {/* Green Square with Text */}
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
            top-[17.02vh]
            text-[#F5D0B3]
            font-inria
            font-bold
            text-[2.5rem]
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
            text-[2rem]
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
            w-[14.69vw]
            left-1/2
            ml-[1vw]
            text-[#BEAD8E]
            font-inria
            font-bold
            text-[1rem]
            leading-tight
            transition-opacity
            duration-500
            ${redVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          I'm a 4th year student at UC Davis<br />
          and fullstack SWE passionate<br />
          about creating user driven<br />
          products
        </div>
      </div>
    </div>
  );
};

export default Squares; 