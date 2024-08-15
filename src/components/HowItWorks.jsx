import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

const steps = [
  {
    title: 'Initial Consultation',
    description:
      'Begin your journey with a comprehensive discussion about your academic goals and existing credits. Our expert advisors will help you create a personalized pathway tailored to your unique needs.',
  },
  {
    title: 'Custom Plan Development',
    description:
      'Receive a strategic, customized plan that aligns your credits with your degree objectives, ensuring you stay on track to achieve your academic ambitions.',
  },
  {
    title: 'Scholarship Application Assistance ',
    description: `If you don’t already have a scholarship at the University of the People, we provide expert guidance on how to secure one, helping you reduce your educational expenses.`,
  },
  {
    title: '  Transfer Fee Waiver',
    description:
      'For University of the People students looking to transfer credits, we provide guidance on how to get the $17 per course fee waived, helping you save money.',
  },
  {
    title: 'Professional Certificate',
    description:
      'Enhance your job applications with professional certificates for the exams taken after earning your academic credits with us. These certificates demonstrate your expertise and commitment.',
  },
  {
    title: 'Ongoing Support',
    description:
      'Benefit from continuous guidance throughout your academic journey at University of the People.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="how-it-works-title">
          How It Works
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get Your Transcripts Expertly Handled in 6 Simple Steps
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:step] sm:grid-cols-2 lg:grid-cols-3 "
        >
          {steps.map((step) => (
            <li key={step.title} className="[counter-increment:step]">
              {/* <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #956af1 0deg, #75bfe9 59.07deg, #8586f4 185.61deg, #8de9fd 284.23deg, #da9efb 329.41deg, #7331FF 360deg)',
                }}
              >
              </div> */}
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(step,decimal-leading-zero)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
