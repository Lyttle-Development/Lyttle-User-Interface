import {ShowcaseBlock, ShowcaseSection} from './showcase-section';
import {GridLayoutsDemo} from './layout/grid-layouts-demo';
import {ResizablePanelsDemo} from './layout/resizable-panels-demo';
import {SeparatorDemo} from './layout/separator-demo';
import {SidebarDemo} from './layout/sidebar-demo';
import {SpacingScaleDemo} from './layout/spacing-scale-demo';

export function SectionLayout() {
    return (
        <ShowcaseSection
            id="layout"
            title="Layout"
            description="Grid systems, resizable panels, separators, sidebar, and structural patterns."
        >
            <ShowcaseBlock title="Separator"
                           description="Horizontal and vertical dividers">
                <SeparatorDemo/>
            </ShowcaseBlock>

            <ShowcaseBlock title="Grid Layouts"
                           description="Common responsive grid patterns">
                <GridLayoutsDemo/>
            </ShowcaseBlock>

            <ShowcaseBlock title="Resizable Panels"
                           description="Drag to resize split-pane layouts">
                <ResizablePanelsDemo/>
            </ShowcaseBlock>

            <ShowcaseBlock
                title="Sidebar"
                description="A production-style app shell showing the sidebar's best composition patterns: provider state, inset content, trigger, icon collapse, nested menus, and footer actions."
            >
                <SidebarDemo/>
            </ShowcaseBlock>

            <ShowcaseBlock title="Spacing & Radius Scale"
                           description="Design token reference for spacing and border radius">
                <SpacingScaleDemo/>
            </ShowcaseBlock>
        </ShowcaseSection>
    );
}