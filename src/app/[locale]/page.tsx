import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

import finemaImage from '@/images/work/finema.png'
import dsImage from '@/images/work/3ds.png'
import getlinksImage from '@/images/work/getlinks.png'
import satangImage from '@/images/work/satang.png'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { ArticleList } from '@/components/ArticleList'
import { Button } from '@/components/Button'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

function BriefcaseIcon (props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon (props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink ({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props} target={'_blank'}>
      <Icon
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role ({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div
        className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7 rounded-full"
               unoptimized/>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd
          className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>
          {' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume () {
  let resume: Array<Role> = [
    {
      company: 'Finema',
      title: 'Technical Specialist',
      start: '2024-10',
      logo: finemaImage,
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Finema',
      title: 'Senior Software Engineer',
      start: '2020-07',
      logo: finemaImage,
      end: '2024-10',
    },
    {
      company: '3DS Interactive',
      title: 'Full Stack Developer',
      logo: dsImage,
      start: '2018-08',
      end: '2020-06',
    },
    {
      company: 'GetLinks',
      title: 'Web Developer',
      logo: getlinksImage,
      start: '2017-12',
      end: '2018-07',
    },
    {
      company: 'Satang Corporation',
      title: 'Software Engineer',
      logo: satangImage,
      start: '2017-05',
      end: '2017-12',
    },
  ]
  const t = useTranslations('home')
  return (
    <div
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2
        className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none"/>
        <span className="ml-3"> {t('work')}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role}/>
        ))}
      </ol>
      <Button download={'Passakon_Puttasuwan_CV.pdf'} target={'_blank'}
              href="/cv.pdf" variant="secondary" className="group mt-6 w-full">
        {t('download')} CV
        <ArrowDownIcon
          className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
      </Button>
    </div>
  )
}

function Photos () {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div
        className="-my-4 flex justify-center gap-3 overflow-hidden py-4 sm:gap-3">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[16/9] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home ({ params: { locale } }: {
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const t = useTranslations('home')
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1
            className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Engineer & Full Stack Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {t('description')}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://www.facebook.com/mhalongcom"
                        icon={FacebookIcon}>
              Follow on Facebook
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/pskclub"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/pskclub"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/pskclub/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos/>
      <Container className="mt-24 md:mt-28">
        <div
          className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <ArticleList max={3}/>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume/>
          </div>
        </div>
      </Container>
    </>
  )
}
