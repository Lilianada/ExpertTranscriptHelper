import Link from 'next/link'

import { SectionHeading } from '@/components/SectionHeading'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export default function AboutUs() {
  return (
    <section
      id="about-us"
      aria-label="about-us"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <SectionHeading number="1" id="about-us-title">
          About Us
        </SectionHeading>
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Who we are and what we do
        </h2>
        <p className="mt-4">
          At ExpertTranscriptHelper, we assist students in earning credits for
          their degrees at the University of the People or any Accredited
          University accepting ACE credits by helping them take courses on
          platforms like Coursera and Sophia Learning.
        </p>
        <p className="mt-4">
          Our services include taking all required exams on your behalf,
          ensuring you meet your degree requirements efficiently.
        </p>
        <p className="mt-4">To begin, here are the requirements:</p>
        <ul role="list" className="mt-4 space-y-3">
          {[
            'Create Sophia Learning and Coursera accounts.',
            'Ensure all email and information match your Univeristy of the People profile.',
            'Provide a list of courses if you have one; otherwise, one can be provided for you.',
            'Include any specific requirements or deadlines to ensure everything is completed on time.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-indigo-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Earn up to 60 elective credits from Coursera and 30 main and general
          education credits from Sophia Learning, all seamlessly integrated into
          your academic journey.
        </p>
        <p className="mt-6">
          <Link
            href="#contact"
            className="text-base font-medium text-indigo-600 hover:text-indigo-800"
          >
            Send us a message or book a free consultation{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
