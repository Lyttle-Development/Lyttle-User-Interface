import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
    Stack,
    Text,
} from '@lyttle-development/ui';
import {DemoPanel} from './layout-box';

export function ResizablePanelsDemo() {
    return (
        <Stack gap="md" align="start">
            <Stack gap="xs" align="start" style={{width: '100%'}}>
                <Text as="p" size="xs" tone="muted">Horizontal split</Text>
                <ResizablePanelGroup
                    orientation="horizontal"
                    style={{
                        height: '10rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)',
                        overflow: 'hidden',
                    }}
                >
                    <ResizablePanel defaultSize={30}>
                        <DemoPanel label="Panel 1"/>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel defaultSize={70}>
                        <DemoPanel label="Panel 2" tone="secondary"/>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </Stack>

            <Stack gap="xs" align="start" style={{width: '100%'}}>
                <Text as="p" size="xs" tone="muted">Three-pane vertical</Text>
                <ResizablePanelGroup
                    orientation="vertical"
                    style={{
                        height: '12rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)',
                        overflow: 'hidden',
                    }}
                >
                    <ResizablePanel defaultSize={40}>
                        <DemoPanel label="Top"/>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel defaultSize={60}>
                        <ResizablePanelGroup orientation="horizontal">
                            <ResizablePanel defaultSize={50}>
                                <DemoPanel label="Bottom L" tone="secondary"/>
                            </ResizablePanel>
                            <ResizableHandle withHandle/>
                            <ResizablePanel defaultSize={50}>
                                <DemoPanel label="Bottom R" tone="accent"/>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </Stack>
        </Stack>
    );
}

