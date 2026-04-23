import { CheckIcon, LockIcon, MailIcon, ArrowLeft, Waves, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex min-h-screen bg-white">
            {/* Left Side: Brand Identity (Hidden on Mobile) */}
            <div className="hidden lg:flex flex-1 relative items-center justify-center bg-slate-900 overflow-hidden">
                {/* Subtle Decorative Ocean Gradient */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute -bottom-24 -left-24 size-96 bg-blue-600 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
                </div>
                
                <div className="relative z-10 px-16 max-w-xl">
                    <Link to="/" className="flex items-center gap-3 mb-10 group w-fit">
                        <div className="p-3 bg-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                            <Waves className="size-10 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-white tracking-tight">Samudra Seva</h1>
                    </Link>

                    <h2 className="text-3xl font-semibold text-white mb-6 leading-tight">
                        Keeping Mumbai's coastlines clean, together.
                    </h2>
                    
                    <div className="space-y-6">
                        {[
                            "Report beach pollution in real-time",
                            "Register for upcoming cleanup drives",
                            "Connect with local environmental NGOs",
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 text-blue-100/80">
                                <ShieldCheck className="size-6 text-blue-500 shrink-0" />
                                <span className="text-lg font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
                <div className="w-full max-w-sm">
                    {/* Brand Icon for Mobile */}
                    <div className="lg:hidden flex justify-center mb-10">
                         <div className="p-3 bg-blue-600 rounded-2xl shadow-xl shadow-blue-200">
                            <Waves className="size-8 text-white" />
                        </div>
                    </div>

                    <div className="text-left mb-10">
                        <h2 className="text-3xl font-bold text-slate-900">Sign In</h2>
                        <p className="text-slate-500 mt-2">Welcome back to the Samudra Seva community.</p>
                    </div>

                    {/* Social Logins */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {['google', 'x', 'facebook'].map((social) => (
                            <button 
                                key={social}
                                type="button" 
                                className="flex items-center justify-center rounded-2xl py-3 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
                                aria-label={`Sign in with ${social}`}
                            >
                                <img
                                    src={`/assets/${social}.svg`}
                                    alt=""
                                    className="size-5"
                                />
                            </button>
                        ))}
                    </div>

                    <div className="relative flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-slate-100"></div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">or email</span>
                        <div className="flex-1 h-px bg-slate-100"></div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide ml-1">Email</label>
                            <div className="flex items-center bg-slate-50 border border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 h-13 rounded-2xl overflow-hidden pl-4 gap-3 transition-all">
                                <MailIcon size={18} className="text-slate-400" />
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="bg-transparent outline-none text-sm w-full h-full text-slate-900 font-medium" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide ml-1">Password</label>
                            <div className="flex items-center bg-slate-50 border border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 h-13 rounded-2xl overflow-hidden pl-4 gap-3 transition-all">
                                <LockIcon size={18} className="text-slate-400" />
                                <input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className="bg-transparent outline-none text-sm w-full h-full text-slate-900 font-medium" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm py-1">
                            <label className="flex gap-2.5 items-center cursor-pointer group">
                                <input type="checkbox" className="hidden peer" defaultChecked />
                                <span className="size-5 border border-slate-300 rounded-lg relative flex items-center justify-center peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
                                    <CheckIcon className="text-white size-3" />
                                </span>
                                <span className="text-slate-500 group-hover:text-slate-800 transition-colors font-medium">Remember me</span>
                            </label>
                            <a className="text-blue-600 font-bold hover:text-blue-800 transition-colors" href="#">Forgot Password?</a>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full h-13 rounded-2xl text-white bg-slate-900 hover:bg-blue-600 shadow-xl shadow-slate-200 transition-all font-bold text-base active:scale-[0.98]"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-slate-500 text-center mt-10 text-sm font-medium">
                        New to Samudra Seva? <Link className="text-blue-600 font-bold hover:underline" to="/signup">Create account</Link>
                    </p>

                    <Link to="/" className="flex items-center justify-center gap-2 mt-8 text-slate-400 hover:text-slate-600 transition-colors text-xs font-bold uppercase tracking-widest">
                        <ArrowLeft size={14} /> Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}