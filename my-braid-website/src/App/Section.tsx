import type { ReactNode } from 'react';
import { Box, Heading, Stack, PageBlock } from 'braid-design-system';

interface SectionProps {
  tone: 'brandAccent' | 'surface';
  title?: string;
  children?: ReactNode;
}
export function Section({ tone, title, children }: SectionProps) {
  return (
    <Box
      paddingY="xxxlarge"
      paddingX={{ mobile: 'small', tablet: 'gutter' }}
      background={tone}
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
