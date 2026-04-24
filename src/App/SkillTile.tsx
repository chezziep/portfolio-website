import type { ReactNode } from 'react';
import { Box, Heading, Stack } from 'braid-design-system';

interface SkillTileProps {
  title: string;
  icon: ReactNode;
}

export function SkillTile({ title, icon }: SkillTileProps) {
  return (
    <Stack space="medium">
      <Box
        style={{
          height: 40,
          width: 40,
        }}
      >
        {icon}
      </Box>
      <Heading level="4" weight="weak">
        {title}
      </Heading>
    </Stack>
  );
}
