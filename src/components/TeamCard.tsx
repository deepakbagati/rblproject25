import Image from 'next/image';
import Link from 'next/link';
import {  FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { LuArrowRight } from 'react-icons/lu';
import { BsTwitterX } from "react-icons/bs";


interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  Xurl:string
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl, Xurl, instagramUrl, linkedinUrl }) => {
  return (
    <div className="min-h-[400px] mx-auto mt-6 h-80 w-72 relative rounded-3xl bg-white shadow-3xl ">
      {/* <div className="bg-opacity-10 bg-white z-10 absolute inset-0 rounded-3xl"></div> */}
      <div className="bg-white bg-opacity-40 backdrop-blur-sm bg-transparent z-10 absolute bottom-0 h-[4.2rem] w-full rounded-3xl cursor-pointer"></div>
      <Image
        src={imageUrl}
        alt="Team Photo"
        layout="fill"
        objectFit="cover"
        className="text-white rounded-3xl"
      />

      <div className="absolute bottom-3 z-20 left-5">
        <div>
          <span style={{ fontFamily: "Satoshi" }} className=" text-black  font-bold text-xl">{name}</span>
          <p style={{ fontFamily: "Satoshi" }} className="text-black text-sm ">{role}</p>
        </div>
      </div>
      <div className="absolute bottom-3 right-5 z-20">
        <div className="group flex flex-col gap-2">
          <Link href={Xurl} target="_blank" rel="noopener noreferrer" className="hidden group-hover:block   transition-300  group-hover:opacity-100  rounded-full  font-bold p-3 bg-white cursor-pointer text-black">
            <BsTwitterX />
          </Link>
          <Link href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hidden group-hover:block   transition-300 group-hover:opacity-100   rounded-full font-bold p-3 bg-white cursor-pointer text-black">
            <FaInstagram />
          </Link>
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hidden group-hover:block rounded-full  transition-300 group-hover:opacity-100  font-bold p-3 bg-white cursor-pointer text-black">
            <FaLinkedinIn />
          </Link>
          <div className="flex items-center rounded-full  font-bold p-3 bg-white cursor-pointer   text-black">
            <LuArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;