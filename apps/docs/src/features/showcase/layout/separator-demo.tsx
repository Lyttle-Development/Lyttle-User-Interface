import {Inline, Separator, Stack, Text} from '@lyttle-development/ui';

export function SeparatorDemo() {
    return (
        <Stack gap="md" align="start">
            <Stack gap="xs" align="start" style={{width: '100%'}}>
                <Text as="p" size="xs" tone="muted">Horizontal</Text>
                <Separator/>
            </Stack>
            <Stack gap="xs" align="start">
                <Text as="p" size="xs" tone="muted">Vertical</Text>
                <Inline gap="md" style={{minHeight: '2rem'}}>
                    <Text as="span" size="sm">Blog</Text>
                    <Separator orientation="vertical"/>
                    <Text as="span" size="sm">Docs</Text>
                    <Separator orientation="vertical"/>
                    <Text as="span" size="sm">Source</Text>
                </Inline>
            </Stack>
            <Stack gap="xs" align="start" style={{width: '100%'}}>
                <Text as="p" size="xs" tone="muted">With label</Text>
                <Inline gap="sm" style={{width: '100%'}}>
                    <Separator style={{flex: 1}}/>
                    <Text as="span" size="xs" tone="muted">OR</Text>
                    <Separator style={{flex: 1}}/>
                </Inline>
            </Stack>
        </Stack>
    );
}

