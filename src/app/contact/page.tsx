import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-gray-600">
        Send us a message and we’ll get back to you.
      </p>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <form className="rounded-2xl border p-6">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-medium">
              Name
              <input
                className="rounded-xl border px-3 py-2"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Phone
              <input
                className="rounded-xl border px-3 py-2"
                placeholder="(555) 555-5555"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Email
              <input
                className="rounded-xl border px-3 py-2"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea
                className="min-h-[120px] rounded-xl border px-3 py-2"
                placeholder="What are you looking to sell or ask about?"
              />
            </label>

            <button
              type="button"
              className="rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Send Message (placeholder)
            </button>

            <p className="text-xs text-gray-500">
              We’ll wire this to email later. For now it’s layout only.
            </p>
          </div>
        </form>

        <div className="rounded-2xl border bg-gray-50 p-6">
          <h2 className="text-lg font-semibold">Company Info</h2>
          <p className="mt-2 text-sm text-gray-600">
            Magnum Real Estate &amp; Auction Group
            <br />
            Cadiz, KY
          </p>

          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              (270) 839-7235
            </p>
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              info@magnumauctions.com
            </p>
          </div>

          <div className="mt-6 rounded-xl bg-white p-4 text-sm text-gray-600">
            <p className="font-semibold text-gray-900">Office Hours</p>
            <p className="mt-1">Mon–Fri: 9am–5pm</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
