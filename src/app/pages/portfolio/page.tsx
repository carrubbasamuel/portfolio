"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import './style.css';

const Portfolio = () => {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
        const { clientX, clientY } = e;
        const rect = e.target.getBoundingClientRect();

        const offsetX = (clientX - rect.left - rect.width / 2) / 10; 
        let offsetY;

        if (clientY > rect.top + rect.height / 2) {
            offsetY = (rect.top + rect.height / 2 - clientY) / 10;
        } else {
            offsetY = -(clientY - (rect.top + rect.height / 2)) / 10;
        }

        setMousePos({ x: offsetX, y: offsetY });
    }

    return (
        <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section id='Portfolio'>
                <div 
                    className={`container card ${hovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => {setHovered(false); setMousePos({ x: 0, y: 0 })}}
                    onMouseMove={handleMouseMove}
                    style={{ 
                        transform: `rotateX(${hovered ? mousePos.y * 2 : 0}deg) rotateY(${mousePos.x * 2}deg)`,
                        transformOrigin: 'center',
                        boxShadow: `0px ${hovered ? '30px' : '0px'} 30px rgba(0, 0, 0, 0.1)`
                    }}
                >
                    <div className='card-body'>
                        <h3 className='card-title'>Card title</h3>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href='#' className='btn btn-primary'>Go somewhere</a>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Portfolio;
