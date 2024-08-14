'use client'
import { useState } from 'react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { FaChevronDown } from 'react-icons/fa'

export default function Faq() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const faqs = [
    {
      question: 'How Do I Know My Courses Are Being Completed?',
      answer:
        'You will receive a Credly badge for every course completed, sent directly to your email. This allows you to keep track of your progress easily and ensures you have a record of each completed course.',
    },
    {
      question: 'Can I Access the Account While You Take the Courses?',
      answer:
        'We do not advise accessing the account during the time we are completing your courses. Doing so could risk getting the account banned due to multiple simultaneous logins or conflicting activities.',
    },
    {
      question: 'Can you assure me that my privacy will be respected?',
      answer:
        'Absolutely! To protect your privacy, we take extreme measures at all times. We are devoted to protecting your privacy and will never share any of your personal information. We value your confidence and respect for your privacy deeply.',
    },
    {
      question: 'What Would the Scores Be?',
      answer:
        'The scores for your completed courses will be between 80% to 100%. Our goal is to ensure you achieve the highest possible grades, demonstrating a strong understanding and mastery of the course material.',
    },
  ]

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="scroll-mt-14 py-16"
    >
      <Container>
        <SectionHeading number="6" id="faqs-title">
          Faqs
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </p>
      </Container>
      <Container className="mt-16">
        <div className="">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-6 w-full border-b border-gray-200 pb-4"
            >
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-semibold tracking-tight text-slate-900 md:text-lg">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openAccordion === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openAccordion === index && (
                <p className="mt-4 text-sm text-slate-600 md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
