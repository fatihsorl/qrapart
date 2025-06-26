'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';

interface CallStaffModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export const CallStaffModal: React.FC<CallStaffModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
}) => {
    const t = useTranslations('common');

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t('callStaff')}>
            <div className="space-y-4">
                <p>{t('confirmCallStaff')}</p>

                <div className="flex justify-end space-x-3">
                    <Button variant="outline" onClick={onClose}>
                        {t('no')}
                    </Button>
                    <Button onClick={onConfirm}>
                        {t('yes')}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}; 