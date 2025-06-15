import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function () {
  return (
    <div className="min-h-screen bg-white">
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Build Stunning React Websites 🚀
        </h1>
        <p className="text-gray-600 text-lg max-w-xl">
          {" "}
          I help businesses get beautiful, fast, and responsive websites using
          React and Tailwind CSS.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Let's Work Together</button>
      </section>

         {/* ✅ Services Section */}
         <Services />

         {/* ✅ About Section */}
         <About />

         {/* ✅ Contact Section */}
         <Contact />

         {/* ✅ Footer Section */}
         <Footer />
    </div>
  );
}
