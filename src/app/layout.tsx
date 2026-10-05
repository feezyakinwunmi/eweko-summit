import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
title: "Eweko Agribusiness Summit 2026",
description:
"Eweko Agribusiness Summit 2026 — Building a More Resilient and Inclusive Food System.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<body>
<Navbar />
{children}
<Footer />
</body>
</html>
);
}