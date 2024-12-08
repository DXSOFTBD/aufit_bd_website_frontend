"use client"

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function DXGroupSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const brands = [
        { name: 'Xiaomi', logo: '/brands/mi_logo.png' },
        { name: 'HUAWEI', logo: '/brands/Huawei_Logo.png' },
        { name: 'AIMA', logo: '/brands/AIMA_Logo.png' },
        { name: 'LUYUAN', logo: '/brands/Luyuan_logo.png' },
        { name: 'EZVIZ', logo: '/brands/Ezviz_logo.png' },
        { name: 'AMAZFIT', logo: '/brands/Amazfit_logo.png' },
        { name: 'BOAT', logo: '/brands/boat_logo.png' },
        { name: 'X', logo: '/brands/X Brand.png' },
        { name: 'KIESLECT', logo: '/brands/Kieslect_logo.png' },
        // Add other brand logos as needed
    ];


    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPosition = 0;
        const scrollSpeed = 0.5; // Reduced speed for smoother animation

        const animate = () => {
            scrollPosition += scrollSpeed;

            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
                scrollContainer.scrollLeft = 0;
            } else {
                scrollContainer.scrollLeft = scrollPosition;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        // Pause animation on hover
        const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
        const handleMouseLeave = () => {
            scrollPosition = scrollContainer.scrollLeft;
            animationFrameId = requestAnimationFrame(animate);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section id="dx-group" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* DX Logo Header */}
                <div className="flex flex-col items-center mb-12">
                    <div className="w-48 h-24 relative mb-6">
                        <Image
                            src="/logo/dx-logo-yw.png"
                            alt="DX Group Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-center">DX Group</h2>
                    <div className="w-20 h-1 bg-blue-600 mt-4 mb-6"></div>
                    <p className="text-center text-gray-600 max-w-2xl">
                        Your Trusted Partner in Technology Distribution
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            DX is a group of new-age companies - diverse on the outside, but connected at the core, that is changing the landscape of distribution, retail and service in Bangladesh. Established in 2011, the group has gathered significant expertise and industry-renowned milestones, that brought DX in the frontrunning name - when it comes to making inroads into Bangladesh for a business or brand to explore the immense potential the country offers. DX has housed 12 business verticals or sister concerns, where it has partnered with 10+ global top brands under its wings. It has touched the lives of estimated 5 million consumers, 500+ channel partners and 2000+ employee members till today.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">Our Product Portfolio:</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Smartphones and Smart Devices</li>
                                <li>Electric Vehicles (EV)</li>
                                <li>Consumer Electronics</li>
                                <li>Smart Home Solutions</li>
                                <li>Gadgets and Accessories</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-800 mb-2">Official Distributor</h4>
                            <p className="text-gray-600">Authorized national distributor of Xiaomi in Bangladesh</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-800 mb-2">Largest Retails Chain</h4>
                            <p className="text-gray-600">100+ Xiaomi brand outlets across 55 districts, making us Bangladeshs largest smartphone retail chain</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-800 mb-2">After Sales Service</h4>
                            <p className="text-gray-600">The #1 After sales service solution provider in Bangladesh</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-800 mb-2">EV Pioneer</h4>
                            <p className="text-gray-600">Leading the electric vehicle revolution in Bangladesh</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-800 mb-2">Tech Innovation</h4>
                            <p className="text-gray-600">Bringing latest technology products to Bangladesh</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-800 mb-2">Nationwide Network</h4>
                            <p className="text-gray-600">Extensive distribution network across Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Brand Showcase */}
                <div className="mt-12 overflow-hidden">
                    <h3 className="text-2xl font-semibold text-center mb-8">Our Partner Brands</h3>
                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide"
                        style={{
                            scrollBehavior: 'auto', // Changed from 'smooth' for better performance
                            WebkitOverflowScrolling: 'touch',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none'
                        }}
                    >
                        {/* Triple the brands for smoother infinite scroll */}
                        {[...brands, ...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="w-32 h-32 relative grayscale hover:grayscale-0 transition-all flex-shrink-0"
                            >
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold mb-4">Visit DX Group</h3>
                    <a
                        href="https://dx.com.bd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        www.dx.com.bd
                    </a>
                </div>
            </div>
        </section>
    );
}