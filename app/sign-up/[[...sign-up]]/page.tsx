import { SignUp } from '@clerk/nextjs'
import '@/components/common/blob.css';

export default function Page() {
  return (
      <section className='flex min-h-screen items-center justify-center lg:min-h-[40vh]'>
            <div className="blob" />
            <div className='py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12'>
                <SignUp />
            </div>
      </section>);
}