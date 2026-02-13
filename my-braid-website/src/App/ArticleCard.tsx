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
  Spread,
} from 'braid-design-system';

interface ArticleCardProps {
  title: string;
  subtitle: string;
  link: string;
  image: string;
}

export function ArticleCard({
  title,
  subtitle,
  link,
  image,
}: ArticleCardProps) {
  return (
    <Box
      padding="medium"
      background="surface"
      borderRadius="large"
      boxShadow="large"
      height="full"
    >
      <Spread space="small" direction="vertical">
        <Stack space="large">
          <Bleed horizontal="medium" top="medium">
            <Box
              overflow="hidden"
              style={{
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                maxHeight: 150,
              }}
            >
              <img src={image} />
            </Box>
          </Bleed>
          <Stack space="medium">
            <Heading level="4">{title}</Heading>
            <Text tone="secondary">{subtitle}</Text>
          </Stack>
        </Stack>
        <Actions>
          <ButtonLink href={link} target="_blank" variant="solid">
            Read the article
          </ButtonLink>
        </Actions>
      </Spread>
    </Box>
  );
}
