import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Container from "@/components/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magnum Real Estate & Auction Group",
  description:
    "Professional auction and real estate services serving Western Kentucky.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-50 to-gray-300`}
      >
        {/* TOP BAR */}
        <div className="flex h-14 w-full text-white">
          <Link
            href="/auctions"
            className="flex w-1/2 items-center justify-center bg-[#084d30] text-sm font-semibold transition-colors hover:bg-[#073d27]"
          >
            View Upcoming Auctions
          </Link>

          <Link
            href="/hire-us"
            className="flex w-1/2 items-center justify-center bg-[#0b5d3b] text-sm font-semibold transition-colors hover:bg-[#0e6f47]"
          >
            Hire Us
          </Link>
        </div>

        {/* MAIN HEADER */}
       <header className="sticky top-0 z-50 border-b bg-white">
  <Container>
    <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
      <Link
        href="/"
        className="flex items-center gap-4 transition-opacity hover:opacity-90"
      >
        <Image
          src="/images/logo.JPEG"
          alt="Magnum Real Estate & Auction Group logo"
          width={80}
          height={80}
          priority
          className="h-16 w-auto object-contain md:h-20"
        />
        <div className="leading-tight">
          <p className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
            Magnum Real Estate &amp; Auction Group
          </p>
          <p className="mt-1 text-sm text-gray-600 md:text-base">
            Professional Auction &amp; Real Estate Services
          </p>
        </div>
      </Link>

      <nav className="flex items-center gap-6 text-sm font-medium text-gray-700 md:text-base">
        <Link href="/" className="transition-colors hover:text-[#0b5d3b]">
          Home
        </Link>
        <Link href="/auctions" className="transition-colors hover:text-[#0b5d3b]">
          Auctions
        </Link>
        <Link href="/contact" className="transition-colors hover:text-[#0b5d3b]">
          Contact
        </Link>
      </nav>
    </div>
  </Container>
</header>

        {/* PAGE CONTENT */}
        <main className="min-h-[70vh] py-10">{children}</main>

        {/* FOOTER */}
        <footer className="border-t bg-white">
          <Container>
            <div className="grid gap-8 py-10 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo.JPEG"
                    alt="Magnum Real Estate & Auction Group logo"
                    width={48}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Magnum Real Estate &amp; Auction Group
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Professional auction services and real estate solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Quick Links</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link
                      href="/auctions"
                      className="hover:text-[#0b5d3b]"
                    >
                      Upcoming Auctions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-[#0b5d3b]"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Contact</p>
                <p className="mt-2 text-sm text-gray-600">
                  Phone: (270) 839-7235
                  <br />
                  Email: info@magnumauctiongroup.com
                </p>
              </div>
            </div>

            <div className="border-t py-6 text-sm text-gray-600">
              © 2026 Magnum Real Estate &amp; Auction Group. All rights
              reserved.
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}