'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/carousel_image/AESTHETICS.png',
            title: 'AESTHETICS',
            description: 'Mirror panel, Round Angel Design',
        },
        {
            image: '/carousel_image/Aufit_High Airflow.png',
            title: 'HIGH AIRFLOW',
            description: 'Long-Distance Air Supply, Sufficient Cold Air',
        },
        {
            image: '/carousel_image/FAST COOLING & HEATING.png',
            title: 'FAST COOLING & HEATING',
            description: 'Wide operating and fast improving frequency. fast cooling & heating.',
        },
        {
            image: '/carousel_image/ECO ENERGY SAVING.png',
            title: 'ECO ENERGY SAVING',
            description: 'Adjusting frequency in cooling mode saves power based on temperature differences.',
        },
        {
            image: '/carousel_image/I-FEEL.png',
            title: 'I-FEEL',
            description: 'The air conditioner adjusts the temperature based on the remote controls position and ambient temperatures.',
        },
        {
            image: '/carousel_image/QUIET.png',
            title: 'QUIET',
            description: 'Low noise in indoor operation, making  you sleep well.Perfect to use while sleeping.',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[200px] md:h-[800px] w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="relative w-full h-full"> {/* Removed fixed aspect ratio */}
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-contain" // object-contain ensures the image is fully visible
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, 100vw" // Added sizes prop for better performance
                        />
                    </div>
                    {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-4 max-w-[80%] text-center"> 
                        <div className="text-white drop-shadow-lg">
                            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-xl">{slide.description}</p>
                        </div>
                    </div> */}
                </div>
            ))}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;