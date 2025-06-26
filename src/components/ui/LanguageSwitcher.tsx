'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

const languages = [
    { code: 'tr', name: 'Türkçe' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' },
];

export const LanguageSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentLocale = useLocale();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const closeDropdown = () => setIsOpen(false);

    // Mevcut dilin adını bul
    const currentLanguage = languages.find(lang => lang.code === currentLocale)?.name || 'Türkçe';

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 px-3 py-2 text-sm text-white transition-all hover:shadow-md"
            >
                <FiGlobe className="mr-1" />
                <span className="hidden md:inline">{currentLanguage}</span>
                <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={closeDropdown}
                    />
                    <div className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            {languages.map((language) => (
                                <Link
                                    key={language.code}
                                    href={`/${language.code}`}
                                    className={`block px-4 py-2 text-sm transition-colors ${currentLocale === language.code
                                        ? 'bg-blue-50 font-medium text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    role="menuitem"
                                    onClick={closeDropdown}
                                >
                                    {language.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}; 