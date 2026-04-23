import { MapPin, Clock, AlertTriangle } from "lucide-react";

interface Beach {
    name: string;
    status: "Clean" | "Moderate" | "Polluted";
    level: number;
    lastUpdated: string;
}

// Configuration object for styles based on status
const STATUS_MAP = {
    Clean: {
        bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
        progress: "bg-emerald-500",
        label: "Good"
    },
    Moderate: {
        bg: "bg-amber-50 text-amber-700 border-amber-200",
        progress: "bg-amber-500",
        label: "Fair"
    },
    Polluted: {
        bg: "bg-rose-50 text-rose-700 border-rose-200",
        progress: "bg-rose-500",
        label: "Critical"
    }
};

export default function BeachStatusDashboard() {
    const beaches: Beach[] = [
        { name: "Juhu Beach", status: "Moderate", level: 65, lastUpdated: "2 hours ago" },
        { name: "Versova Beach", status: "Polluted", level: 85, lastUpdated: "30 mins ago" },
        { name: "Girgaon Chowpatty", status: "Clean", level: 35, lastUpdated: "1 hour ago" },
        { name: "Marine Drive", status: "Moderate", level: 60, lastUpdated: "45 mins ago" },
        { name: "Colaba Causeway", status: "Clean", level: 40, lastUpdated: "1.5 hours ago" },
    ];

    // Find the beach that needs the most help dynamically
    const priorityBeach = [...beaches].sort((a, b) => b.level - a.level)[0];

    return (
        <section id="beaches" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div className="max-w-2xl">
                    <h2 className="font-domine text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Real-Time Beach Status
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Live monitoring of Mumbai's coastline. Click "Report Status" if you're at the beach to help our community stay informed.
                    </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-100 px-4 py-2 rounded-full w-fit">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                    Live Data
                </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beaches.map((beach) => {
                    const styles = STATUS_MAP[beach.status];
                    
                    return (
                        <div key={beach.name} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                                    <MapPin className="size-5 text-slate-400 group-hover:text-blue-500" />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${styles.bg}`}>
                                    {beach.status}
                                </span>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-xl text-gray-800 mb-1">{beach.name}</h3>
                                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                    <Clock className="size-3" />
                                    <span>Updated {beach.lastUpdated}</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex justify-between items-end">
                                    <span className="text-xs font-semibold text-gray-400 uppercase">Pollution Level</span>
                                    <span className="text-lg font-bold text-gray-800">{beach.level}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ease-out ${styles.progress}`}
                                        style={{ width: `${beach.level}%` }}
                                    />
                                </div>
                            </div>

                            <button className="w-full py-3 px-4 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all font-semibold text-sm shadow-sm">
                                Report Status
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Dynamic Alert Banner */}
            {priorityBeach && priorityBeach.level > 70 && (
                <div className="mt-12 overflow-hidden rounded-2xl border border-rose-200 bg-rose-50/50 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                        <div className="p-4 bg-rose-100 rounded-2xl">
                            <AlertTriangle className="size-8 text-rose-600" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="font-bold text-rose-900 text-xl mb-1">
                                Priority Action Required: {priorityBeach.name}
                            </h3>
                            <p className="text-rose-700/80">
                                This location has reached a critical pollution level of {priorityBeach.level}%. 
                                Join the emergency cleanup drive scheduled for this weekend.
                            </p>
                        </div>
                        <button className="whitespace-nowrap px-8 py-3 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-shadow shadow-lg shadow-rose-200">
                            Volunteer Now
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}