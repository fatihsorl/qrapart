'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';

interface CartSummaryProps {
    onPlaceOrder: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ onPlaceOrder }) => {
    const t = useTranslations('common');
    const { totalPrice, cartItems } = useCart();

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">{t('orderSummary')}</h2>

            <div className="space-y-2">
                {cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                        <span>
                            {item.product.name} x {item.quantity}
                        </span>
                        <span className="font-medium">
                            {item.product.price * item.quantity} ₺
                        </span>
                    </div>
                ))}
            </div>

            <div className="my-4 border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                    <span className="font-semibold">{t('total')}</span>
                    <span className="text-lg font-bold">{totalPrice} ₺</span>
                </div>
            </div>

            <Button
                fullWidth
                onClick={onPlaceOrder}
                disabled={cartItems.length === 0}
            >
                {t('placeOrder')}
            </Button>
        </div>
    );
}; 