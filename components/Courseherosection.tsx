// components/HeroSection.jsx
'use client'; // Required for Aceternity components that use Framer Motion

import { Spotlight } from "./ui/spotlight";
import { MovingBorder } from "./ui/moving-border"; // *** UNCOMMENTED ***
import { cn } from "@/lib/utils"; // *** UNCOMMENTED ***
// import { BackgroundGradient } from "./ui/background-gradient"; // You'll need this component

// 1. Define the Interface for QuickFact
interface QuickFact {
    label: string;
    detail: string;
}

// 2. Define the Interface for a single role item (REINTRODUCED)
interface RoleItem {
    role: string;
    skills: string; // Used for a subtitle/tagline
}

// 3. Define the Props Interface for the component (roles REINTRODUCED)
interface HeroSectionProps {
    courseName: string;
    organization: string;
    quickFacts: QuickFact[]; // Array of QuickFact objects
    promoVideoUrl?: string; // Made optional to use a default if not provided
    roles: RoleItem[]; // Array of RoleItem objects
}

// A default YouTube video embed URL (e.g., a futuristic/AI trailer or explainer)
const DEFAULT_PROMO_VIDEO_URL = "https://www.youtube.com/embed/VGFpV3Qj4as?si=tTuAg1SbS1iD91uo";

// 4. Apply the Props Interface to the functional component
export const HeroSection: React.FC<HeroSectionProps> = ({ courseName, organization, quickFacts, promoVideoUrl, roles }) => {
    
    // Use the provided URL or the default one
    const videoSrc = promoVideoUrl || DEFAULT_PROMO_VIDEO_URL;

    return (
        <section className="relative h-auto pt-25 pb-20 w-full flex flex-col items-center justify-center overflow-hidden bg-black antialiased">
            {/* Spotlight effect for visual appeal */}
            {/* Changed fill color for a warmer, more modern look */}
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
            
            {/* Main content container, centered and max-width enforced */}
            <div className="max-w-7xl mx-auto relative z-20 px-4 w-full"> 
                
                {/* Title */}
                <h1 className="text-4xl md:text-8xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-4 leading-tight">
                    {courseName}
                </h1>
                
                {/* Subtitle */}
                <h2 className="text-xl md:text-3xl text-neutral-300 font-sans text-center relative z-20 mt-2">
                    AI for Young Innovators: The Future-Ready Bootcamp
                </h2>
                
                {/* Description/Tagline */}
                <p className="text-neutral-500 max-w-2xl mx-auto my-6 text-center text-lg md:text-xl">
                    The New Literacy is Here. Give Your Child the AI Edge. (A **{organization}** Initiative)
                </p>

                {/* Video Integration */}
                <div className="flex justify-center my-10 w-full">
                    {/* Increased max-width and added a subtle animated border look (MovingBorder not used here) */}
                    <iframe
                        className="w-full max-w-4xl aspect-video rounded-2xl shadow-2xl shadow-cyan-500/30 border-2 border-cyan-800/70"
                        src={videoSrc}
                        title="Course Promotional Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="text-center text-sm font-semibold text-cyan-400 mt-4">
                    **Watch Your Child Go From User to Creator: The AI Edge.**
                </p>

                {/* Quick Facts Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-6xl mx-auto text-center w-full">
                    {quickFacts.map((fact, index) => (
                        <div 
                            key={index} 
                            className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col items-center justify-center transition duration-300 hover:bg-neutral-800/70 hover:border-cyan-700" 
                        >
                            <p className="text-3xl font-extrabold text-cyan-400">
                                {/* Use slice to handle details with spaces like '10 Hours' -> '10' */}
                                {fact.detail.split(' ')[0]} 
                            </p>
                            <p className="text-sm text-neutral-400 mt-1 uppercase tracking-wider">
                                {fact.label}
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* --- NEW: Roles/Outcomes Section --- */}
                <div className="mt-24 text-center w-full">
                    <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-10">
                        Future Roles Your Child Will Be Ready For
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {roles.map((item, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded-xl border border-teal-800 bg-neutral-900 transition duration-300 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 text-left"
                            >
                                <p className="text-xl md:text-2xl font-semibold text-teal-400 mb-2">{item.role}</p>
                                <p className="text-sm text-neutral-500 leading-relaxed">{item.skills}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* --- END: Roles/Outcomes Section --- */}

                {/* Main CTA - UNCOMMENTED AND STYLED */}
                {/* <div className="mt-20 text-center">
                    <MovingBorder
                        containerClassName="rounded-full"
                        className="bg-black text-white border-slate-800 px-12 py-4 text-xl md:text-2xl font-extrabold tracking-wider transition duration-300 hover:bg-neutral-900"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400">
                            SECURE YOUR CHILD'S FUTURE - ENROLL NOW
                        </span>
                    </MovingBorder>
                    <p className="text-xs text-neutral-600 mt-4">
                        Limited Seats Available for the next batch.
                    </p>
                </div> */}
            </div>
        </section>
    );
};