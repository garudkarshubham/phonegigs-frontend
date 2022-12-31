import '../styles/globals.css'

export default function RootLayout({
 children,
}) {
 return (
  <html lang="en">
   <head>
    <title>Phonegigs</title>
   </head>
   <body>
    {children}
   </body>
  </html>
 );
}