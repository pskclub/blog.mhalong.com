import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink ({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={'_blank'}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon
          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon (props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Passakon Puttasuwan. คุณไม่ได้ไม่เก่ง คุณแค่ไม่ฝึก',
}

export default function About () {
  return (
    <Container className="mt-16 sm:mt-32">
      <div
        className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1
            className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Passakon. Software Engineer & Full Stack Developer
          </h1>
          <div
            className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              With over 6 years of experience in software development, I've
              evolved from a backend developer to a technical specialist who
              bridges the gap between complex backend systems and intuitive
              frontend experiences. My journey has been driven by a constant
              desire to learn and master new technologies.
            </p>
            <p>
              Currently, I'm working as a Technical Specialist at Finema, where
              I develop enterprise-grade solutions and lead technical
              implementations. My role involves architecting scalable systems,
              developing core libraries, and establishing robust development
              practices.
            </p>
            <h2 className={'font-bold text-xl'}>What I Do</h2>
            <p>I specialize in building full-stack applications with a focus
              on:</p>
            <ul className={'list-disc pl-8'}>
              <li>Developing scalable backend services using Golang and
                microservices architecture
              </li>
              <li>Creating responsive and performant frontend applications with
                Vue.js and Nuxt.js
              </li>
              <li>Implementing DevOps practices with Docker, Kubernetes, and
                CI/CD pipelines
              </li>
              <li>Designing and optimizing database structures and queries</li>
              <li>Leading technical implementations and mentoring team members
              </li>
            </ul>
            <h2 className={'font-bold text-xl'}>Beyond Coding</h2>
            <p>I believe in continuous learning and sharing knowledge with the
              developer community. When I'm not coding, I enjoy exploring new
              technologies, contributing to open-source projects, and staying
              updated with the latest industry trends.</p>
            <blockquote
              className="text-xl italic font-semibold">
              <p>"You're not untalented; you're just untrained." - This
                philosophy drives my approach to both personal growth and team
                development.</p>
            </blockquote>
            <h2 className={'font-bold text-xl'}>Let's Connect</h2>
            <p>I'm always interested in discussing new opportunities, technical
              challenges, or just connecting with fellow developers. Feel free
              to reach out to me through</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/pskclub"
                        icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/pskclub" icon={GitHubIcon}
                        className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/pskclub/"
                        icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:passakon_p@hotmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              passakon_p@hotmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
