export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 shadow rounded">
            <p className="italic">"Great results and amazing support!"</p>
            <h4 className="mt-4 font-semibold">– Client A</h4>
          </div>

          <div className="p-6 bg-gray-50 shadow rounded">
            <p className="italic">"Our business growth doubled."</p>
            <h4 className="mt-4 font-semibold">– Client B</h4>
          </div>

          <div className="p-6 bg-gray-50 shadow rounded">
            <p className="italic">"Highly recommended agency."</p>
            <h4 className="mt-4 font-semibold">– Client C</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
