'use client';
import Script from 'next/script';
import React from 'react';

export function SnowFlakes() {
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
