import Container from "@/components/Container";
import Link from "next/link";

export default function HireUsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Hire Us</h1>
      <p className="mt-2 text-gray-600">
        Tell us what you’re selling and we’ll recommend the best approach.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">Auction Services</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            <li>Estate auctions</li>
            <li>Equipment & tools</li>
            <li>Farm & land</li>
            <li>Real estate auctions</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">Get a quote</h2>
          <p className="mt-3 text-sm text-gray-600">
            Ready to talk? Send us a message and we’ll get back to you quickly.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </Container>
  );
}
