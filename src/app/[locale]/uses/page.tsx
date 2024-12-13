import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'

function ToolsSection ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool ({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses ({ params: { locale } }: {
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const t = useTranslations('uses')
  return (
    <SimpleLayout
      title={t("title")}
      intro={t("intro")}
    >
      <div className="space-y-20">
        <ToolsSection title={t("sections.dev.title")}>
          <Tool title={t("sections.dev.tools.intellij.title")}>
            {t("sections.dev.tools.intellij.description")}
          </Tool>
          <Tool title={t("sections.dev.tools.zsh.title")}>
            {t("sections.dev.tools.zsh.description")}
          </Tool>
          <Tool title={t("sections.dev.tools.k8s.title")}>
            {t("sections.dev.tools.k8s.description")}
          </Tool>
          <Tool title={t("sections.dev.tools.slack.title")}>
            {t("sections.dev.tools.slack.description")}
          </Tool>
          <Tool title={t("sections.dev.tools.figma.title")}>
            {t("sections.dev.tools.figma.description")}
          </Tool>
          <Tool title={t("sections.dev.tools.edge.title")}>
            {t("sections.dev.tools.edge.description")}
          </Tool>
        </ToolsSection>

        <ToolsSection title={t("sections.ai.title")}>
          <Tool title={t("sections.ai.tools.copilot.title")}>
            {t("sections.ai.tools.copilot.description")}
          </Tool>
          <Tool title={t("sections.ai.tools.chatgpt.title")}>
            {t("sections.ai.tools.chatgpt.description")}
          </Tool>
          <Tool title={t("sections.ai.tools.claude.title")}>
            {t("sections.ai.tools.claude.description")}
          </Tool>
          <Tool title={t("sections.ai.tools.gemini.title")}>
            {t("sections.ai.tools.gemini.description")}
          </Tool>
          <Tool title={t("sections.ai.tools.codeium.title")}>
            {t("sections.ai.tools.codeium.description")}
          </Tool>
        </ToolsSection>

        <ToolsSection title={t("sections.workstation.title")}>
          <Tool title={t("sections.workstation.tools.windows.title")}>
            {t("sections.workstation.tools.windows.description")}
          </Tool>
          <Tool title={t("sections.workstation.tools.gpu.title")}>
            {t("sections.workstation.tools.gpu.description")}
          </Tool>
          <Tool title={t("sections.workstation.tools.keyboard.title")}>
            {t("sections.workstation.tools.keyboard.description")}
          </Tool>
          <Tool title={t("sections.workstation.tools.mouse.title")}>
            {t("sections.workstation.tools.mouse.description")}
          </Tool>
          <Tool title={t("sections.workstation.tools.lamp.title")}>
            {t("sections.workstation.tools.lamp.description")}
          </Tool>
        </ToolsSection>

        <ToolsSection title={t("sections.audio.title")}>
          <Tool title={t("sections.audio.tools.speakers.title")}>
            {t("sections.audio.tools.speakers.description")}
          </Tool>
          <Tool title={t("sections.audio.tools.dac.title")}>
            {t("sections.audio.tools.dac.description")}
          </Tool>
          <Tool title={t("sections.audio.tools.mic.title")}>
            {t("sections.audio.tools.mic.description")}
          </Tool>
        </ToolsSection>

        <ToolsSection title={t("sections.coffee.title")}>
          <Tool title={t("sections.coffee.tools.flair.title")}>
            {t("sections.coffee.tools.flair.description")}
          </Tool>
          <Tool title={t("sections.coffee.tools.grinder.title")}>
            {t("sections.coffee.tools.grinder.description")}
          </Tool>
          <Tool title={t("sections.coffee.tools.staresso.title")}>
            {t("sections.coffee.tools.staresso.description")}
          </Tool>
          <Tool title={t("sections.coffee.tools.pourover.title")}>
            {t("sections.coffee.tools.pourover.description")}
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
