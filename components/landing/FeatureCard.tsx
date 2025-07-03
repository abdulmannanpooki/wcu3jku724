import { LucideIcon } from 'lucide-react';

    interface FeatureCardProps {
      icon: LucideIcon;
      title: string;
      description: string;
    }

    export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
      return (
        <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-xl shadow-lg border border-green-200 dark:bg-green-900 dark:border-green-700">
          <div className="p-4 bg-green-500 rounded-full text-gray-900 mb-4">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-green-900 dark:text-green-200">{title}</h3>
          <p className="text-green-700 dark:text-green-300">{description}</p>
        </div>
      );
    }
