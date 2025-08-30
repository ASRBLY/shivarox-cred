import "./globals.css";

export const metadata = {
  title: "ShivaroX",
  description: "Experience the future with ShivaroX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}