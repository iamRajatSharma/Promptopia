import "@/styles/global.css";
import Nav from "@components/Nav";

export const metadata = {
    title: 'Promptopia',
    description: 'Discover AI Prompts ',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient"></div>
                </div>
                <main>
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}
