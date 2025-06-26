'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Subcategory } from '@/types';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface SubcategoryMenuProps {
    subcategories: Subcategory[];
    selectedSubcategory: string | null;
    onSelectSubcategory: (subcategoryId: string | null) => void;
}

export const SubcategoryMenu: React.FC<SubcategoryMenuProps> = ({
    subcategories,
    selectedSubcategory,
    onSelectSubcategory,
}) => {
    const t = useTranslations('subcategories');

    return (
        <div className="mb-6">
            <div className="flex flex-wrap gap-2 bg-black/80 p-3 rounded-xl">
                <motion.button
                    className={twMerge(
                        'rounded-md px-4 py-2 text-sm font-medium transition-all',
                        selectedSubcategory === null
                            ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                    )}
                    onClick={() => onSelectSubcategory(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Tümü
                </motion.button>

                {subcategories.map((subcategory) => (
                    <motion.button
                        key={subcategory.id}
                        className={twMerge(
                            'rounded-md px-4 py-2 text-sm font-medium transition-all',
                            selectedSubcategory === subcategory.id
                                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md'
                                : 'bg-white/10 text-white/80 hover:bg-white/20'
                        )}
                        onClick={() => onSelectSubcategory(subcategory.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t(subcategory.name)}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}; 