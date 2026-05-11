import "./globals.css";

export const metadata = {
  title: "Lilac Navbar",
  description: "Luxury Navbar UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}