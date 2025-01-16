import React from 'react'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-4 text-teal-400'>Skills</h1>

                <div className='mb-6'>
                    <h2 className='text-xl font-semibold mb-2 text-teal-300'>Programming Languages</h2>
                    <p className='leading-relaxed text-base'>
                        <strong>Proficient:</strong> C++, Python, JavaScript/TypeScript, HTML, CSS<br/>
                        <strong>Familiar:</strong> Java, C, Assembly
                        and SQL
                    </p>
                </div>

                <div className='mb-6'>
                    <h2 className='text-xl font-semibold mb-2 text-teal-300'>Mathematics</h2>
                    <p className='leading-relaxed text-base'>
                    Discrete mathematics, Calculus, Probability and Statistics, Linear Algebra, Machine Learning (Regression,
                        Optimization, Regularization, Model Selection, Classification, Neural Networks)
                    </p>
                </div>

                <div className='mb-6'>
                    <h2 className='text-xl font-semibold mb-2 text-teal-300'>Other Technical Skills</h2>
                    <p className='leading-relaxed text-base'>
                    Data analysis, Source Control via Git, MVC Architecture, Agile development, Software Design, Operating
                    Systems Kernels, Data Structures and Algorithms.
                    </p>
                </div>

            </div> 
        </div>
    </section>
  )
}
