// components/RecognitionCTA.jsx
'use client';

import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
// import { MovingBorder } from "./ui/moving-border";
import Image from "next/image";
import { courseData } from "@/lib/data";
interface RecognitionCTAProps {
    prizes: string[];
}

export const RecognitionCTA: React.FC<RecognitionCTAProps> = ({ prizes }) => (
    <section className="py-20 bg-black">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-16">
            🏆 Certification and National Recognition
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-7xl mx-auto px-4">
            {/* 3D Card for Certificate */}
            <CardContainer className="inter-var w-full lg:w-1/2">
                <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] border-white/[0.2] w-full h-auto rounded-xl p-6 border">
                    <CardItem translateZ="50" className="text-xl font-bold text-indigo-400 mb-4">
                        A Certificate that Adds Value
                    </CardItem>
                    {/* 👇 FIX APPLIED HERE: Added 'relative h-60' to set a height and make it a positioning context */}
                    <CardItem translateZ="100" className="w-full mt-4 relative h-60"> 
                        {/* Placeholder for Certificate Image */}
                        <Image
                            src="/certificate.png" // <--- 1. Set your image path (local or remote)
                            alt="Certificate of Achievement"
                            fill // <--- 2. Use 'fill' to make the image size itself to the parent 'div'
                            className="object-cover rounded-xl" // <--- 3. Use object-cover to maintain aspect ratio and fill the space
                            sizes="(max-width: 768px) 100vw, 50vw" // <--- 4. (Optional but recommended) Defines image sizes for different viewports
                            priority // (Optional) For images above the fold to load faster
                        />
                    </CardItem>
                    <div className="mt-6 text-neutral-400 space-y-2">
                        <p>✅ Prestigious Recognition: Official certificate from {courseData.organization}.</p>
                        <p>✅ Portfolio Builder: Validates proficiency in modern AI tools for future applications.</p>
                        <p>✅ Skill Validation: Confirms hands-on expertise in using AI for creation and problem-solving.</p>
                    </div>
                </CardBody>
            </CardContainer>

            {/* Awards and Prizes */}
            <div className="w-full lg:w-1/2 p-6 lg:p-0">
                <h3 className="text-3xl font-bold text-white mb-6">The Spotlight Awaits: Top Prizes</h3>
                <p className="text-neutral-400 mb-8 text-lg">
                    The top students and their innovative projects will receive national recognition and:
                </p>
                <div className="space-y-4">
                    {prizes.map((prize, index) => (
                        <div key={index} className="flex items-center p-3 bg-neutral-900 rounded-lg border-l-4 border-amber-400 shadow-md">
                            <span className="text-2xl mr-4">⭐</span>
                            <p className="text-white font-semibold">{prize}</p>
                        </div>
                    ))}
                </div>

                {/* Final CTA Button for this section */}
                {/* <div className="mt-12">
                    <MovingBorder
                        containerClassName="rounded-full"
                        className="bg-black text-white border-slate-800 px-8 py-3 font-semibold"
                    >
                        View Success Stories & Book
                    </MovingBorder>
                </div> */}
            </div>
        </div>
    </section>
);