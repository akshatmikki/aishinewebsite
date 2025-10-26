// components/ProjectShowcase.jsx
import Image from 'next/image';

interface ProjectItem {
    category: string;
    build: string;
    imageUrl: string; // The data file shows this is expected
    // Add other fields from your data structure if they were used (e.g., 'altText' if you had one)
}

// 2. Define the Props Interface for the component
interface ProjectShowcaseProps {
    projects: ProjectItem[]; // An array of the defined ProjectItem structure
}

// 3. Apply the Props Interface to the functional component
export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => (
    <section className="py-20 bg-gray-950/70 border-t border-b border-purple-900/20">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-6">
            ✨ What Your Child Will Create
        </h2>
        <p className="text-center text-xl text-neutral-400 mb-16 max-w-3xl mx-auto">
            This course is **100% project-based**—they will build and share a portfolio of incredible work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            {projects.map((project, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-xl border border-indigo-900/50 hover:border-indigo-500/50 transition duration-300">
                    <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                        {/* Placeholder for images. Replace with actual asset paths */}
                        <Image 
                            src={project.imageUrl || "/images/placeholder.jpg"} 
                            alt={project.category} 
                            fill 
                            style={{ objectFit: 'cover' }} 
                            className="rounded-lg"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-indigo-400">{project.category}</h3>
                    <p className="text-neutral-400 mt-2 text-sm">{project.build}</p>
                </div>
            ))}
        </div>
    </section>
);