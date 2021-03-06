import React from 'react';
import projects from '../projectData';

const Project = () => {
  return (
    <>
      <section className='my-28 px-5' id='projects'>
        <header className='text-2xl font-bold pt-10'>
          <h2>Projects</h2>
        </header>
        <div className='my-7 space-y-24'>
          {projects.map((project, index) => (
            <article className='flex flex-wrap md:justify-between md:items-center' key={index}>
              <picture className={index % 2 === 0 ? 'w-full md:w-6/12 shadow-lg ' : 'w-full md:w-6/12 shadow-lg md:order-1'} style={{ borderRadius: '30px', cursor: 'pointer' }} >
                <source
                  srcSet={`${project.image}.webp 1920w,
                        ${project.image}.webp 768w,
                        ${project.image}.webp 320w`}
                  sizes='(min-width: 768px) 50vw, 100vw'
                  type='image/webp'
                />
                <source srcSet={`${project.image}.jpg 768w,`} sizes='(min-width: 768px) 50vw, 100vw' type='image/jpg' />

                <img width='768px' height='575px' loading='lazy' alt={project.title} className='rounded-lg' onClick={() => {window.open(project.link, '_blank')}}/>
              </picture>
              <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <h3 className='uppercase font-bold text-lg' style={{ cursor: 'pointer' }} onClick={() => {window.open(project.link, '_blank')}}>{project.title}</h3>
                <p dangerouslySetInnerHTML={{__html: project.description}}/>
                <div className='flex overflow-auto space-x-3 pb-2'>
                  {project.tools.map((disc, index) => (
                    <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm' key={index}>
                      {disc}
                    </span>
                  ))}
                </div>
                {/* <div className='w-auto flex space-x-5 relative'>
                  <a href={project.link} className='border border-gray-500 rounded-lg px-2 py-1' target='_blank' rel='noreferrer'>
                    <img src='./images/icons/behance.svg' alt='link to live website' width='30px' height='30px' />
                  </a>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className='mx-5'>
        <a href='https://www.behance.net/raksha_s' target='_blank' rel='noreferrer' className='smob bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto'>
          <span>See more on Behance</span>
        </a>
      </div>
    </>
  );
};

export default Project;
