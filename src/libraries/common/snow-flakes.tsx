'use client';
import Script from 'next/script';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export function SnowFlakes() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true // Whether animation should happen only once
    });
  }, []);

  return (
    <Script
      src="https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined') {
          // Ensure script is loaded and available
          new (window as any).Snowflakes({
            color: '#f990e2',
            minSize: 8,
            maxSize: 14
          });
        }
      }}
    />
  );
}
