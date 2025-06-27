'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Category } from '@/types';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface CategoryMenuProps {
    categories: Category[];
    selectedCategory: string | null;
    onSelectCategory: (categoryId: string | null) => void;
}

export const CategoryMenu: React.FC<CategoryMenuProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
}) => {
    const t = useTranslations('categories');

    return (
        <div className="mb-0 overflow-x-auto">
            <div className="flex space-x-2 pb-2 w-full bg-black p-3 rounded-xl overflow-x-auto hide-scrollbar">
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        className={twMerge(
                            'whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-colors',
                            selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                : 'bg-white/10 text-white/80 backdrop-blur-sm hover:bg-white/20'
                        )}
                        onClick={() => onSelectCategory(category.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t(category.name)}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}; 