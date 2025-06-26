'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Product } from '@/types';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const t = useTranslations('common');
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    return (
        <motion.div
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    priority={false}
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-md text-sm font-bold">
                    {product.price} ₺
                </div>
            </div>
            <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-black">{product.name}</h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                <Button
                    fullWidth
                    onClick={handleAddToCart}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md shadow-blue-500/20"
                >
                    {t('addToCart')}
                </Button>
            </div>
        </motion.div>
    );
}; 