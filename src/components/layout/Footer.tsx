'use client';

import React from 'react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto bg-gray-100 py-4">
            <div className="container mx-auto px-4 text-center text-sm text-gray-600">
                <p>© {currentYear} Otel QR Menü</p>
            </div>
        </footer>
    );
}; 