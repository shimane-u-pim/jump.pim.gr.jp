import { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
    title: "ページを移動します - Pim Webサービス",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body>
                <div className="main-container">
                    <main className="main-content">
                        {children}
                        <footer className="global-footer">
                            <hr />
                            Copyright (c) 2024 <a href="https://www.pim.gr.jp" target="_blank">島根大学ものづくり部 Pim</a>.
                        </footer>
                    </main>
                </div>
            </body>
        </html>
    )
}
