'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
    item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const t = useTranslations('common');
    const { updateQuantity, removeFromCart, updateNote } = useCart();
    const [note, setNote] = useState(item.note || '');

    const handleQuantityChange = (newQuantity: number) => {
        updateQuantity(item.product.id, newQuantity);
    };

    const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    };

    const handleNoteBlur = () => {
        updateNote(item.product.id, note);
    };

    return (
        <div className="flex border-b border-gray-200 py-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between">
                    <h3 className="text-base font-medium">{item.product.name}</h3>
                    <p className="font-medium">{item.product.price * item.quantity} ₺</p>
                </div>

                <p className="mt-1 text-sm text-gray-500">{item.product.price} ₺ / {t('quantity')}</p>

                <div className="mt-2 flex items-center">
                    <label htmlFor={`note-${item.product.id}`} className="mr-2 text-sm text-gray-500">
                        {t('note')}:
                    </label>
                    <input
                        id={`note-${item.product.id}`}
                        type="text"
                        value={note}
                        onChange={handleNoteChange}
                        onBlur={handleNoteBlur}
                        placeholder={t('note')}
                        className="flex-1 rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            onClick={() => handleQuantityChange(item.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                        >
                            <FiMinus size={16} />
                        </button>

                        <span className="mx-3 w-6 text-center">{item.quantity}</span>

                        <button
                            onClick={() => handleQuantityChange(item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                        >
                            <FiPlus size={16} />
                        </button>
                    </div>

                    <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="flex items-center text-red-500 hover:text-red-700"
                    >
                        <FiTrash2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}; 