import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
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

function Tool({
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

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Development & Work Software">
          <Tool title="IntelliJ IDEA">
            The ultimate IDE for development. The intelligent code completion and powerful
            refactoring tools have dramatically improved my coding efficiency. The integrated
            debugging tools and Git management make it an indispensable part of my workflow.
          </Tool>
          <Tool title="zsh + gitbash">
            This combination gives me the best of both worlds on Windows. zsh's customization
            and plugins make terminal work a joy, while gitbash ensures seamless Git operations.
            The time saved with aliases and command completion is invaluable.
          </Tool>
          <Tool title="K8s Lens">
            Makes Kubernetes management visual and intuitive. The ability to see cluster
            health at a glance and troubleshoot issues directly from the GUI has saved me
            countless hours of command-line work.
          </Tool>
          <Tool title="Slack">
            Essential for team communication and collaboration. The ability to quickly share
            code snippets, integrate with development tools, and organize discussions in
            threads makes it perfect for remote work. The search functionality has saved me
            countless times when looking for past solutions.
          </Tool>
          <Tool title="Figma">
            Essential for design collaboration. Being able to inspect design elements
            and export assets directly makes frontend implementation much smoother.
            The real-time collaboration features are fantastic for team discussions.
          </Tool>
          <Tool title="Microsoft Edge">
            Surprisingly became my go-to browser. The memory management is excellent,
            and the dev tools are powerful. Chrome extension compatibility means I
            don't miss out on any tools I need.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Workstation Hardware">
          <Tool title="Windows 11 Pro + i7-13700KF">
            My powerhouse workstation. This CPU handles everything I throw at it - multiple
            Docker containers, VMs, and heavy IDEs all running simultaneously without
            breaking a sweat. WSL2 support makes development on Windows a dream.
          </Tool>
          <Tool title="NVIDIA RTX 4080">
            This combination ensures I never have to wait for anything. The GPU accelerates
            ML tasks and provides buttery-smooth multi-monitor performance, while the RAM
            gives me plenty of headroom for all my development environments.
          </Tool>
          <Tool title="Keychron Q1">
            The perfect mechanical keyboard for long coding sessions. The build quality
            is exceptional, and the typing experience is unmatched. Full customization
            means it's set up exactly how I like it.
          </Tool>
          <Tool title="Logitech G PRO X 2 Superlight">
            Incredibly precise and comfortable mouse. The wireless performance is flawless,
            and the battery life is remarkable. Perfect balance of gaming performance and
            professional use.
          </Tool>
          <Tool title="Xiaomi Mi LED Desk Lamp">
            Smart desk lamp that provides excellent illumination for long coding sessions.
            The adjustable color temperature and brightness help reduce eye strain. The minimalist
            design keeps my workspace clean, and the app control is surprisingly useful.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Audio Setup">
          <Tool title="Audioengine A2+ with S8 Subwoofer">
            This combination delivers incredible sound quality. The A2+ provides crystal
            clear mids and highs, while the S8 subwoofer adds deep, rich bass without
            being overwhelming. Perfect for both music and gaming.
          </Tool>
          <Tool title="Sound Blaster X4">
            Versatile DAC/Amp that transformed my audio experience. The virtual surround
            sound and customizable EQ settings make both music and gaming more immersive.
            The mic processing features ensure clear communication.
          </Tool>
          <Tool title="HyperX QuadCast">
            Professional-grade USB microphone with excellent sound quality. The tap-to-mute
            feature and visual mute indicator are incredibly convenient for meetings. The
            built-in shock mount ensures clean audio without vibration noise.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Coffee & Beverages">
          <Tool title="Flair 58">
            My dedicated espresso maker for when I want the perfect shot. The level of
            control over pressure and temperature lets me dial in exactly the right
            extraction. The manual process is therapeutic, and the results rival
            commercial machines costing many times more.
          </Tool>
          <Tool title="Fellow Opus">
            My go-to grinder for all brewing methods. The precision burrs and digital
            control ensure consistent grind size every time. Whether it's fine for
            espresso or coarse for cold brew, it delivers exactly what I need for
            the perfect cup.
          </Tool>
          <Tool title="Staresso Mirage SP300">
            An elegant lever machine that brings art to espresso making. The transparent
            design lets me watch the extraction process, while the pressure control helps
            me achieve that perfect crema. It's become an essential part of my coffee ritual.
          </Tool>
          <Tool title="Pour Over Dripper">
            For those mornings when I want a cleaner, brighter cup. The pour-over method
            brings out the subtle flavors in light roasts. The ritual of hand dripping
            is my favorite way to start a focused work day.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
