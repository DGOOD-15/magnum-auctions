import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const featuredAuctions = [
  {
    title: "Estate Auction",
    date: "April 25, 2026",
    location: "Valor Hall in Oak Grove, KY",
    image: "/images/auction-1.jpg",
  },
 
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section>
        <Container>
          <div className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                  Local. Trusted. Professional.
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  Magnum Real Estate &amp; Auction Group
                </h1>

                <p className="mt-4 text-base text-gray-700 md:text-lg">
                  Professional auction and real estate services for land,
                  equipment, estates, and property sales. View upcoming
                  auctions, learn about our services, and contact us to discuss
                  your sale.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/auctions"
                    className="rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                  >
                    View Upcoming Auctions
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-gray-50"
                  >
                    Sell With Us
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/topper.PNG"
                    alt="Auction event, equipment, or featured property"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Auctioneer */}
      <section className="mt-12">
        <Container>
          <div className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Jon Goodwin
                </h2>

                <p className="mt-1 text-sm font-semibold text-green-700">
                  Auctioneer &amp; Real Estate Broker
                </p>

                <p className="mt-4 text-gray-700">
                  Jon Goodwin brings years of experience in auctioneering and
                  real estate sales, helping clients maximize value through
                  clear communication, strong marketing, and a proven auction
                  process. Whether selling property, equipment, or estates, Jon
                  is committed to delivering professional results with integrity
                  and transparency.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-black/10 bg-white">
                  <Image
                    src="/images/Jon.png"
                    alt="Jon Goodwin"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="mt-12">
        <Container>
          <div className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              What we help with
            </h2>

            <p className="mt-2 text-gray-700">
              We provide professional support for auctions, real estate sales,
              and valuation guidance.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-sm font-semibold text-green-700">Auctions</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Sell with confidence
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Professional marketing, clear terms, and smooth auction-day
                  execution.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-sm font-semibold text-green-700">
                  Real Estate
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Property solutions
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Listing and auction strategies tailored to the property,
                  timeline, and goals of each client.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-sm font-semibold text-green-700">
                  Appraisals
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Know what it&apos;s worth
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Pricing insight and valuation guidance to help you make
                  informed decisions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Auctions */}
           {/* Featured Auctions */}
      <section className="mt-12">
        <Container>
          <div className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Upcoming auctions
                </h2>
                <p className="mt-2 text-gray-700">
                  Browse upcoming opportunities and check back for the latest
                  auction announcements.
                </p>
              </div>

              <Link
                href="/auctions"
                className="text-sm font-semibold text-[#0b5d3b] hover:opacity-80"
              >
                View all →
              </Link>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {featuredAuctions.map((auction) => (
                <Link
                  key={auction.title}
                  href="/auctions"
                  className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={auction.image}
                      alt={auction.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#0b5d3b]">
                      {auction.title}
                    </p>

                    <p className="mt-2 text-sm text-gray-700">
                      {auction.date} • {auction.location}
                    </p>

                    <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 w-1/3 rounded-full bg-[#0b5d3b]" />
                    </div>

                    <p className="mt-4 text-sm font-medium text-[#0b5d3b]">
                      View auction details →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="mt-12 pb-8">
        <Container>
          <div className="rounded-3xl bg-green-700 p-8 text-white shadow-sm md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to consign?
            </h2>
            <p className="mt-2 text-white/90">
              Tell us what you have. We&apos;ll help you choose the best path:
              auction, listing, or appraisal.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-green-700 hover:opacity-90"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}