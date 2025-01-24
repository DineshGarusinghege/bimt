'use client';

import { LoadingProvider, useLoading } from './context/LoadingContext';
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/app/ui/Footer";
import '../app/styles/globals.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define metadata for the application
  const siteTitle = "BIMT Campus"; // Default site title
  const description =
    "BIMT Campus - Excellence in Education and Professional Development.";
  const siteURL = "https://bimt.campus.com";
  const siteImage = "/images/site-preview.png"; // Replace with your site image

  return (
    <html lang="en">
      <head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Education, BIMT, Campus, Professional Development, Courses"
        />
        <meta name="author" content="BIMT Campus" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteURL} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={siteImage} />

        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <LayoutWithLoader>
            {/* Main Content */}
            {children}
          </LayoutWithLoader>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}

// Add LayoutWithLoader Component to Show the Loader
const LayoutWithLoader = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useLoading();

  return (
    <>
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col justify-center items-center">
          <div className="loader animate-spin rounded-full h-20 w-20 border-t-4 border-[#1D267D]"></div>
          <p className="text-[#1D267D] mt-4 text-lg font-semibold">Loading...</p>
        </div>
      )}
      {children}
    </>
  );
};
