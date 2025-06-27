'use client';

import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Notification } from '../ui/Notification';
import { useCart } from '@/context/CartContext';
import { CallStaffModal } from '../CallStaffModal';
import { useTranslations } from 'next-intl';
import { FiBell } from 'react-icons/fi';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { notification, hideNotification, showNotification } = useCart();
    const [isCallStaffModalOpen, setIsCallStaffModalOpen] = React.useState(false);
    const t = useTranslations('common');

    const handleCallStaff = () => {
        setIsCallStaffModalOpen(true);
    };

    const handleCallStaffConfirm = () => {
        showNotification(t('staffCalled'), 'success');
        setIsCallStaffModalOpen(false);
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-6">
                <div className="container mx-auto px-4">
                    {children}
                </div>
            </main>
            <Footer />

            {/* Sabit Personel Çağır Butonu */}
            <button
                onClick={handleCallStaff}
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-blue-600 p-3 shadow-lg hover:bg-blue-700 transition-colors"
                aria-label={t('callStaff')}
            >
                <FiBell size={24} className="text-white" />
            </button>

            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type as 'success' | 'error' | 'info'}
                    onClose={hideNotification}
                />
            )}

            <CallStaffModal
                isOpen={isCallStaffModalOpen}
                onClose={() => setIsCallStaffModalOpen(false)}
                onConfirm={handleCallStaffConfirm}
            />
        </div>
    );
}; 