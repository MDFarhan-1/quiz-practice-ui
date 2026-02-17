import "./globals.css";

export const metadata = {
  title: "Quiz Practice UI",
  description: "Personal quiz practice app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
