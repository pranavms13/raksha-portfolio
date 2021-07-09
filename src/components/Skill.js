import React from 'react';

const Skill = () => {
  return (
    <section className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Adobe XD'>
          <img src='./images/icons/XD.png' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Adobe XD
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Adobe Illustrator'>
          <img src='./images/icons/Illustrator.png' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Adobe Illustrator
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Adobe Photoshop'>
          <img src='./images/icons/Photoshop.png' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Adobe Photoshop
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Adobe InDesign'>
          <img src='./images/icons/indesign.png' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Adobe InDesign
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Figma' style={{height: '64px'}}>
          <img src='./images/icons/figma.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Figma
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='InVision'>
          <img src='./images/icons/invision.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          InVision
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Corel Draw'>
          <img src='./images/icons/corel.png' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Corel Draw
        </div>
      </div>
    </section>
  );
};

export default Skill;
