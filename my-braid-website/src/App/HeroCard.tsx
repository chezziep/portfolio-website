import { Box, Heading, Text, Stack, Link } from 'braid-design-system';

interface HeroCardProps {
  title: string;
  subtitle: string;
  link: string;
  image: string;
}

export function HeroCard({ title, subtitle, link, image }: HeroCardProps) {
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
          minHeight: '600px',
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
            <Heading level="2">{title}</Heading>
            <Text size="large">{subtitle}</Text>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
}
