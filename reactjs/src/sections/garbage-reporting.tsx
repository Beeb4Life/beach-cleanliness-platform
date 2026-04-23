import { MapPinIcon, UploadCloudIcon, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function GarbageReportingForm() {
    const [formData, setFormData] = useState({
        beach: "",
        wasteLevel: "moderate",
        description: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const beaches = ["Juhu Beach", "Versova Beach", "Girgaon Chowpatty", "Marine Drive", "Colaba Causeway"];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API Call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            window.scrollTo({ top: document.getElementById('report')?.offsetTop, behavior: 'smooth' });
            
            setTimeout(() => {
                setFormData({ beach: "", wasteLevel: "moderate", description: "" });
                setSubmitted(false);
            }, 5000);
        }, 1200);
    };

    return (
        <section id="report" className="max-w-3xl mx-auto px-6 py-24 md:py-32">
            <div className="text-center mb-12">
                <h2 className="font-domine text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Report Beach Conditions
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto text-lg">
                    See something? Say something. Your real-time data helps NGOs coordinate cleanups faster.
                </p>
            </div>

            {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-300">
                    <div className="size-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="size-10" />
                    </div>
                    <h3 className="text-emerald-900 font-bold text-2xl mb-3">Report Received!</h3>
                    <p className="text-emerald-700/80 mb-6">
                        Thank you for being an active guardian of Mumbai's coastlines.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="text-emerald-600 font-semibold underline decoration-emerald-200 underline-offset-4 hover:text-emerald-800"
                    >
                        Send another report
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white shadow-2xl shadow-slate-200/50 border border-slate-100 rounded-3xl p-8 md:p-10 space-y-8">
                    {/* Beach Selection */}
                    <div>
                        <label htmlFor="beach" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
                            Location
                        </label>
                        <div className="relative group">
                            <MapPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            <select
                                id="beach"
                                value={formData.beach}
                                onChange={(e) => setFormData({ ...formData, beach: e.target.value })}
                                required
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none"
                            >
                                <option value="" disabled>Select a beach...</option>
                                {beaches.map((beach) => (
                                    <option key={beach} value={beach}>{beach}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Waste Level Grid */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                            Waste Severity
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { id: "low", color: "emerald" },
                                { id: "moderate", color: "amber" },
                                { id: "high", color: "rose" }
                            ].map((level) => (
                                <label key={level.id} className="relative cursor-pointer">
                                    <input
                                        type="radio"
                                        name="wasteLevel"
                                        value={level.id}
                                        checked={formData.wasteLevel === level.id}
                                        onChange={(e) => setFormData({ ...formData, wasteLevel: e.target.value })}
                                        className="peer sr-only"
                                    />
                                    <div className={`
                                        text-center py-4 px-2 rounded-2xl border-2 transition-all duration-200 font-bold capitalize
                                        peer-checked:ring-4 
                                        ${level.id === 'low' ? 'border-slate-100 bg-slate-50 text-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700 peer-checked:ring-emerald-500/10' : ''}
                                        ${level.id === 'moderate' ? 'border-slate-100 bg-slate-50 text-slate-500 peer-checked:border-amber-500 peer-checked:bg-amber-50 peer-checked:text-amber-700 peer-checked:ring-amber-500/10' : ''}
                                        ${level.id === 'high' ? 'border-slate-100 bg-slate-50 text-slate-500 peer-checked:border-rose-500 peer-checked:bg-rose-50 peer-checked:text-rose-700 peer-checked:ring-rose-500/10' : ''}
                                    `}>
                                        {level.id}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
                            Details
                        </label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="What kind of waste did you find? (Plastic, glass, medical, etc.)"
                            rows={4}
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
                        />
                    </div>

                    {/* Photo Upload */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
                            Evidence Photo
                        </label>
                        <label className="group flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 rounded-2xl p-10 cursor-pointer hover:bg-white hover:border-blue-400 transition-all">
                            <input type="file" accept="image/*" className="hidden" />
                            <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                                <UploadCloudIcon className="size-8 text-blue-500" />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-slate-600">Tap to upload a photo</p>
                            <p className="text-xs text-slate-400 mt-1">JPEG, PNG up to 10MB</p>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 hover:bg-blue-600 disabled:bg-slate-300 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-slate-200 hover:shadow-blue-500/20 active:scale-[0.98]"
                    >
                        {isSubmitting ? "Uploading Report..." : "Submit Community Report"}
                    </button>

                    <div className="flex items-center gap-2 justify-center text-xs text-slate-400">
                        <AlertCircle className="size-3" />
                        <span>Reports are visible to all partner NGOs immediately.</span>
                    </div>
                </form>
            )}
        </section>
    );
}