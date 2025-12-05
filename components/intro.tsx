import Image from 'next/image'
import authorImage from '@/public/images/authors/photo_252.jpeg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m ABDERRAHMANE.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
  I’m a Computer Vision student and full-stack developer with a strong focus on backend engineering.  
  I enjoy building intelligent systems, designing robust APIs, and developing applications that combine AI, computer vision, and scalable backend architectures.

        
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Ferhat '
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
