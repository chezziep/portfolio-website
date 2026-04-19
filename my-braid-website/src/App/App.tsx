import 'braid-design-system/reset'; // <-- MUST BE FIRST to avoid CSS ordering issues
import {
  BraidProvider,
  Stack,
  Heading,
  Text,
  Card,
  Page,
  PageBlock,
  Columns,
  Column,
  ContentBlock,
  TextLink,
  Box,
  Tiles,
  IconRocket,
  IconDocument,
  IconPeople,
  IconImage,
  IconSkills,
  IconExperience,
  IconSocialLinkedIn,
  IconSocialX,
  IconSocialMedium,
  IconSocialGitHub,
  Link,
} from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { Section } from './Section';
import chez from '../images/Chez-SM.png';
import ethics from '../images/articleCover_ethics.png';
import research from '../images/articleCover_research.png';
import custom from '../images/articleCover_custom.png';
import { ArticleCard } from './ArticleCard';
import { HeroCard } from './HeroCard';
import { SkillTile } from './SkillTile';

export default function App() {
  const pageWidth = 'large';

  return (
    <BraidProvider theme={seekJobs}>
      <Page
        footer={
          <Box background="neutral" padding="medium">
            <PageBlock width={pageWidth}>
              <Text size="xsmall" tone="secondary">
                Made with the{' '}
                <TextLink
                  href="https://seek-oss.github.io/braid-design-system"
                  target="_blank"
                >
                  Braid Design System
                </TextLink>
              </Text>
            </PageBlock>
          </Box>
        }
      >
        <Card>
          <Text size="large">Navigation will go here...</Text>
        </Card>

        <Section tone="surface">
          <Columns
            space={{ mobile: 'large', desktop: 'xxlarge' }}
            collapseBelow="desktop"
            reverse
            alignY="center"
          >
            <Column width="1/2">
              <img src={chez} alt="Chez" width={450} height={450} />
            </Column>
            <Column>
              <ContentBlock width="small" align="left">
                <Stack space="large">
                  <Heading level="1" weight="weak">
                    Hi, I'm Chez 👋
                  </Heading>
                  <Text size="large">
                    I'm a Principal Product Designer @{' '}
                    <TextLink
                      href="https://seek.com.au"
                      target="_blank"
                      weight="weak"
                    >
                      Seek
                    </TextLink>
                    . I bridge design and technology to build design systems
                    that create great products.
                  </Text>
                </Stack>
              </ContentBlock>
            </Column>
          </Columns>
        </Section>

        <Section tone="brandAccent" title="About me">
          <Stack space="xxlarge">
            <Columns
              space={{ mobile: 'large', desktop: 'xxlarge' }}
              collapseBelow="desktop"
            >
              <Column width="1/2">
                <Stack space="large">
                  <Text size="large">
                    I'm a Product Designer with over 15 years experience and a
                    bachelor&rsquo;s degree in Psychology. I love applying my
                    behavioural knowledge to designs so I can help create
                    products people love.
                  </Text>
                  <Text size="large">
                    Working in design systems, I collaborate with engineers to
                    implement and maintain components, patterns and usage
                    guidelines that ensure best practice.
                  </Text>
                </Stack>
              </Column>
              <Column width="1/2">
                <Stack space="large">
                  <Text size="large">
                    I create code-based prototypes combining my design expertise
                    with technical execution.
                  </Text>
                  <Text size="large">
                    Check out a few of my recent blog articles below, or see
                    more on{' '}
                    <TextLink
                      href="https://medium.com/@cheryl.paulsen"
                      target="_blank"
                      weight="weak"
                    >
                      Medium
                    </TextLink>
                    .
                  </Text>
                </Stack>
              </Column>
            </Columns>

            <Tiles space="small" columns={{ mobile: 1, desktop: 3 }}>
              <ArticleCard
                title="Designing beyond the system: Going custom with purpose"
                subtitle="How custom solutions uplift products, evolve design systems and save money."
                link="https://medium.com/design-systems-collective/designing-beyond-the-system-going-custom-with-purpose-6623a08d49b7"
                image={custom}
              />
              <ArticleCard
                title="With great persuasion comes great responsibility: Ethics in design"
                subtitle="Practical frameworks to ensure ethical and responsible product design."
                link="https://medium.com/p/adedcbe1bb66"
                image={ethics}
              />
              <ArticleCard
                title="Choosing the right user research method for your project"
                subtitle="How to set your research up for success by choosing the best method for the best outcome."
                link="https://medium.com/p/3c7adace3bb9"
                image={research}
              />
            </Tiles>
          </Stack>
        </Section>

        <Section tone="surface" title="Projects">
          <Stack space="xxxlarge">
            <Columns space="small" collapseBelow="tablet">
              <Column>
                <Stack space="small">
                  <HeroCard
                    featured={true}
                    size="large"
                    title="From components to consistency: Building our design
                            system pattern library"
                    subtitle="Establishing scalable solutions for recurring design
                            problems across Seek's products."
                    link="https://www.designsystemscollective.com/from-components-to-consistency-building-our-design-system-pattern-library-5be3e6b761ce"
                    image="https://cherylpaulsen.com/images/casestudy01_cover.png"
                  />
                  <Columns space="small" collapseBelow="tablet">
                    <Column>
                      <HeroCard
                        size="standard"
                        title="From components to consistency: Building our design
                            system pattern library"
                        subtitle="Establishing scalable solutions for recurring design
                            problems across Seek's products."
                        link="https://www.designsystemscollective.com/from-components-to-consistency-building-our-design-system-pattern-library-5be3e6b761ce"
                        image="https://cherylpaulsen.com/images/casestudy01_cover.png"
                      />
                    </Column>
                    <Column>
                      <HeroCard
                        size="standard"
                        title="From components to consistency: Building our design
                            system pattern library"
                        subtitle="Establishing scalable solutions for recurring design
                            problems across Seek's products."
                        link="https://www.designsystemscollective.com/from-components-to-consistency-building-our-design-system-pattern-library-5be3e6b761ce"
                        image="https://cherylpaulsen.com/images/casestudy01_cover.png"
                      />
                    </Column>
                  </Columns>
                </Stack>
              </Column>
              <Column>
                <Stack space="small">
                  <Columns space="small" collapseBelow="tablet">
                    <Column>
                      <HeroCard
                        size="standard"
                        title="From components to consistency: Building our design
                            system pattern library"
                        subtitle="Establishing scalable solutions for recurring design
                            problems across Seek's products."
                        link="https://www.designsystemscollective.com/from-components-to-consistency-building-our-design-system-pattern-library-5be3e6b761ce"
                        image="https://cherylpaulsen.com/images/casestudy01_cover.png"
                      />
                    </Column>
                    <Column>
                      <HeroCard
                        size="standard"
                        title="From components to consistency: Building our design
                            system pattern library"
                        subtitle="Establishing scalable solutions for recurring design
                            problems across Seek's products."
                        link="https://www.designsystemscollective.com/from-components-to-consistency-building-our-design-system-pattern-library-5be3e6b761ce"
                        image="https://cherylpaulsen.com/images/casestudy01_cover.png"
                      />
                    </Column>
                  </Columns>
                  <HeroCard
                    featured={true}
                    size="large"
                    title="Driving a product experience across multiple integrations to increase adoption"
                    subtitle="Elevating the quality and consistency of experience across third party integrations."
                    link="https://medium.com/@cheryl.paulsen/product-experience-across-integrations-32d925d339b2"
                    image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*8NP9r_LYr2SZ8nOYzBM1yg.png"
                  />
                </Stack>
              </Column>
            </Columns>
          </Stack>
        </Section>

        <Section tone="brandAccent" title="Skills">
          <ContentBlock width="medium" align="left">
            <Tiles
              space="xxxlarge"
              columns={{ mobile: 1, tablet: 2, desktop: 3 }}
            >
              <SkillTile
                title="Systems implementation"
                icon={<IconRocket size="fill" />}
              />
              <SkillTile
                title="Code-based prototyping"
                icon={<IconExperience size="fill" />}
              />
              <SkillTile
                title="Design guidelines"
                icon={<IconDocument size="fill" />}
              />
              <SkillTile
                title="Interaction design"
                icon={<IconSkills size="fill" />}
              />
              <SkillTile
                title="User research"
                icon={<IconPeople size="fill" />}
              />
              <SkillTile
                title="UI & visual design"
                icon={<IconImage size="fill" />}
              />
            </Tiles>
          </ContentBlock>
        </Section>

        <Section tone="surface" title="Let's be friends :)">
          <ContentBlock width="small" align="left">
            <Tiles space="xxsmall" columns={{ mobile: 1, tablet: 4 }}>
              <Link
                href="https://www.linkedin.com/in/cherylpaulsen/"
                target="_blank"
              >
                <Heading component="div" level="1">
                  <IconSocialLinkedIn />
                </Heading>
              </Link>
              <Link href="https://medium.com/@cheryl.paulsen" target="_blank">
                <Heading component="div" level="1">
                  <IconSocialMedium />
                </Heading>
              </Link>
              <Link href="https://x.com/Cheryl_Paulsen" target="_blank">
                <Heading component="div" level="1">
                  <IconSocialX />
                </Heading>
              </Link>
              <Link href="https://github.com/cherylpaulsen" target="_blank">
                <Heading component="div" level="1">
                  <IconSocialGitHub />
                </Heading>
              </Link>
            </Tiles>
          </ContentBlock>
        </Section>
      </Page>
    </BraidProvider>
  );
}
