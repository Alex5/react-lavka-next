import "./globals.css"

import { Container } from "@/shared/ui/container/container";
import {ReactNode} from "react";
import {Header} from "@home/components/header/header";
import {yandexSansText, yandexSansDisplay} from "@/app/fonts";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="ru" className={`${yandexSansText.variable} ${yandexSansDisplay.variable}`} suppressHydrationWarning>
            <body>
                <main>
                    <Header/>
                    <Container>
                        {children}
                    </Container>
                </main>
            </body>
        </html>
    )
}