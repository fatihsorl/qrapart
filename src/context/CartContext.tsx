'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '@/types';
import { useTranslations } from 'next-intl';

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, quantity: number, note?: string) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    updateNote: (productId: string, note: string) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    notification: { message: string; type: 'success' | 'error' | 'info' | null } | null;
    showNotification: (message: string, type: 'success' | 'error' | 'info') => void;
    hideNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' | null } | null>(null);
    const t = useTranslations('common');

    // Load cart from localStorage on initial render
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                setCartItems(parsedCart);
            } catch (error) {
                console.error('Error parsing cart from localStorage', error);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Calculate totals
        const items = cartItems.reduce((total, item) => total + item.quantity, 0);
        const price = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);

        setTotalItems(items);
        setTotalPrice(price);
    }, [cartItems]);

    // Notification system
    const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
        setNotification({ message, type });

        // Auto-hide notification after 3 seconds
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    const hideNotification = () => {
        setNotification(null);
    };

    const addToCart = (product: Product, quantity: number, note?: string) => {
        setCartItems(prevItems => {
            // Check if product already exists in cart
            const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);

            if (existingItemIndex !== -1) {
                // Update existing item
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + quantity,
                    note: note || updatedItems[existingItemIndex].note
                };
                showNotification(t('itemUpdated', { name: product.name }), 'success');
                return updatedItems;
            } else {
                // Add new item
                showNotification(t('itemAdded', { name: product.name }), 'success');
                return [...prevItems, { product, quantity, note }];
            }
        });
    };

    const removeFromCart = (productId: string) => {
        const product = cartItems.find(item => item.product.id === productId);
        setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
        if (product) {
            showNotification(t('itemRemoved', { name: product.product.name }), 'info');
        }
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.product.id === productId ? { ...item, quantity } : item
            )
        );

        const product = cartItems.find(item => item.product.id === productId);
        if (product) {
            showNotification(t('itemUpdated', { name: product.product.name }), 'info');
        }
    };

    const updateNote = (productId: string, note: string) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.product.id === productId ? { ...item, note } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        showNotification(t('cartCleared'), 'info');
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            updateNote,
            clearCart,
            totalItems,
            totalPrice,
            notification,
            showNotification,
            hideNotification
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}; 