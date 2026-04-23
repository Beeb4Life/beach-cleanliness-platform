import { TrendingUpIcon } from "lucide-react";
import BeachMap from "../components/beach-map";

export default function HeroSection() {
    return (
        <section id="home" className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 text-gray-500 mt-15">
                <TrendingUpIcon className="size-4.5" />
                <span>Trusted by 50+ NGOs and 5,000+ volunteers</span>
            </div>

            <h1 className="text-center text-5xl md:text-6xl font-semibold max-w-2xl m-2">
                Save Our Beaches. Together.
            </h1>

            <p className="text-center text-base text-gray-500 max-w-md mt-2">
                Real-time beach cleanliness tracking and volunteer coordination for Mumbai&apos;s coastal communities.
            </p>

            <div className="max-w-4xl w-full mt-8 px-4">
                <BeachMap />
            </div>

            <p className="text-center text-sm text-gray-500 max-w-2xl mt-6">
                Click on any beach marker to see detailed cleanliness status and report observations
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button className="px-6 py-2.5 bg-linear-to-b from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 transition text-white rounded-lg font-medium">
                    Report Beach Status
                </button>
                <button className="px-6 py-2.5 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition">
                    Join a Cleanup Drive
                </button>
            </div>
        </section>
    );
}
