'use client';

import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Notification } from '../ui/Notification';
import { useCart } from '@/context/CartContext';
import { CallStaffModal } from '../CallStaffModal';
import { useTranslations } from 'next-intl';

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
            <Header onCallStaff={handleCallStaff} />
            <main className="flex-1 py-6">
                <div className="container mx-auto px-4">
                    {children}
                </div>
            </main>
            <Footer />

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