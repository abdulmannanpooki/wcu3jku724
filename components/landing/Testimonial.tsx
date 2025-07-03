export default function Testimonial() {
      return (
        <section className="bg-green-100 dark:bg-green-900 py-20 rounded-lg">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold mb-8 text-green-900 dark:text-green-200">
              What Our Users Say
            </h2>
            <blockquote className="text-lg italic text-green-800 dark:text-green-300 max-w-3xl mx-auto">
              “Next.js has transformed the way we build web apps. The performance and developer experience are unmatched. Highly recommended!”
              <footer className="mt-4 font-semibold text-green-700 dark:text-green-400">— Jane Doe, CTO at TechCorp</footer>
            </blockquote>
          </div>
        </section>
      );
    }
