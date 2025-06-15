export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p className="text-sm mb-4">
        © {new Date().getFullYear()} Faizan Gandhi. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/faizaan7860"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/faizan-gandhi-9859b2226/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/Faizanfrontend"
          className="hover:text-blue-400 transition"
        >
         Twitter
        </a>
      </div>
    </footer>
  );
}
