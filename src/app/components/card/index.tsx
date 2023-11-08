"use client"

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import './style.css';


interface Props {
    title: string;
    url: string;
    image: string;
    description: string;
}

const Card = (props: Props) => {

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

        <div
            className={`card ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }) }}
            onMouseMove={handleMouseMove}
            style={{
                transform: `rotateX(${hovered ? mousePos.y * 2 : 0}deg) rotateY(${mousePos.x * 2}deg)`,
                transformOrigin: 'center',
                boxShadow: `0px ${hovered ? '30px' : '0px'} 30px rgba(0, 0, 0, 0.2)`
            }}
        >
            <Link
                href={props.url}
                target='_blank'
            >
                <img src={props.image} className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h3 className='card-title'>{props.title}</h3>
                    <p className='card-text'>{props.description}</p>
                </div>
                <div className='link-icon-card'>
                    <AiOutlineLink size={26} />
                </div>
            </Link>
        </div>

    )
}

export default Card