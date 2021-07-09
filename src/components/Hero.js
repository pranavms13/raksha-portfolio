import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const greetchooser = () => {
  let greetarray = ['Hi There !', 'Hola !', 'Bonjour !', 'Salve !'];
  return greetarray[Math.floor(Math.random()*greetarray.length)];
}

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (    
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'>{greetchooser()} I’m Raksha</h1>
        <p className='tracking-wide leading-relaxed'>
          I have a passion for designing user-friendly, accessible and responsive UI/UX Designs. I never stop learning and for me, each new project is another adventure.{' '}
        </p>
      </div>
    </section>
  );
};

export default Hero;
