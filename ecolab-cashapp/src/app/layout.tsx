import Menu from "./components/Menu"
import './globals.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={{backgroundColor:"#f7f7f7"}}>
               <Menu></Menu>
                    {children}
                    

            </body>
        </html>
    )
}