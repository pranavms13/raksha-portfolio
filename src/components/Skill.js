import React from 'react';

const Skill = () => {
  return (
    <section className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Adobe XD'>
          <center>
          <img src='./images/icons/XD.png' alt='' loading='lazy' className='w-16 mb-1' style={{ width: '64px', height:'64px' }}/>
          Adobe XD
          </center>
        </div>
        <div className='flex flex-col items-center' tabIndex='1' role='img' aria-label='Adobe Illustrator'>
          <center>
          <img src='./images/icons/Illustrator.png' alt='' loading='lazy' className='w-16 mb-1' style={{ width: '64px', height:'64px' }}/>
          Adobe Illustrator
          </center>
        </div>
        <div className='flex flex-col items-center' tabIndex='2' role='img' aria-label='Adobe Photoshop'>
          <center>
          <img src='./images/icons/Photoshop.png' alt='' loading='lazy' className='w-16 mb-1' style={{ width: '64px', height:'64px' }} />
          Adobe Photoshop
          </center>
        </div>
        <div className='flex flex-col items-center' tabIndex='3' role='img' aria-label='Adobe InDesign'>
          <center>
          <img src='./images/icons/indesign.png' alt='' loading='lazy' className='w-16 mb-1' style={{ width: '64px', height:'64px' }} />
          Adobe InDesign
          </center>
        </div>
        <div className='flex flex-col items-center' tabIndex='4' role='img' aria-label='Figma' style={{height: '64px'}}>
          <center>
          <img src='./images/icons/figma.svg' alt='' loading='lazy' className='w-16 mb-1' style={{ width: '64px', height:'64px' }} />
          Figma
          </center>
        </div>
        <div className='flex flex-col items-center' tabIndex='5' role='img' aria-label='InVision'>
          <center>
          <img src='./images/icons/invision.svg' alt='' loading='lazy' className='w-16 mb-1' style={{ width: '64px', height:'64px' }}/>
          InVision
          </center>
        </div>
        <div className='flex flex-col items-center' tabIndex='6' role='img' aria-label='Corel Draw'>
          <center>
          <img src='./images/icons/corel.png' alt='' loading='lazy' className='w-16 mb-1' style={{ width: '64px', height:'64px' }} />
          Corel Draw
          </center>
        </div>
      </div>
    </section>
  );
};

export default Skill;
