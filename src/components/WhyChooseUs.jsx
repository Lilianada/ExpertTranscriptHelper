import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'
import Globe from '@/images/resources/globe.png'
import Time from '@/images/resources/on-time.png'
import Wallet from '@/images/resources/wallet.png'
import Support from '@/images/resources/support.png'
import Community from '@/images/resources/online-community.png'
import Guidance from '@/images/resources/collaboration.png'

const resources = [
  {
    title: 'Expert Guidance',
    description:
      'Our experienced advisors provide tailored credit transfer plans, ensuring they align perfectly with your academic goals.',
    image: function GuidanceImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={Guidance} alt="" unoptimized className="relative w-32" />
        </div>
      )
    },
  },
  {
    title: 'Wide Network',
    description:
      'Gain access to a vast network of universities that accept ACE accredited credits, maximizing your transfer options and opportunities.',
    image: function CommunityImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="relative w-32"
            src={Community}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Convenient and Flexible',
    description:
      "We simplify the complexities of credit transfers, offering a convenient and flexible process that fits your schedule and needs.",
    image: function TimeImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={Time} alt="" unoptimized className='w-36'/>
        </div>
      )
    },
  },
  {
    title: 'Time and Cost Efficient ',
    description:
      'Save time and money by accelerating your degree completion through our efficient credit transfer services.',
    image: function WalletImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={Wallet} className='w-28' alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: '24/7 Support ',
    description:
      'Receive round-the-clock support, ensuring you have the assistance you need whenever you need it.',
    image: function SupportImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={Support} className="w-28" alt="" unoptimized />
        </div>
      )
    },
  },
]

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="4" id="why-choose-us-title">
          Why Choose Us?
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        Discover why countless students trust us to navigate their credit transfer process efficiently.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden  sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
