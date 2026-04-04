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
            title="Huge Estate Auction"
            date="Saturday, April 25, 2026"
            time="9:30 AM Central"
            location="Valor Hall in Oak Grove KY"
            description="Join us for an upcoming Estate auction featuring Three 1936 (2-cars and 1 truck) BEAUTIFUL AUTOS,  Wurlitzer 1015 One More Time Jukebox,  2020 Kawasaki Vulcan (Rare Baby Blue Color,
             only 950 Miles), LOADS OF RARE PRIMITIVE PIECES,  Many Signs, Over 200 Tobacco Tins (Some As old As Turn Of The Century), Several Things That Go Bang, Many different and very old Railroad Lanterns
              and other Railroad Collectibles,  Several Gas and Oil Related Collectibles,  Several Antique Cast Iron Mechanical Banks and Other Advertising Items, & Much Much More!! 
All items will be cataloged and pictured soon! "
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