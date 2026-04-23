import { Users, Clock, MapPin, ChevronRight } from "lucide-react";

interface CleanupDrive {
    id: number;
    beach: string;
    date: string;
    month: string;
    day: string;
    time: string;
    volunteers: number;
    maxVolunteers: number;
    description: string;
}

export default function CleanupDrives() {
    const drives: CleanupDrive[] = [
        {
            id: 1,
            beach: "Versova Beach",
            date: "Apr 26, 2026",
            month: "APR",
            day: "26",
            time: "6:00 AM - 10:00 AM",
            volunteers: 45,
            maxVolunteers: 100,
            description: "Major cleanup drive focusing on waste collection and segregation",
        },
        {
            id: 2,
            beach: "Juhu Beach",
            date: "Apr 27, 2026",
            month: "APR",
            day: "27",
            time: "5:30 AM - 9:30 AM",
            volunteers: 78,
            maxVolunteers: 80,
            description: "Community-led cleanup with focus on coastal awareness",
        },
        {
            id: 3,
            beach: "Girgaon Chowpatty",
            date: "May 3, 2026",
            month: "MAY",
            day: "03",
            time: "6:00 AM - 10:00 AM",
            volunteers: 28,
            maxVolunteers: 60,
            description: "Weekly maintenance cleanup and area beautification",
        },
        {
            id: 4,
            beach: "Marine Drive",
            date: "May 10, 2026",
            month: "MAY",
            day: "10",
            time: "5:00 AM - 9:00 AM",
            volunteers: 18,
            maxVolunteers: 70,
            description: "Special cleanup before the monsoon season",
        },
    ];

    return (
        <section id="events" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div className="text-left">
                    <h2 className="font-domine text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Upcoming Cleanup Drives
                    </h2>
                    <p className="text-gray-500 max-w-xl">
                        Join our community of eco-warriors. Every participant makes a measurable impact on Mumbai's marine health.
                    </p>
                </div>
                <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                    View All Events <ChevronRight className="size-4" />
                </button>
            </div>

            {/* Event Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {drives.map((drive) => {
                    const occupancy = (drive.volunteers / drive.maxVolunteers) * 100;
                    const isAlmostFull = occupancy > 80;

                    return (
                        <div key={drive.id} className="group flex flex-col sm:flex-row bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                            {/* Date Badge Side */}
                            <div className="bg-slate-50 group-hover:bg-blue-50 transition-colors flex flex-col items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-slate-100 min-w-[120px]">
                                <span className="text-blue-600 font-bold text-sm tracking-widest">{drive.month}</span>
                                <span className="text-gray-900 font-bold text-4xl">{drive.day}</span>
                            </div>

                            {/* Content Side */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                                        <MapPin className="size-4 text-blue-500" /> {drive.beach}
                                    </h3>
                                    {isAlmostFull && (
                                        <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter animate-pulse">
                                            Filling Fast
                                        </span>
                                    )}
                                </div>
                                
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                    {drive.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="size-4 text-slate-400" />
                                        <span className="text-xs font-medium">{drive.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="size-4 text-slate-400" />
                                        <span className="text-xs font-medium">{drive.volunteers}/{drive.maxVolunteers} Joined</span>
                                    </div>
                                </div>

                                {/* Progress Bar Area */}
                                <div className="mt-auto pt-4 border-t border-slate-50">
                                    <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 mb-2">
                                        <span>Capacity</span>
                                        <span className={isAlmostFull ? "text-orange-600" : ""}>{Math.round(occupancy)}%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                        <div 
                                            className={`h-full transition-all duration-700 ${isAlmostFull ? 'bg-orange-500' : 'bg-blue-600'}`}
                                            style={{ width: `${occupancy}%` }}
                                        />
                                    </div>
                                    <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-slate-200 hover:shadow-blue-200">
                                        Join This Drive
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile-only view all button */}
            <div className="mt-10 md:hidden">
                <button className="w-full py-4 border border-slate-200 rounded-xl font-semibold text-slate-600">
                    View All 12 Upcoming Drives
                </button>
            </div>
        </section>
    );
}