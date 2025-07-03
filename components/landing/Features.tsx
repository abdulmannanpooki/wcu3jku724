import { Code, Zap, ServerCog } from 'lucide-react';
    import FeatureCard from './FeatureCard';

    export default function Features() {
      return (
        <section className="max-w-7xl mx-auto px-6 py-20 bg-green-50 dark:bg-green-900 rounded-lg">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-green-900 dark:text-green-200">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              icon={Zap}
              title="Blazing Fast Performance"
              description="Experience lightning-fast load times and seamless navigation with Next.js optimized builds."
            />
            <FeatureCard
              icon={Code}
              title="Developer Friendly"
              description="Enjoy a modern developer experience with React, TypeScript, and powerful tooling."
            />
            <FeatureCard
              icon={ServerCog}
              title="Scalable Architecture"
              description="Build scalable and maintainable applications with server-side rendering and API routes."
            />
          </div>
        </section>
      );
    }
