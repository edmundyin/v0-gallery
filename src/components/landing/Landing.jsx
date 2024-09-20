'use client'
import React, { useEffect, useRef, useState } from 'react';
import { delay, easeIn, easeInOut, motion, useTime, useTransform} from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactLenis, useLenis } from 'lenis/react'
import CountUp, { useCountUp } from 'react-countup';

const phrases = [
  "where performance converges with fashion",
  "redefining comfort in rock climbing",
  "we present to you, vzero.",
  "by xander & tomoi"
]
const phrases1 = [
  "based in San Diego",
  "manufactured in Los Angeles",
  "fabrics and materials sourced from Japan"
]

const phrases2 = [
  "santee collection: 8/28",
  "instagram",
  "website"
]

const Landing = () => {

  const [visible, setVisible] = useState(true);
  const lenis = useLenis(({ scroll }) => {});

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale025 = useTransform(scrollYProgress, [0,1], [1,0.25]);

  useEffect(() => {
    if (visible) {
      document.getElementById("hidden1").style.display = "none";
      document.getElementById("hidden2").style.display = "none";
      // document.getElementById("hidden3").style.display = "none";
    } else {
      document.getElementById("hidden1").style.display = "";
      document.getElementById("hidden2").style.display = "";
      // document.getElementById("hidden3").style.display = "";
    }
  });
    

  return (
    <ReactLenis root> 
      {visible && (
            <div className="w-full h-[100%] bg-black z-50 touch-none overflow-hidden">
              <div className="flex h-dvh justify-center items-center text-white">
                <CountUp end={100} duration={2} suffix='%' onEnd={() => setVisible(false)} />
              </div>
            </div>
          )}        
        
          <div id="hidden1" className="sticky top-0 w-full h-dvh overflow-hidden placeholder-transparent">
            <div className="flex items-center flex-col gap-[20vw] bottom-0 text-white">
              <MaskText phrases={phrases}/>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/vzerogallery.appspot.com/o/images%2Fxander1-min.jpeg?alt=media" 
                className="object-cover right-0 w-full h-screen" draggable="false" />
          </div>

          <div id="hidden2" className="sticky w-full h-dvh overflow-hidden">
            <div className="flex items-center flex-col gap-[20vw] bottom-0 text-white">
                <MaskTextNoDelay phrases={phrases1}/>
              </div>
              <img src="https://firebasestorage.googleapis.com/v0/b/vzerogallery.appspot.com/o/images%2Fxander2-min.jpeg?alt=media" 
                  className="object-cover w-full h-screen" draggable="false"/>
          </div>
          

    </ReactLenis>
    );
};

export default Landing;

export function MaskText({phrases}) {

    const animation = {
      initial: {y: "100%"},
      enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.5 + 0.125 * i}})
    }
  
    const { ref, inView, entry } = useInView({
      threshold: 0.75,
      triggerOnce: true
    });
  
    return(
      <div ref={ref} className={"absolute font-montreal text-[4vw] z-40 left-0 bottom-0 ml-8 mb-8"}>
        {
          phrases.map( (phrase, index) => {
            return <div key={index} className={"overflow-hidden"}>
              <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
            </div>
          })
        }
      </div>
    )
}

export function MaskTextNoDelay({phrases}) {

    const animation = {
      initial: {y: "100%"},
      enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: + 0.125 * i}})
    }
  
    const { ref, inView, entry } = useInView({
      threshold: 0.75,
      triggerOnce: true
    });
  
    return(
      <div ref={ref} className={"absolute font-montreal text-[4vw] z-40 left-0 bottom-0 ml-8 mb-8"}>
        {
          phrases.map( (phrase, index) => {
            return <div key={index} className={"overflow-hidden"}>
              <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
            </div>
          })
        }
      </div>
    )
}