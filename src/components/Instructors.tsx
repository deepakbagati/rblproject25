'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Dr.Anil Vasoya',
      designation: 'Associate Professor',
      image:
      '/assets/anilsm.jpg'}
    ,
    {
      id: 2,
      name: 'Chetan Kaul',
      designation: 'AI Engineer',
      image:
      '/assets/cs.jpg'},
    {
      id: 3,
      name: 'Deepak Bagati',
      designation:'Software Developer',
      image:
        '/assets/ds.jpg',
    },
    {
      id: 4,
      name: 'Arvind Gupta',
      designation: 'Software Developer',
      image:
        '/assets/arvs.jpg',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[30rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet the Creators</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Meet talented professionals ready to support your journey.</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors