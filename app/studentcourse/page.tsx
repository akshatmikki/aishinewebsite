// app/page.jsx
// Remember to make this a client component if using local state/hooks within the children.
// For Next.js App Router, you can keep the parent Server Component and only add 'use client' to children components that need interactivity.
{/*'use client';
import { courseData } from '@/lib/data';
import { HeroSection } from '@/components/Courseherosection';
import { ProjectShowcase } from '@/components/projectshowcase';
import { CurriculumSection } from '@/components/curriculumsection';
import { MentorSection } from '@/components/mentorsection';
import { RecognitionCTA } from '@/components/recognitioncta';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function AIPage() {
  const { courseName, organization, mentor, quickFacts, roles, projects, curriculum, prizes, promoVideoUrl } = courseData;

  return (
    <div className="min-h-screen bg-black text-white antialiased">
        <Navbar />
      {/* 1. Hero and CTA
      <HeroSection 
        courseName={courseName} 
        organization={organization} 
        quickFacts={quickFacts}
        promoVideoUrl={promoVideoUrl}
        roles={roles}
      />
      
      {/* 2. Project Showcase 
      <ProjectShowcase projects={projects} />
      
      {/* 3. Curriculum Details 
      <CurriculumSection curriculum={curriculum} />
      
      {/* 4. Mentor and Toolkit 
      <MentorSection mentor={mentor} />
      
      {/* 5. Recognition and Final CTA 
      <RecognitionCTA prizes={prizes} />
       <div className="sticky bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 z-50 text-center border-t border-purple-900/50">
        <a href="#booking" className="inline-block w-full md:w-auto">
          <button className="w-full px-12 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white text-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-lg shadow-purple-500/50">
            Secure Your Child's Future - Enroll Now
          </button>
        </a>
      </div>

      <Footer />

      {/* Sticky Final CTA 
     
    </div>
  );
}*/}