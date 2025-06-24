import localFont from 'next/font/local'

export const yandexSansText = localFont({
    variable: '--font-yandex-text',
    display: 'swap',
    src: [
        { path: './YandexSansText-Thin.woff2', weight: '100', style: 'normal' },
        { path: './YandexSansText-Light.woff2', weight: '300', style: 'normal' },
        { path: './YandexSansText-Regular.woff2', weight: '400', style: 'normal' },
        { path: './YandexSansText-RegularItalic.woff2', weight: '400', style: 'italic' },
        { path: './YandexSansText-Medium.woff2', weight: '500', style: 'normal' },
        { path: './YandexSansText-Bold.woff2', weight: '700', style: 'normal' },
    ],
})

export const yandexSansDisplay = localFont({
    variable: '--font-yandex-display',
    display: 'swap',
    src: [
        { path: './YandexSansDisplay-Thin.woff2', weight: '100', style: 'normal' },
        { path: './YandexSansDisplay-Light.woff2', weight: '300', style: 'normal' },
        { path: './YandexSansDisplay-Regular.woff2', weight: '400', style: 'normal' },
        { path: './YandexSansDisplay-RegularItalic.woff2', weight: '400', style: 'italic' },
        { path: './YandexSansDisplay-Bold.woff2', weight: '700', style: 'normal' },
    ],
})