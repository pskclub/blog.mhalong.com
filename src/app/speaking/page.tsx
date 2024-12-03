import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance ({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta?: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {cta && <Card.Cta>{cta}</Card.Cta>}
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I\'ve had the opportunity to speak at various tech events and meetups.',
}

export default function Speaking () {
  return (
    <SimpleLayout
      title="I've had the opportunity to speak at various tech events and meetups."
      intro="I enjoy speaking at technical meetups as it allows me to share experiences and connect with fellow developers. These events have given me a platform to share knowledge while gaining new perspectives from others."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conference & Meetup Talks">
          <Appearance
            href="#"
            title="Experience Stories"
            description="Shared real-world development experiences and career insights with computer science students, focusing on practical lessons and career preparation in the software industry."
            event="CSCamp @KMITL"
          />
          <Appearance
            href="#"
            title="มาลองดูซิ Micro-frontend เป็นไปได้จริงไหม?"
            description="Explored the possibilities and practical implementation of Micro-frontend architecture, discussing its benefits, challenges, and real-world applications in modern web development."
            event="Vue.js Thailand Meetup #4"
          />
          <Appearance
            href="#"
            title="Vue Error Logging to Sentry"
            description="Demonstrated effective error tracking and monitoring in Vue.js applications using Sentry, covering implementation strategies and best practices for production applications."
            event="Vue.js Thailand Meetup #5"
          />
          <Appearance
            href="#"
            title="Vue.js with TypeScript"
            description="Shared insights on integrating TypeScript with Vue.js, highlighting type safety benefits, development workflow improvements, and practical implementation techniques."
            event="TypeScript Thailand Meetup #1"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
