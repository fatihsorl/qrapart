'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Layout } from '@/components/layout/Layout';
import { SubcategoryMenu } from '@/components/menu/SubcategoryMenu';
import { ProductGrid } from '@/components/menu/ProductGrid';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Category } from '@/types';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

export default function Home() {
    const categoryT = useTranslations('categories');
    const subcategoryT = useTranslations('subcategories');
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = React.useState<string | null>(null);

    // Get the current category
    const currentCategory = selectedCategory
        ? categories.find((category) => category.id === selectedCategory) as Category
        : null;

    // Kategori değiştiğinde alt kategoriyi sıfırlayan fonksiyon
    const handleCategoryChange = (categoryId: string | null) => {
        setSelectedCategory(categoryId);
        setSelectedSubcategory(null);
    };

    // Alt kategori seçildiğinde
    const handleSubcategoryChange = (subcategoryId: string | null) => {
        setSelectedSubcategory(subcategoryId);
    };

    // Geri dönüş fonksiyonu
    const handleBack = () => {
        if (selectedSubcategory) {
            setSelectedSubcategory(null);
        } else if (selectedCategory === "restaurant") {
            setSelectedCategory(null);
        } else if (selectedCategory) {
            setSelectedCategory(null);
        }
    };

    // Filter products based on selected category and subcategory
    const filteredProducts = products.filter((product) => {
        if (selectedCategory && product.category !== selectedCategory) {
            return false;
        }

        if (selectedSubcategory && product.subcategory !== selectedSubcategory) {
            return false;
        }

        return true;
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

    // Restaurant menü alt kategorilerini gösterme fonksiyonu
    const renderRestaurantSubcategories = () => {
        if (!currentCategory || currentCategory.id !== "restaurant") return null;

        return (
            <>
                <div className="mb-6 flex items-center">
                    <button
                        onClick={handleBack}
                        className="mr-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        <FiArrowLeft size={20} className="text-gray-700" />
                    </button>
                    <h1 className="text-3xl font-bold text-center flex-1 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                        KATEGORİLER
                    </h1>
                </div>
                <motion.div
                    className="grid grid-cols-2 gap-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {currentCategory.subcategories.map((subcategory) => (
                        <motion.div
                            key={subcategory.id}
                            className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] transition-all"
                            onClick={() => handleSubcategoryChange(subcategory.id)}
                            variants={item}
                        >
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src={subcategory.image || '/images/placeholder-food.jpg'}
                                    alt={categoryT(subcategory.name)}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform hover:scale-105 duration-500"
                                    priority={true}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <h3 className="text-xl font-bold text-white">{categoryT(subcategory.name)}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </>
        );
    };

    return (
        <Layout>
            {!selectedCategory ? (
                // Ana kategorileri göster
                <>
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                            KATEGORİLER
                        </h1>
                    </div>
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {categories.map((category) => (
                            <motion.div
                                key={category.id}
                                className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] transition-all"
                                onClick={() => handleCategoryChange(category.id)}
                                variants={item}
                            >
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image
                                        src={category.image || '/images/placeholder-food.jpg'}
                                        alt={categoryT(category.name)}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform hover:scale-105 duration-500"
                                        priority={true}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                        <h3 className="text-xl font-bold text-white">{categoryT(category.name)}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </>
            ) : selectedCategory === "restaurant" && !selectedSubcategory ? (
                // Restaurant alt kategorilerini göster
                renderRestaurantSubcategories()
            ) : (
                // Ürünleri göster
                <>
                    <div className="flex items-center mb-6">
                        <button
                            onClick={handleBack}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <FiArrowLeft size={20} className="text-gray-700" />
                        </button>
                        <div className="ml-3 flex-1">
                            <h2 className="text-xl font-bold text-white">
                                {selectedSubcategory
                                    ? subcategoryT(selectedSubcategory)
                                    : categoryT(selectedCategory || '')}
                            </h2>
                        </div>
                    </div>

                    {currentCategory && currentCategory.subcategories.length > 0 && (
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