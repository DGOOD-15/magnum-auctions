import Container from "@/components/Container";

export default function AuctionsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Auctions</h1>
      <p className="mt-2 text-gray-600">
        Upcoming and past auctions will appear here.
      </p>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold">Upcoming</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border p-6">
              <p className="font-semibold">TBD Auction Title</p>
              <p className="mt-2 text-sm text-gray-600">Date • Location</p>
            </div>
            <div className="rounded-2xl border p-6">
              <p className="font-semibold">TBD Auction Title</p>
              <p className="mt-2 text-sm text-gray-600">Date • Location</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Past</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border p-6">
              <p className="font-semibold">Past Auction Title</p>
              <p className="mt-2 text-sm text-gray-600">Date • Location</p>
            </div>
            <div className="rounded-2xl border p-6">
              <p className="font-semibold">Past Auction Title</p>
              <p className="mt-2 text-sm text-gray-600">Date • Location</p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
