import "./globals.css";

export const metadata = {
  title: "Body Type Game",
  description: "A self-love game for teen girls to discover their unique body type and styling tips.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}
