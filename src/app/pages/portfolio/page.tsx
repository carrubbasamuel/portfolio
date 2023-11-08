"use client"


import { motion } from 'framer-motion';
import { MdWork } from 'react-icons/md';
import Card from '../../components/card';
import './style.css';

const Portfolio = () => {
    

    return (
        <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section id='Portfolio'>
                <div className='flex justify-between p-10 items-center title'>
                    <h1>Portfolio</h1>
                    <MdWork size={36} />
                </div>
                <p>
                    Ecco alcuni i miei lavori piu recenti se vuoi saperne di piu visita il mio profilo <a href='https://github.com/carrubbasamuel' target='_blanck'>GitHub</a> dove ogni giorno sviluppo i progetti a cui sto lavorando.
                </p>
                

                <div id='work' className='flex flex-col sm:flex-row gap-5 p-0 sm:p-10'>
                    <Card title='Jecko' url='https://github.com/carrubbasamuel/Jecko' image='/assets/jecko.png' description='MERN stack' />
                    <Card title="V-Real" url='https://v1-peppe.vercel.app/' image='/assets/vreal.png' description='Next.js' />
                </div>
            </section>
        </motion.div>
    )
}

export default Portfolio;
