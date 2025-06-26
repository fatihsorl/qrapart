'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { CallStaffModal } from '@/components/CallStaffModal';
import { FiBell } from 'react-icons/fi';

export default function CallStaffPage() {
    const t = useTranslations('common');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCallSent, setIsCallSent] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmCall = () => {
        // In a real application, you would send a request to the backend here
        setIsCallSent(true);
        setIsModalOpen(false);
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center py-12">
                <div className="mb-8 text-center">
                    <FiBell size={64} className="mx-auto mb-4 text-blue-600" />
                    <h1 className="mb-2 text-3xl font-bold">{t('callStaff')}</h1>
                </div>

                {isCallSent ? (
                    <div className="text-center">
                        <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-700">
                            <p className="font-medium">{t('orderPlaced')}</p>
                        </div>
                        <Button onClick={() => setIsCallSent(false)} variant="outline">
                            {t('callStaff')}
                        </Button>
                    </div>
                ) : (
                    <Button size="lg" onClick={handleOpenModal}>
                        {t('callStaff')}
                    </Button>
                )}
            </div>

            <CallStaffModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmCall}
            />
        </Layout>
    );
} 