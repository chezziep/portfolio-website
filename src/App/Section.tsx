import type { ReactNode } from 'react';
import { Box, Heading, Stack, PageBlock } from 'braid-design-system';

interface SectionProps {
  tone: 'brandAccent' | 'surface';
  title?: string;
  children?: ReactNode;
  id?: string;
}
export function Section({ tone, title, children, id }: SectionProps) {
  return (
    <Box
      id={id}
      paddingY="xxxlarge"
      paddingX={{ mobile: 'small', tablet: 'gutter' }}
      background={tone}
      style={id ? { scrollMarginTop: '88px' } : undefined}
    >
      <PageBlock width="large">
        <Stack space="xxlarge">
          {title ? (
            <Heading level="1" weight="weak">
              {title}
            </Heading>
          ) : null}
          <Box>{children}</Box>
        </Stack>
      </PageBlock>
    </Box>
  );
}
