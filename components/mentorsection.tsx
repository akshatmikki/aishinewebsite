// components/MentorSection.jsx
'use client';

import { TracingBeam } from "./ui/tracing-beam";
import { EvervaultCard } from "./ui/evervault-card";

interface MentorData {
    name: string;
    title: string;
    bio: string;
    experience: string[]; 
    videoUrl: string;
}

interface MentorSectionProps {
    mentor: MentorData;
}

export const MentorSection: React.FC<MentorSectionProps> = ({ mentor }) => {
    const toolkitCategories = ["Writing & Research", "Image Generation", "AI Video & Avatar Tools", "No-Code & Automation"];

    return (
        <section className="relative py-20 bg-gray-950/70 border-t border-b border-purple-900/20">
            <TracingBeam className="px-6">
                <div className="max-w-6xl mx-auto antialiased pt-4 relative">
                    {/* Mentor Profile */}
                    <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-10">
                        🤝 Meet Your Expert Mentor
                    </h2>
                    <div className="w-full max-w-2xl mx-auto border border-white/10 p-8 rounded-xl bg-neutral-900 shadow-2xl shadow-purple-900/30">
                        <h3 className="text-3xl font-bold text-amber-400 mb-2">{mentor.name}</h3>
                        <p className="text-xl text-neutral-300 mb-4">{mentor.title}</p>
                        <p className="text-lg text-neutral-400">{mentor.bio}</p>
                        <div className="mt-6 space-y-2 text-neutral-400">
                            <p className="font-semibold text-indigo-400">Trained Teams At:</p>
                            <ul className="list-disc list-inside ml-4 text-sm">{mentor.experience.map((exp, i) => <li key={i}>{exp}</li>)}</ul>
                        </div>
                    </div>

                    {/* Mentor Video and Toolkit */}
                    <div className="mt-20 flex flex-col items-center">
                        <h3 className="text-3xl font-bold text-white mb-6">Expert Insight</h3>
                        <iframe
                            className="w-full max-w-3xl aspect-video rounded-xl shadow-2xl shadow-indigo-500/30 border border-indigo-900"
                            src={mentor.videoUrl}
                            title="Mentor Insight"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p className="text-center text-sm italic text-neutral-500 mt-4">
                            "AI is not the future; it's the now. We teach them how to lead it." - {mentor.name}
                        </p>
                    </div>

                    {/* Toolkit Section */}
                    <div className="mt-20">
                        <h2 className="text-4xl text-center font-bold text-white mb-10">
                            🛠️ Your AI Toolkit: Learn the Tools of Tomorrow
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {toolkitCategories.map((category, index) => (
                                <div key={index} className="h-[200px] flex items-center justify-center">
                                    <EvervaultCard text={category} className="text-white border-indigo-500/20" />
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-neutral-500 mt-6">
                            Hands-on experience with 20+ world-class AI applications used by top industry professionals.
                        </p>
                    </div>

                </div>
            </TracingBeam>
        </section>
    );
};