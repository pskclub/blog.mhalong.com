import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'

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

export default function Speaking ({ params: { locale } }: {
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const t = useTranslations('speaking')
  return (
    <SimpleLayout
      title={t("title")}
      intro={t("intro")}
    >
      <div className="space-y-20">
        <SpeakingSection title={t("sections.conference")}>
          <Appearance
            href="#"
            title={t("appearances.experience.title")}
            description={t("appearances.experience.description")}
            event={t("appearances.experience.event")}
          />
          <Appearance
            href="#"
            title={t("appearances.microfrontend.title")}
            description={t("appearances.microfrontend.description")}
            event={t("appearances.microfrontend.event")}
          />
          <Appearance
            href="#"
            title={t("appearances.sentry.title")}
            description={t("appearances.sentry.description")}
            event={t("appearances.sentry.event")}
          />
          <Appearance
            href="#"
            title={t("appearances.typescript.title")}
            description={t("appearances.typescript.description")}
            event={t("appearances.typescript.event")}
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
