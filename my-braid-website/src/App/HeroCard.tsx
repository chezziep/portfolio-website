import { Box, Heading, Text, Stack, Link, Badge } from 'braid-design-system';

interface HeroCardProps {
  title: string;
  subtitle: string;
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
  const minHeight = size === 'standard' ? '250px' : '500px';
  const headingLevel = size === 'standard' ? '3' : '2';
  const textSize = size === 'standard' ? 'standard' : 'large';

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
            transition: 'transform 0.3s ease',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <Box
          position="absolute"
          inset={0}
          style={{
            background:
              'linear-gradient(to top, rgba(5,26,23,0.7) 0%, rgba(5,26,23,0.2) 50%, transparent 100%)',
            mixBlendMode: 'multiply',
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
            {featured ? <Badge tone="promote">Featured</Badge> : null}
            <Heading level={headingLevel}>{title}</Heading>
            <Text size={textSize}>{subtitle}</Text>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
}
