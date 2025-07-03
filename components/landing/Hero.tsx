'use client';

    import { Button } from '@/components/ui/button';
    import { ArrowRight, LucideIcon } from 'lucide-react';

    export default function Hero() {
      return (
        <section className="relative bg-gradient-to-tr from-green-400 to-green-600 text-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                Empower Your Workflow with <span className="text-green-700">Next.js</span>
              </h1>
              <p className="mt-6 text-lg text-green-900 drop-shadow-md">
                Build blazing fast, scalable, and beautiful web applications with ease.
              </p>
              <div className="mt-10 flex justify-center md:justify-start gap-4">
                <Button size="lg" className="shadow-lg bg-green-500 hover:bg-green-600 text-gray-900" onClick={() => window.alert('Get Started clicked')}>
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="shadow-lg border-green-500 text-green-700 hover:bg-green-100" onClick={() => window.alert('Learn More clicked')}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 max-w-lg rounded-lg overflow-hidden shadow-2xl ring-1 ring-green-400/40">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Hero Image"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
          </div>
        </section>
      );
    }
