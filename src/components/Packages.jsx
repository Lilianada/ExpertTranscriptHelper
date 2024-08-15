import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

const tiers = [
  {
    name: 'Topaz Plan',
    id: 'tier-coursera',
    href: '#',
    description: 'The Coursera Transfer Credit Package.',
    features: [
      '60 Electives Credits',
      '7-day standard processing time',
      'Includes professional certificates',
      'Includes monthly coursera subscription fee',
      'Waiver of transfer fee for University of the People',
    ],
    mostPopular: false,
  },
  {
    name: 'Ruby Plan',
    id: 'tier-sophia',
    href: '#',
    description: 'The Sophia Learning Transfer Credit Package.',
    features: [
        '30 credits from coursera plus unlimited credits through sophia-saylor.com',
        'Starting at 7 days',
        'Includes monthly sophia learning subscription fee',
        'Waiver of transfer fee for University of the People',
    ],
    mostPopular: false,
  },
  {
    name: 'Diamond Plan',
    id: 'tier-comprehensive',
    href: '#',
    description: 'The Comprehensive Transfer Credit Package (Coursera & Sophia Learning).',
    features: [
        '90 credits, including Electives, Main, and General Credits',
        'Standard 14 days, may vary depending on credit requirements',
        'Includes professional certification',
        'Waiver of transfer fee for University of the People',
    ],
    mostPopular: false,
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function Packages() {
  return (
    <section
      id="packages"
      aria-labelledby="packages-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        <SectionHeading number="5" id="packages-title">
          Packages
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Pick your package
        </p>
        <h2 className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Choose the plan that best suits your needs and budget. We offer a range of packages to help you accelerate your degree pathway.
        </h2>
      </Container>
      <div className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-y-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:px-8">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10',
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8',
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                {/* <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p> */}
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`/api/redirect?planName=${encodeURIComponent(tier.name)}`}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Pick plan
              </a>
            </div>
          ))}
        </div>
    </section>
  )
}
