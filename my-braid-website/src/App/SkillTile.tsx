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
    Card,
    Bleed,
    Actions,
    Button,
    ButtonLink,
    IconRocket,
  } from 'braid-design-system';
  
  interface SkillTileProps {
    title: string;
    icon: ReactNode;
  }

  export function SkillTile({ title, icon }: SkillTileProps) {
    return (
        <Stack space="medium" align="center">
            <Box
              style={{
                height: 40,
                width: 40,
              }}
            >
                {icon}
            </Box>
            <Heading level="4">{title}</Heading>
        </Stack>
    );
  }
  