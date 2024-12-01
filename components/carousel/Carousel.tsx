'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/carousel_image/AUTO CLEANING-1.jpg',
            title: 'AUTO CLEANING',
            description: 'Intellgent remote control, convenient operation',
        },
        {
            image: '/carousel_image/Q-FAST COOLING & HEATING-1.jpg',
            title: 'Q-FAST COOLING & HEATING',
            description: 'Intellgent remote control, convenient operation',
        },
        {
            image: '/carousel_image/aux_banner_1_wifi control.jpg',
            title: 'I-FAVOR',
            description: 'Intellgent remote control, convenient operation',
        },
        {
            image: '/carousel_image/aux_banner_2_i-feel.jpg',
            title: 'Energy Efficient',
            description: 'Save energy with our smart AC technology',
        },
        {
            image: '/carousel_image/aux_banner_3_4d airflow.jpg',
            title: 'Professional Installation',
            description: 'Expert installation and maintenance services',
        },
        {
            image: '/carousel_image/aux_banner_4_quality of outdoor.jpg',
            title: 'Professional Installation',
            description: 'Expert installation and maintenance services',
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
                    className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-contain"
                            priority={index === 0}
                        /></div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-xl">{slide.description}</p>
                        </div>
                    </div>
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