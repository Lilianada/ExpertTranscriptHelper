import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems, CompressButton
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const listOfSchools = {
  'A':{
    'Alabama State University':1,
    'American College of Education':2,
    'American Military University':3,
    'American National University':4,
    'American Public University':5,
    'Ashworth College':6,
    'Athens State University':7,
 },
  'B':{
    'Bay Path University':8,
    'Bellevue University':9,
    'Bennett College':10,
    'Berkeley College':11,
    'Bottega University':12,
 },
  'C':{
    'Capella University':13,
    'Central Penn College':14,
    'Champlain College Online':15,
    'Charter Oak State College':16,
    'Claremont Lincoln University':17,
    'Colorado State University - Global':18,
    'Columbia Southern University':19,
 },
  'D':{
    'DeVry University':20,
 },
  'E':{
    'Excelsior University':21,
 },
  'F':{
    'Franklin University':22,
 },
  'G':{
    'Grand Canyon University':23,
 },
  'H':{
    'Houston Community College':24,
 },
  'I':{
    'Indiana Tech':25,
    'Indiana Wesleyan University':26,
    'Interdenominational Theological Center':27,
 },
  'J':{
    'Jarvis Christian University':28,
    'Johnson & Wales University':29,
 },
  'L':{
    'Liberty University':30,
 },
  'M':{
    'Martin Luther College':31,
    'McDougle Technical Institute':32,
 },
  'N':{
    'National American University':33,
    'National Paralegal College':32,
    'Nexford University':34,
    'Nichols College':35,
 },
  'P':{
    'Patten University':36,
    'Paul Smiths College':37,
    'Peirce College':38,
    'Penn Foster College':39,
    'Philander Smith University':40,
    'Post University':41,
    'Purdue University Global':42,
 },
  'R':{
    'Regis University':43,
    'Rockford University':44,
 },
  'S':{
    'South Florida College of Nursing':45,
    'Southeastern University':46,
    'Southern California University of Health Sciences':47,
    'Southern Christian College':48,
    'Southern New Hampshire University':49,
    'Southern University Shreveport Louisiana':50,
    'Strayer University':51,
 },
  'T':{
    'The Workshop School':52,
    'Trident University':53,
 },
  'U':{
    'UMass Global':54,
    'University of Arizona Global Campus':55,
    'University of Maryland Global Campus':56,
    'University of Phoenix':57,
    'University of the People':58,
    'Upper Iowa University':59,
 },
  'W':{
    'Walden University':60,
    'Western Governors University':61,
    'Wilberforce University':62,
    'Wilmington University':63,
 },
}

export function AccreditedSchools() {
  return (
    <section
      id="accredited-schools"
      aria-labelledby="accredited-schools-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="accredited-schools-title">
          ACE Accredited Schools
        </SectionHeading>
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        Discover Top School accepting ACE credits for Transfer  credit
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          This list is updated regularly.
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(listOfSchools).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-4 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
          <CompressButton>See Less</CompressButton>
        </Expandable>
      </Container>
    </section>
  )
}
