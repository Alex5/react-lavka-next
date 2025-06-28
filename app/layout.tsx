import "./globals.css"

import { Container } from "@/shared/ui/container/container";
import {ReactNode} from "react";
import {Header} from "@home/components/header/header";
import {yandexSansText, yandexSansDisplay} from "@/assets/fonts";
import {Metadata} from "next";
import {Providers} from "@/app/providers";

export const metadata: Metadata = {
    title: 'Купить продукты с доставкой на дом из Реакт ♡ Лавки'
}

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="ru" className={`${yandexSansText.variable} ${yandexSansDisplay.variable}`} suppressHydrationWarning>
        <Providers>
            <body>
            <main>
                <Header/>
                <Container>
                    {children}
                </Container>
            </main>
            </body>
        </Providers>

        </html>
    )
}