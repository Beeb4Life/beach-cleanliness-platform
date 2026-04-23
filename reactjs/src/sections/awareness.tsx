import { CheckCircle2, XCircle, Info, ShieldCheck, Waves } from "lucide-react";

export default function AwarenessSection() {
    const dos = [
        "Dispose waste in designated bins",
        "Segregate plastic, paper, and organic waste",
        "Participate in regular cleanup drives",
        "Report polluted areas to authorities",
        "Use reef-safe sunscreen",
        "Take photos and document waste issues",
        "Encourage others to keep beaches clean",
        "Respect marine life habitats",
    ];

    const donts = [
        "Never litter or throw waste on beaches",
        "Don't use single-use plastics near beaches",
        "Avoid leaving picnic waste behind",
        "Don't dump construction or industrial waste",
        "Never feed or disturb marine animals",
        "Avoid using polluting fuels on boats",
        "Don't ignore beach pollution warnings",
        "Never use harmful chemicals near water",
    ];

    return (
        <section id="awareness" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-4">
                    <Waves className="size-6 text-blue-600" />
                </div>
                <h2 className="font-domine text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Beach Conservation Guide
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                    Small individual actions lead to massive collective impact. Help us protect Mumbai's coastline.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Do's Section */}
                <div className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="size-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                            <CheckCircle2 className="size-6 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-slate-900">The Do's</h3>
                            <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Positive Impact</p>
                        </div>
                    </div>
                    
                    <ul className="space-y-4">
                        {dos.map((item, index) => (
                            <li key={index} className="flex items-start gap-4 group/item">
                                <div className="mt-1 bg-emerald-100/50 p-1 rounded-full group-hover/item:bg-emerald-500 transition-colors">
                                    <ShieldCheck className="size-3 text-emerald-600 group-hover/item:text-white" />
                                </div>
                                <span className="text-slate-600 group-hover/item:text-slate-900 transition-colors text-sm md:text-base leading-snug">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Don'ts Section */}
                <div className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="size-12 bg-rose-50 rounded-2xl flex items-center justify-center">
                            <XCircle className="size-6 text-rose-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-slate-900">The Don'ts</h3>
                            <p className="text-xs text-rose-600 font-bold uppercase tracking-wider">Harmful Actions</p>
                        </div>
                    </div>
                    
                    <ul className="space-y-4">
                        {donts.map((item, index) => (
                            <li key={index} className="flex items-start gap-4 group/item">
                                <div className="mt-1 bg-rose-100/50 p-1 rounded-full group-hover/item:bg-rose-500 transition-colors">
                                    <XCircle className="size-3 text-rose-600 group-hover/item:text-white" />
                                </div>
                                <span className="text-slate-600 group-hover/item:text-slate-900 transition-colors text-sm md:text-base leading-snug">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Why This Matters - Card Theme */}
            <div className="mt-15 group bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 transition-all">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                        <Info className="size-8 text-blue-500" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-2xl text-slate-900">Why This Matters</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Our beaches are vital ecosystems that support marine life, provide recreational spaces, and are integral to Mumbai's cultural heritage.
                        </p>
                        <p className="text-slate-500 leading-relaxed">
                            Pollution threatens this delicate balance, affecting fish populations, coral reefs, and the health of our communities. 
                            By following these guidelines, you contribute to preserving these natural resources for future generations. 
                            <span className="block mt-4 font-bold text-blue-600 uppercase tracking-widest text-xs">Every action counts!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}