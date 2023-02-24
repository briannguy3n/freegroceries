import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-500">
        <div>
          {/* Sidebar */}
          {/* ClientProvider */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
