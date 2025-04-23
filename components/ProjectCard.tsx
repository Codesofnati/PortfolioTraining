"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

    return (
        <div 
            onClick={handleFlip}
            className='w-[450px] h-[280px] rounded-md cursor-pointer perspective-1000'
        >
            <motion.div
                className='relative w-full h-full preserve-3d'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                {/* Front Card */}
                <div className={`absolute w-full h-full backface-hidden ${isFlipped ? 'z-0' : 'z-10'}`}
                    style={{ 
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300'/>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl font-bold'>
                        Learn more &gt;
                    </div>
                </div>

                {/* Back Card - Fixed Version */}
                <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${isFlipped ? 'z-10' : 'z-0'}`}>
                    <div 
                        className='w-full h-full bg-cover bg-center'
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    <div className='absolute inset-0 bg-black opacity-50'/>
                    <div className='relative h-full p-4 flex flex-col justify-center text-white'>
                        <h1 className='text-2xl font-semibold mb-4'>{title}</h1>
                        <p className='text-gray-200'>{text}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard