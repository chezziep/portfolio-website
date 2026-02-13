import type { ReactNode } from 'react';
import {
  Box,
  Heading,
  Text,
  Strong,
  ContentBlock,
  TextLink,
  Stack,
  List,
  Divider,
} from 'braid-design-system';

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
      <Stack space="xxlarge">
        {title ? (
          <Heading level="1" weight="weak" align="center">
            {title}
          </Heading>
        ) : null}
        <Box>{children}</Box>
      </Stack>
    </Box>
  );
}
