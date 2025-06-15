export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What I Do 💼
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Web Design</h3>
            <p className="text-gray-700">
              I design modern, responsive websites that look great on all devices.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Frontend Development</h3>
            <p className="text-gray-700">
              I build fast and accessible frontend apps using React, Tailwind, and modern tech.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">SEO Optimization</h3>
            <p className="text-gray-700">
              I help your site rank higher in Google with technical and content SEO.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
