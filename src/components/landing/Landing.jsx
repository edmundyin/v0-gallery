'use client'
import React from 'react';
import { delay, easeIn, easeInOut, motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactLenis, useLenis } from 'lenis/react'

const phrases = [
  "where performance converges with fashion",
  "redefining comfort in rock climbing",
  "we present to you, vzero.",
  "by xander & tomoi"
]

const phrases1 = [
  "based in San Diego",
  "manufactured in Los Angeles",
  "fabrics and cotton sourced from Japan"
]

const Landing = () => {

    const lenis = useLenis(({ scroll }) => {
    });

    return (
    <ReactLenis root> 
        <div className="relative w-full h-screen overflow-hidden">
          <div className="flex items-center flex-col gap-[20vw] bottom-0 text-white">
            <MaskText phrases={phrases}/>
          </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/vzerogallery.appspot.com/o/images%2Fxander.jpeg?alt=media" className="sticky right-0 overflow-hidden w-full h-auto ease-in-out" draggable="false" />
        </div>
        <div className="relative w-full h-screen">
          <div className="flex items-center flex-col gap-[20vw] bottom-0 text-white">
              <MaskTextNoDelay phrases={phrases1}/>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/vzerogallery.appspot.com/o/images%2Fxander2.jpeg?alt=media" className="object-cover sticky w-full h-screen" draggable="false"/>
        </div>
    </ReactLenis>
    );
};

export default Landing;


export function MaskText({phrases}) {

    const animation = {
      initial: {y: "100%"},
      enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.75 + 0.125 * i}})
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

