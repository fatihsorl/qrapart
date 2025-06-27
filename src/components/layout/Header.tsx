'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FiShoppingCart } from 'react-icons/fi';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useCart } from '@/context/CartContext';

export const Header: React.FC = () => {
    const t = useTranslations('common');
    const { totalItems } = useCart();

    return (
        <header className="sticky top-0 z-30 bg-white shadow-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center">
                    <div className="relative h-10 w-10 mr-2 overflow-hidden rounded-full border-2 border-blue-500">
                        <Image
                            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=100&auto=format&fit=crop"
                            alt="Hotel Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Otel QR</span>
                </Link>

                <div className="flex items-center space-x-3">
                    <LanguageSwitcher />

                    <Link
                        href="/cart"
                        className="relative rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label={t('cart')}
                    >
                        <FiShoppingCart size={24} className="text-blue-600" />
                        {totalItems > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}; 