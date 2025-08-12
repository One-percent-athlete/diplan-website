import './globals.css'

export const metadata = {
  title: 'Diplan Ski School',
  description: 'Learn to ski like a pro',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/diplan-logo.png" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-p6R5VbSvyHCRHzDk1Fq9n74fJsFzOHVhy1GLg9zrKFlDXnRZHvEaE6DprksmkTyQJijTvQYzjQ38yxE8HJ1qEg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Outfit', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
