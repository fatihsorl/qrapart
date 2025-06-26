'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Layout } from '@/components/layout/Layout';
import { CategoryMenu } from '@/components/menu/CategoryMenu';
import { SubcategoryMenu } from '@/components/menu/SubcategoryMenu';
import { ProductGrid } from '@/components/menu/ProductGrid';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Category } from '@/types';
import { motion } from 'framer-motion';

const categoryImages = {
    restaurant: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=500&auto=format&fit=crop',
    minibar: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=500&auto=format&fit=crop',
    market: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=500&auto=format&fit=crop'
};

export default function Home() {
    const t = useTranslations('common');
    const categoryT = useTranslations('categories');
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = React.useState<string | null>(null);

    // Get the current category
    const currentCategory = selectedCategory
        ? categories.find((category) => category.id === selectedCategory) as Category
        : null;

    // Kategori değiştiğinde alt kategoriyi sıfırlayan fonksiyon
    const handleCategoryChange = (categoryId: string | null) => {
        setSelectedCategory(categoryId);
        setSelectedSubcategory(null); // Alt kategoriyi her zaman "Tümü" olarak ayarla
    };

    // Filter products based on selected category and subcategory
    const filteredProducts = products.filter((product) => {
        if (selectedCategory && product.category !== selectedCategory) {
            return false;
        }

        if (selectedSubcategory && product.subcategory !== selectedSubcategory) {
            return false;
        }

        return true; // Show all products if no category is selected, or show filtered products
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Layout>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {t('menu')}
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    {!selectedCategory ? 'Lütfen bir kategori seçin' : categoryT(currentCategory!.name)}
                </p>
            </div>

            {!selectedCategory ? (
                <motion.div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl cursor-pointer transform hover:scale-[1.02]"
                            onClick={() => handleCategoryChange(category.id)}
                            variants={item}
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={categoryImages[category.id as keyof typeof categoryImages]}
                                    alt={categoryT(category.name)}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform hover:scale-105 duration-500"
                                    priority={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <h3 className="text-2xl font-bold text-white">{categoryT(category.name)}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <>
                    <CategoryMenu
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={handleCategoryChange}
                    />

                    {currentCategory && (
                        <SubcategoryMenu
                            subcategories={currentCategory.subcategories}
                            selectedSubcategory={selectedSubcategory}
                            onSelectSubcategory={setSelectedSubcategory}
                        />
                    )}

                    <ProductGrid products={filteredProducts} />
                </>
            )}
        </Layout>
    );
} 