// components/CurriculumSection.jsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Assuming you use lucide-react or similar icon library
import Image from 'next/image'; // Assuming you are using Next.js for Image optimization

// 1. Update Interface for CurriculumItemData to include an image
interface CurriculumItemData {
    session: number;
    title: string;
    activities: string;
    project: string;
    image: string; // Add an image URL
}

// 2. Define Interface for CurriculumItem's props (Data + UI props)
interface CurriculumItemProps extends CurriculumItemData {
    isOpen: boolean;
    toggleOpen: () => void;
    imageOnLeft: boolean; // New prop to control image position
}

// Apply the type to the component
const CurriculumItem: React.FC<CurriculumItemProps> = ({ session, title, activities, project, image, isOpen, toggleOpen, imageOnLeft }) => (
    <div className="border-b border-neutral-700 last:border-b-0">
        <button
            className="flex justify-between items-center w-full p-5 text-left transition-colors duration-300 hover:bg-neutral-800"
            onClick={toggleOpen}
        >
            <span className="text-lg md:text-xl font-semibold text-white">
                <span className="text-purple-400 mr-2">Session {session}:</span> {title}
            </span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-purple-400' : 'text-neutral-500'}`} />
        </button>
        {isOpen && (
            <div className={`p-5 bg-neutral-900/50 border-t border-neutral-800 flex flex-col md:flex-row gap-8 items-center ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 flex-shrink-0">
                    <Image
                        src={image}
                        alt={`Session ${session} - ${title}`}
                        width={400} // Adjust as needed
                        height={30} // Adjust as needed
                        className="rounded-lg shadow-lg object-cover"
                    />
                </div>
                <div className="md:w-1/2">
                    <p className="text-neutral-300 mb-3">
                        <span className="font-bold text-indigo-400">Key Activities:</span> {activities}
                    </p>
                    <p className="text-neutral-300">
                        <span className="font-bold text-indigo-400">Takeaway Project:</span> {project}
                    </p>
                </div>
            </div>
        )}
    </div>
);

interface CurriculumSectionProps {
    curriculum: CurriculumItemData[]; // An array of the defined CurriculumItemData structure
}

// Apply the type to the component
export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ curriculum }) => {
    const [openSession, setOpenSession] = useState<number | null>(null);

    const toggleOpen = (session: number) => {
        setOpenSession(openSession === session ? null : session);
    };
    return (
        <section className="py-20 bg-gradient-to-br from-gray-950 to-black overflow-hidden">
            <h2 className="text-4xl md:text-5xl text-center font-extrabold text-white mb-16 relative">
                <span className="relative z-10">📚 The 6-Session Curriculum</span>
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-50 blur-sm z-0 mx-auto w-3/4"></span>
            </h2>

            <div className="max-w-5xl mx-auto px-4 border border-neutral-700/50 rounded-xl shadow-2xl bg-neutral-900/30 backdrop-blur-sm">
                {curriculum.map((item, index) => (
                    <CurriculumItem
                        key={item.session}
                        {...item}
                        isOpen={openSession === item.session}
                        toggleOpen={() => toggleOpen(item.session)}
                        imageOnLeft={index % 2 === 0} // Alternate image position
                    />
                ))}
            </div>
        </section>
    );
};