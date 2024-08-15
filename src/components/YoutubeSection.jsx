import Link from 'next/link'
import { FaYoutube } from 'react-icons/fa'
import { GridPattern } from '@/components/GridPattern'


export default function YoutubeSection() {
  return (
    <section
      id="youtube-section"
      aria-labelledby="youtube-section-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            
            <p className="mt-8 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              <span className="block text-red-600">ExpertTranscriptHelper –</span> Visit
              our YouTube channel where we share valuable insights and tips.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              We create videos that offer practical advice and tutorials to help you navigate your academic journey. From study strategies to expert tips, our channel is designed to assist you in achieving your goals efficiently and effectively.
            </p>
            <p className="mt-8">
              <Link
                href="https://www.youtube.com/@Expert_Transcript_Helpers" 
                className="inline-flex items-center text-base font-medium tracking-tight text-slate-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="h-10 w-10 fill-current text-red-600" />
                <span className="ml-4 text-red-600">Visit Our YouTube Channel</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
