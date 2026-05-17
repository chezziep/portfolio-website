import { Box, Heading, Text, Stack, Link, Badge } from 'braid-design-system';

interface HeroCardProps {
  title: string;
  subtitle?: string;
  link: string;
  image: string;
  size?: 'standard' | 'large';
  featured?: boolean;
}

export function HeroCard({
  title,
  subtitle,
  link,
  image,
  size = 'large',
  featured = false,
}: HeroCardProps) {
  const minHeight = size === 'standard' ? '300px' : '500px';
  const headingLevel = size === 'standard' ? '4' : '2';
  const headingComponent = size === 'standard' ? 'h4' : 'h3';
  const textSize = size === 'standard' ? 'standard' : 'large';
  const backgroundTone = size === 'standard' ? 'promote' : 'formAccent';

  return (
    <Link href={link} target="_blank">
      <Box
        borderRadius="large"
        overflow="hidden"
        background="customDark"
        boxShadow="large"
        position="relative"
        height="full"
        style={{
          minHeight,
        }}
      >
        <Box
          position="absolute"
          inset={0}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(50%)',
            transition: 'transform 0.3s ease',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            const overlay = e.currentTarget.nextElementSibling;
            if (overlay instanceof HTMLElement) overlay.style.opacity = '0.95';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            const overlay = e.currentTarget.nextElementSibling;
            if (overlay instanceof HTMLElement) overlay.style.opacity = '0.80';
          }}
        />
        <Box
          position="absolute"
          inset={0}
          background={backgroundTone}
          style={{
            opacity: 0.7,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          }}
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          padding="large"
          style={{ pointerEvents: 'none' }}
        >
          <Stack space="small">
            {featured ? <Badge tone="promote">Case study</Badge> : null}
            <Heading
              level={headingLevel}
              component={headingComponent}
              weight="weak"
            >
              {title}
            </Heading>
            {subtitle ? <Text size={textSize}>{subtitle}</Text> : null}
          </Stack>
        </Box>
      </Box>
    </Link>
  );
}
