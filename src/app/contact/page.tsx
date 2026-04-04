import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container>
      <div className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Contact Us
        </h1>

        <p className="mt-3 max-w-xl text-gray-700">
          Have questions or ready to consign? Get in touch and we’ll help you
          determine the best path forward.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Magnum Real Estate &amp; Auction Group
            </h2>
            <p className="mt-2 text-sm text-gray-600">Cadiz, KY</p>

            <div className="mt-6 space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-[#0b5d3b]">Phone</p>
                <a
                  href="tel:2708397235"
                  className="mt-1 block text-base text-gray-900 hover:text-[#0b5d3b]"
                >
                  (270) 839-7235
                </a>
              </div>

              <div>
                <p className="font-semibold text-[#0b5d3b]">Email</p>
                <a
                  href="mailto:info@magnumauctiongroup.com"
                  className="mt-1 block text-base text-gray-900 hover:text-[#0b5d3b]"
                >
                  goodwinauctions@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-[#0b5d3b]">Office Hours</p>
                <p className="mt-1 text-base text-gray-900">
                  Monday–Friday: 9am–5pm
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Ready to sell?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Contact us by phone or email to discuss auctions, real estate
              services, or appraisals. We’ll help you choose the best path for
              your property, equipment, or estate sale.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}