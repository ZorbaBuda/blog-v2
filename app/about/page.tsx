import { Container } from "@/components/layouts/Container";

import Image from "next/legacy/image";

import { allDocuments } from "@/.contentlayer/generated";
import Logo from "@/public/moola-bandha-the-master-key.png";
import WritingList from "@/components/WritingList";

export default function About() {
  return (
    <Container title="About Me - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's my story.
        </span>
      </h1>
      <p>
        I’m Braydon, a developer, creative coder, blogger and self-proclaimed
        designer who specializes in front-end development. My mission is to
        translate user-focussed designs into pixel-perfect websites or
        applications that run blazing fast.
      </p>
      <p>
        I’m currently working as a senior front end developer at LogicGate where
        I help develop an agile GRC cloud solution that combines powerful
        functionality with intuitive design to enhance enterprise GRC programs.
      </p>
      <div>
        <div className="hidden md:block md:float-left">
          <Image
            className="md:mr-8"
            src={Logo}
            placeholder="blur"
            objectFit="cover"
            // blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1670716662/family_photo_scs57f.jpg"
            width={340}
            height={448}
            alt={"article cover"}
          />
        </div>
        <p>
          Prior to LogicGate, I worked as a senior full-stack engineer at
          Cognizant where I helped architect and develop full-stack RESTful
          microservices, train and prepare developers for delivery, and assist
          in leading the front-end practice in a lab-based working environment.
        </p>
        <p>
          Before Cognizant, I worked as a UI Developer for projekt202 helping
          craft design systems and building reusable component libraries for
          multi-million dollar companies.
        </p>
        <p>
          In a past life, I was an indie mobile developer making mobile games
          for iOS and Android, with one of my games outselling Angry Birds.
        </p>
        <p>
          You can find me on Twitter where I share tech-related tidbits and
          build in public, or you can follow me on GitHub. I often write about
          my findings on my blog and create cool things over on . I also help
          run a mediocre podcast.
        </p>
        <div></div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="flex justify-center"></div>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
        <p>Here's a brief rundown of my most recent experiences.</p>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mb-12">
        <h2>I love to share my knowledge through writing.</h2>
        <p>Check out a few of my most recent publishings.</p>
        <WritingList articles={allDocuments} />
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
    </Container>
  );
}
