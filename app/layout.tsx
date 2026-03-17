import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // 引入页脚

export const metadata: Metadata = {
  title: "For | PhiLia",
  description: "展示我的学术与项目经历",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="antialiased bg-gray-50 text-gray-900 pt-16">
        <Navbar />
        {children}
        <Footer /> {/* 这里加上页脚，它会出现在所有页面底部 */}
      </body>
    </html>
  );
}