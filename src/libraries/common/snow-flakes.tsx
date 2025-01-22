'use client';
import Script from 'next/script';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '@/styles/blink.scss'; // Custom CSS for blink-blink effect
import useScreen from '@/hooks/useScreen';

export function SnowFlakes() {
  const { isMobile } = useScreen();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    // Create and append custom snowflakes with blinking effect
    const container = document.createElement('div');
    container.className = 'blink-container';
    document.body.appendChild(container);
    const SIZE = isMobile ? 50 : 100;
    for (let i = 0; i < SIZE; i++) {
      const flake = document.createElement('div');
      flake.className = 'blink-flake';
      flake.style.left = `${Math.random() * 100}vw`;
      flake.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(flake);
    }

    return () => {
      // Clean up on unmount
      document.body.removeChild(container);
    };
  }, [isMobile]);

  return <></>; // No script needed for this effect
}
