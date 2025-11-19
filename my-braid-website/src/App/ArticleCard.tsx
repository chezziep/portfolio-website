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
  } from 'braid-design-system';
  
  interface ArticleCardProps {
    title: string;
    subtitle: string;
    link: string;
    image: string;
  }

  export function ArticleCard({ title, subtitle, link, image }: ArticleCardProps) {
    return (
        <Card height="full">
        <Stack space="large">
            <Box
              overflow="auto"
              style={{
                borderRadius: 14,
                maxHeight: 150,
              }}
            >
              <img
                src={image}
              />
            </Box>
          <Stack space="medium">
            <Heading level="4">
            {title}
            </Heading>
            <Text tone="secondary">
            {subtitle}
            </Text>
            <Actions>
              <ButtonLink href={link} target="_blank" variant="solid">
                    Read the article
                </ButtonLink>
            </Actions>
          </Stack>
        </Stack>
      </Card>
      
    );
  }
  