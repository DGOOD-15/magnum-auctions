import type { Metadata } from "next";
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
          {/* LEFT HALF */}
          <Link
            href="/auctions"
            className="flex w-1/2 items-center justify-center bg-[#084d30] text-sm font-semibold hover:bg-[#073d27] transition-colors"
          >
            View Upcoming Auctions
          </Link>

          {/* RIGHT HALF */}
          <Link
            href="/hire-us"
            className="flex w-1/2 items-center justify-center bg-[#0b5d3b] text-sm font-semibold hover:bg-[#0e6f47] transition-colors"
          >
            Hire Us
          </Link>
        </div>

        {/* MAIN HEADER */}
        <header className="sticky top-0 z-50 border-b bg-white">
          <Container>
            <div className="flex items-center justify-between py-4">
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-gray-900"
              >
                Magnum Real Estate &amp; Auction Group
              </Link>

              <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
                <Link href="/" className="hover:text-[#0b5d3b]">
                  Home
                </Link>
                <Link href="/auctions" className="hover:text-[#0b5d3b]">
                  Auctions
                </Link>
                <Link href="/contact" className="hover:text-[#0b5d3b]">
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
                <p className="font-semibold text-gray-900">
                  Magnum Real Estate &amp; Auction Group
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Professional auction services and real estate solutions.
                </p>
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