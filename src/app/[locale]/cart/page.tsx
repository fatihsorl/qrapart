'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Layout } from '@/components/layout/Layout';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

export default function CartPage() {
    const t = useTranslations('common');
    const { cartItems, clearCart } = useCart();
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        // In a real application, you would send the order to the backend here
        setIsOrderPlaced(true);

        // Clear the cart after order is placed
        clearCart();
    };

    const handleCloseModal = () => {
        setIsOrderPlaced(false);
    };

    const orderTime = new Date().toLocaleString();

    return (
        <Layout>
            <h1 className="mb-6 text-2xl font-bold">{t('cart')}</h1>

            {cartItems.length === 0 ? (
                <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
                    <p className="mb-4 text-lg text-gray-500">{t('emptyCart')}</p>
                    <Button href="/" variant="primary">
                        {t('menu')}
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            {cartItems.map((item) => (
                                <CartItem key={item.product.id} item={item} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <CartSummary onPlaceOrder={handlePlaceOrder} />
                    </div>
                </div>
            )}

            <Modal isOpen={isOrderPlaced} onClose={handleCloseModal} title={t('orderPlaced')}>
                <div className="space-y-4">
                    <p>{t('orderPlaced')}</p>
                    <p>
                        {t('orderTime')}: {orderTime}
                    </p>
                    <div className="flex justify-end">
                        <Button onClick={handleCloseModal}>OK</Button>
                    </div>
                </div>
            </Modal>
        </Layout>
    );
} 