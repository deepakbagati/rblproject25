"use client";
import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import TeamMemberCard from "@/components/TeamCard";

const teamMembers = [
  {
    name: "Arvind Gupta",
    role: "Software Developer",
    imageUrl: "/assets/arvind.jpg",
    Xurl: "",
    instagramUrl: "https://www.instagram.com/arvind_gupta__",
    linkedinUrl: "https://www.linkedin.com/in/arvind-gupta-/",
  },

  {
    name: "Deepak Bagati",
    role: "Software Developer",
    Xurl: "https://twitter.com/BagatiDeepak",
    imageUrl: "/assets/deepak.jpg",
    instagramUrl: "https://www.instagram.com/deepakbagati_27/",
    linkedinUrl: "https://www.linkedin.com/in/deepakbagati/",
  },

  {
    name: "Chetan Kaul",
    role: "AI Engineer",
    imageUrl: "/assets/chetan.jpg",
    Xurl: "https://twitter.com/ChetanKaul2",
    instagramUrl: "https://www.instagram.com/chetan_kaul/",
    linkedinUrl: "https://www.linkedin.com/in/chetan-kaul-35a681143/",
  },
];

const About = () => {
  return (
    <div className="bg-black text-white">
      <section className="max-w-screen-xl mx-auto p-3 ">
        <div className="ml-[70px]">
          <h2 className="text-5xl bg-gradient-to-r from-blue-300 to-pink-700 bg-clip-text text-transparent  mt-40 font-semibold">
            Why Lumina ?
          </h2>
          <p className="mt-4 text-2xl">
            The name Lumina evokes the concept of light, illuminating your path
            forward. We believe everyone deserves access to guidance and
            support, regardless of background or circumstance. Just like light
            helps us see more clearly, Lumina provides the illumination you need
            to navigate life's challenges and unlock your full potential.
          </p>
        </div>
        {/* {/* <div className="flex justify-center mt-32 gap-28">
                    <div className="w-2/5 h-[600px] relative">
                        <Image
                            src="/assets/image.png"
                            alt="Description of your image"
                            layout="fill"
                            objectFit="cover"
                            className="text-white w-32"
                        />
                    </div>
                    <div className="w-3/5 h-[600px] mt-2">
                        <span className="text-gray-300 text-sm">CEO</span>
                        <h3 className="text-6xl font-extrabold">Rajesh Singh</h3>
                        <p style={{ fontFamily: "Satoshi" }} className="mt-16 text-lg  ">
                            &quot;Learning opens doors to a greater world of possibilities that will lead to success. Education is more than reading, writing, and arithmetic; it is one of the most important investments a certain country can make in its people and its future and is critically reducing poverty and inequality. Education is a tool that will allow people to achieve every goal they set for their lives.
                            We at Zagdu Singh Charitable Trust&rsquo;s Thakur Shyamnarayan Degree College believe on the three D&rsquo;s of the Education Policy viz., Dedication, Devotion and Determination. Here we seek to build up the Industry-Institute Interaction, have collaborations with International Universities, and provide the best Infrastructure so as to bring the most intriguing and innovative thinking&rsquo;s, which are hidden within many of the students.
                            The objective of this effort is to take the best teaching learning resources to all the education seekers.
                            Let me sum up in the following words said by Dr. A. P. J. Kalam,&rsquo;Look at the sky, we are not alone. The whole Universe is friendly to us and conspires only to give the best to those who dream and work &rsquo; &quot;</p>
                    </div>

                </div> */}
        <div className="flex justify-center mt-32 gap-28">
          <div className="w-2/5 h-[600px] relative">
            <Image
              src="/assets/anilbg.png"
              alt="Description of your image"
              layout="fill"
              objectFit="cover"
              className="text-white w-32 rounded-3xl"
            />
          </div>
          <div className="w-2/5 h-[600px] mt-2">
            <span className="text-gray-300 text-sm">Associate Professor</span>
            <h3 className="text-6xl font-extrabold">Dr. Anil Vasoya</h3>
            <p className="mt-16 text-lg  ">
              &quot; As an educator for more than 15 years, I've witnessed the
              transformative power of guidance and support. Lumina was born from
              a desire to make these resources more accessible to everyone.
              Witnessing the dedication and creativity of my students, including
              the brilliant minds behind this platform, has been incredibly
              rewarding. Together, we're building a future where AI empowers
              individuals to reach their full potential. &quot;
            </p>
          </div>
        </div>

        <h2 className=" text-center mt-24 text-3xl">Meet the Team</h2>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 mb-6  ">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              Xurl={member.Xurl}
              instagramUrl={member.instagramUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
