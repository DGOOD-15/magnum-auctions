import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      {/* Company */}
      <section>
        <Container>
          <div className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
                  Local. Trusted. Professional.
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  Magnum Real Estate &amp; Auction Group
                </h1>

                <p className="mt-4 text-base text-gray-700 md:text-lg">
                  Auctions and real estate services tailored to your needs. View
                  upcoming auctions, learn how the process works, and contact us
                  for consignments.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/auctions"
                    className="rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
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

              {/* Placeholder image block */}
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <div className="aspect-[16/10] w-full rounded-xl bg-gray-200" />
                <p className="mt-3 text-sm text-gray-700">
                  Add a hero photo here later (auction crowd, equipment,
                  property, etc.)
                </p>
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
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Jon Goodwin
          </h2>

          <p className="mt-1 text-sm font-semibold text-red-700">
            Auctioneer &amp; Real Estate Broker
          </p>

          <p className="mt-4 text-gray-700">
            Jon Goodwin brings years of experience in auctioneering and real
            estate sales, helping clients maximize value through clear
            communication, strong marketing, and a proven auction process.
            Whether selling property, equipment, or estates, Jon is committed to
            delivering professional results with integrity and transparency.
          </p>
        </div>

        {/* Photo placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="h-64 w-64 overflow-hidden rounded-2xl border border-black/10 bg-gray-200">
            {/* Replace this div with an <Image /> later */}
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
              Start simple now. Add details and photos as you collect them.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-sm font-semibold text-red-700">Auctions</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Sell with confidence
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Professional marketing, clear terms, and smooth auction day
                  execution.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-sm font-semibold text-red-700">Real Estate</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Property solutions
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Listings and auction-style sales depending on the property and
                  timeline.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-sm font-semibold text-red-700">Appraisals</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Know what it’s worth
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Pricing guidance to help you make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured auctions (placeholder list) */}
      <section className="mt-12">
        <Container>
          <div className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Upcoming auctions
                </h2>
                <p className="mt-2 text-gray-700">
                  We’ll wire this up to real listings later.
                </p>
              </div>

              <Link
                href="/auctions"
                className="text-sm font-semibold text-red-700 hover:opacity-80"
              >
                View all →
              </Link>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Equipment & Tools Auction",
                  date: "TBD",
                  location: "Cadiz, KY",
                },
                {
                  title: "Estate Auction",
                  date: "TBD",
                  location: "Trigg County",
                },
              ].map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-black/10 bg-white p-6"
                >
                  <p className="text-sm font-semibold text-gray-900">
                    {a.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    {a.date} • {a.location}
                  </p>

                  <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
                    <div className="h-2 w-1/3 rounded-full bg-red-700" />
                  </div>

                  <p className="mt-3 text-xs text-gray-500">
                    Placeholder listing (replace with real auctions later)
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="mt-12 pb-8">
        <Container>
          <div className="rounded-3xl bg-red-700 p-8 text-white shadow-sm md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to consign?
            </h2>
            <p className="mt-2 text-white/90">
              Tell us what you have. We’ll recommend the best path: auction,
              listing, or appraisal.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-red-700 hover:opacity-90"
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
