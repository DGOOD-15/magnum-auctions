import Container from "@/components/Container";
import AuctionCard from "@/components/AuctionCard";

export default function AuctionsPage() {
  return (
    <Container>
      <div className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Auctions
        </h1>

        <p className="mt-2 max-w-2xl text-gray-600">
          Browse upcoming auctions and featured sale information from Magnum
          Real Estate &amp; Auction Group.
        </p>

        <div className="mt-8">
          <AuctionCard
            title="Farm Equipment Auction"
            date="Saturday, April 20, 2026"
            time="10:00 AM"
            location="Cadiz, KY"
            description="Join us for an upcoming farm equipment auction featuring tractors, implements, tools, trailers, and more. Additional sale details and item highlights will be posted as the auction date approaches."
            images={[
              "/images/auction-1.jpg",
              "/images/auction-2.jpg",
              "/images/auction-3.jpg",
              "/images/auction-4.jpg",
              "/images/auction-5.jpg",
              "/images/auction-6.jpg",
              "/images/auction-7.jpg",
              "/images/auction-8.jpg",
              "/images/auction-9.jpg",
              "/images/auction-10.jpg",
              "/images/auction-11.jpg",
              "/images/auction-12.jpg",
              "/images/auction-13.jpg",
              "/images/auction-14.jpg",
              "/images/auction-15.jpg",
              "/images/auction-16.jpg",
              "/images/auction-17.jpg",
              "/images/auction-18.jpg",
            ]}
          />
        </div>
      </div>
    </Container>
  );
}