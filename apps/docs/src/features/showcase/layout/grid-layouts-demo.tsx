import {Grid, Stack, Text} from '@lyttle-development/ui';
import {LayoutBox} from './layout-box';

export function GridLayoutsDemo() {
    return (
        <Stack gap="md" align="start">
            <Stack gap="xs" align="start" style={{width: '100%'}}>
                <Text as="p" size="xs" tone="muted">2-column</Text>
                <Grid columns={2} gap="xs" style={{width: '100%'}}>
                    <LayoutBox label="col 1" height="3rem"/>
                    <LayoutBox label="col 2" height="3rem"/>
                </Grid>
            </Stack>
            <Stack gap="xs" align="start" style={{width: '100%'}}>
                <Text as="p" size="xs" tone="muted">3-column</Text>
                <Grid columns={3} gap="xs" style={{width: '100%'}}>
                    <LayoutBox label="col 1" height="3rem"/>
                    <LayoutBox label="col 2" height="3rem"/>
                    <LayoutBox label="col 3" height="3rem"/>
                </Grid>
            </Stack>
            <Stack gap="xs" align="start" style={{width: '100%'}}>
                <Text as="p" size="xs" tone="muted">Sidebar + main layout</Text>
                <Grid columns={4} gap="xs" style={{width: '100%'}}>
                    <LayoutBox label="sidebar" height="6rem" tone="secondary"/>
                    <LayoutBox label="main content" height="6rem" span={3}/>
                </Grid>
            </Stack>
            <Stack gap="xs" align="start" style={{width: '100%'}}>
                <Text as="p" size="xs" tone="muted">Holy grail layout</Text>
                <Stack gap="xs" align="start" style={{width: '100%'}}>
                    <LayoutBox label="header" height="2.5rem" tone="accent"/>
                    <Grid columns={4} gap="xs" style={{width: '100%'}}>
                        <LayoutBox label="nav" height="5rem" tone="secondary"/>
                        <LayoutBox label="main" height="5rem" span={2}/>
                        <LayoutBox label="aside" height="5rem" tone="secondary"/>
                    </Grid>
                    <LayoutBox label="footer" height="2.5rem" tone="accent"/>
                </Stack>
            </Stack>
        </Stack>
    );
}

