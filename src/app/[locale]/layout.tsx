import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { CartProvider } from '@/context/CartContext';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Can be imported from a shared config
const locales = ['tr', 'en', 'ru', 'ar'];

// Metadata için generateMetadata fonksiyonu kullanıyoruz
export async function generateMetadata() {
    return {
        title: 'Otel QR Menü',
        description: 'Otel QR Menü Uygulaması',
    };
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Burada params.locale kullanmıyoruz, sadece render içinde kullanacağız
    const locale = params.locale;

    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale)) {
        notFound();
    }

    // Burada direkt olarak locale'i kullanıyoruz, client tarafında da aynı değer olacak
    const isRtl = locale === 'ar';

    return (
        <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
                <ClientProvider locale={locale}>
                    {children}
                </ClientProvider>
            </body>
        </html>
    );
}

// Client komponenti ayrı bir async komponente taşıyoruz
async function ClientProvider({ locale, children }: { locale: string, children: React.ReactNode }) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
        notFound();
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <CartProvider>
                {children}
            </CartProvider>
        </NextIntlClientProvider>
    );
} 