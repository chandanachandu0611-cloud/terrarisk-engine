import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TerraRisk Engine | Predictive Climate & Micro-Location Yield Engine",
  description:
    "AI-powered agro-meteorological intelligence combining simulated satellite imagery (NDVI, soil moisture) and historical weather trends to predict micro-location crop risk and yield impacts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-500 selection:text-white" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>
        {children}
      </body>
    </html>
  );
}
