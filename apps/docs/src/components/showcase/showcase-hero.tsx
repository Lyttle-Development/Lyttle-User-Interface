import {Badge} from '@lyttle/ui';
import {
    ShowcaseHero as ShowcaseHeroShell,
    ShowcaseHeroPrimaryAction,
    ShowcaseHeroSecondaryAction,
} from '@lyttle/ui/components/showcase/showcase';

export function ShowcaseHero() {
    return (
        <ShowcaseHeroShell
            badge={<Badge variant="inverse">Design Framework v1.0</Badge>}
            title="Lyttle"
            highlight="User Interface"
            description="A complete design system styled with the Lyttle Development brand palette, improved for WCAG AA accessibility, and ready for any web project."
            primaryAction={<ShowcaseHeroPrimaryAction href="#colors">Explore
                Components</ShowcaseHeroPrimaryAction>}
            secondaryAction={
                <ShowcaseHeroSecondaryAction
                    href="https://github.com/lyttledevelopment">
                    View on GitHub
                </ShowcaseHeroSecondaryAction>
            }
            meta={[
                <span key="components">✦ 56 components</span>,
                <span key="modes">✦ Dark &amp; Light mode</span>,
                <span key="accessibility">✦ WCAG AA</span>,
                <span key="tokens">✦ CSS variables</span>,
                <span key="typescript">✦ TypeScript</span>,
            ]}
        />
    );
}