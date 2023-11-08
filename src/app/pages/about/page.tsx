"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BiSolidUser } from 'react-icons/bi';
import { HiOutlineFolderDownload } from 'react-icons/hi';
import './style.css';

export default function About() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = "Carrubba_Samuel_CV.pdf";
    link.click();
  };

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section id='About'>
        <div className='flex justify-between p-5 sm:p-10 mt-5 sm:mt-0 title'>
          <h1>About me</h1>
          <BiSolidUser size={36} />
        </div>
        <div id='about-info'>
          <div className='flex flex-col sm:flex-row pt-2 sm:pt-20 gap-5 sm:gap-20'>
            <div className='personal-text'>
              <h2>Full Stack Web Developer</h2>
              <p>
                Benvenuti nel mio universo digitale. Sono un giovane di 24 anni con una profonda passione per l'informatica e la programmazione. Fin da giovane ho dedicato il mio tempo a esplorare il vasto mondo digitale, appassionandomi all'arte di creare soluzioni software innovative e intuitive.
              </p>
              <p>
                Le mie competenze spaziano attraverso diversi linguaggi e tecnologie, come <span>Next.js</span>, <span>React</span>, <span>JavaScript</span> e <span>TypeScript</span>. Sono esperto sia nel frontend che nel backend, con una conoscenza approfondita di concetti avanzati come <span>WebSockets</span>, <span>Node.js</span> e <span>Redux Toolkit</span>. Inoltre, ho una solida comprensione di <span>C++</span>, che mi ha permesso di affrontare progetti più complessi e stimolanti.
              </p>
              <p>
                Nel mio set di strumenti troverete framework grafici di alto livello come <span>MaterialUI</span>, <span>Bootstrap</span> e <span>Tailwind</span>, che utilizzo per creare interfacce utente sorprendenti e coinvolgenti. Inoltre, ho una solida base di conoscenze in <span>HTML</span> e <span>CSS</span>, che mi permette di modellare l'aspetto e la sensazione di ogni progetto con cura e precisione.

                Sono costantemente alla ricerca di nuove sfide e opportunità per affinare le mie abilità e creare soluzioni che superino le aspettative. Sono pronto a portare la mia passione e il mio impegno in ogni progetto che affronto. Grazie per aver visitato il mio portfolio e non vedo l'ora di collaborare con voi per realizzare progetti straordinari.

              </p>

              <div className='flex justify-start p-5 h-36'>
                <Image src="/assets/signature.png" alt="signature" height={50} width={200} />
              </div>
            </div>
            <div className='personal-info'>
              <h2>Personal Information</h2>
              <p>Name: <span>Samuel Carrubba</span></p>
              <p>Età: <span>24 anni</span></p>
              <p>Indirizzo: <span>Via di soffiano 50, Firenze</span></p>
              <p>Email: <span>samu1999.sc@gmail.com</span></p>
              <p>Tel: <span>+39 3274247298</span></p>
              <button onClick={handleDownload} className='btn-dw'><HiOutlineFolderDownload /> CV</button>
            </div>
          </div>



          <div className='flex justify-center mb-10 mt-16 sm:mt-0 '>
            <h1>Skills</h1>
          </div>
          <div className='container-skills'>
              <img src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="next" />
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react" />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="javascript" />
              <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="typescript" />
              <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="node" />
              <img src="https://cdn.worldvectorlogo.com/logos/c.svg" alt="c" />
              <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="redux" />
              <img src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" alt="html" />
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png" alt="css" />
              <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="bootstrap" />
              <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="tailwind" />
              <img src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" alt="material" />
              <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="git" />
              <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="github" />

           


          </div>
        </div>
      </section>

    </motion.div>
  );
}
