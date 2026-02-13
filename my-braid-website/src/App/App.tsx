import 'braid-design-system/reset'; // <-- MUST BE FIRST to avoid CSS ordering issues
import '../global.css'; // Apply global font styles
import {
  BraidProvider,
  Stack,
  Heading,
  Text,
  Card,
  Page,
  Button,
  Alert,
  PageBlock,
  Columns,
  Column,
  ContentBlock,
  TextLink,
  Box,
  Bleed,
  Tiles,
  IconRocket,
  IconDocument,
  IconPeople,
  IconImage,
  IconSkills,
  IconExperience,
} from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { NextSteps } from './NextSteps';
import { Section } from './Section';
import chez from '../images/Chez-SM.png';
import ethics from '../images/articleCover_ethics.png';
import research from '../images/articleCover_research.png';
import custom from '../images/articleCover_custom.png';
import { ArticleCard } from './ArticleCard';
import { SkillTile } from './SkillTile';

export default function App() {
  const pageWidth = 'medium';

  return (
    <BraidProvider theme={seekJobs}>
      <Page footer={<div />}>
        <Card>
          <Text size="large">Navigation will go here...</Text>
        </Card>

        <Section tone="surface">
          <PageBlock width={pageWidth}>
            <Columns
              space="large"
              collapseBelow="tablet"
              reverse
              alignY="center"
            >
              <Column width="content">
                <Stack align="center" space="none">
                  <img src={chez} alt="Chez" width={450} height={450} />
                </Stack>
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
          </PageBlock>
        </Section>

        <Section tone="brandAccent" title="About me">
          <Stack space="xxlarge">
            <PageBlock width={pageWidth}>
              <Stack space="large">
                <Text size="large">
                  I'm a Product Designer with over 15 years experience and a
                  bachelor&rsquo;s degree in Psychology. I love applying my
                  behavioural knowledge to designs so I can help create products
                  people love.
                </Text>
                <Text size="large">
                  Working in design systems, I collaborate with engineers to
                  implement and maintain components, patterns and usage
                  guidelines that ensure best practice. I create code-based
                  prototypes combining my design expertise with technical
                  execution.
                </Text>
                <Text size="large">
                  Check out a few of my recent blog articles below, or see more
                  on{' '}
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
            </PageBlock>

            <PageBlock width="large">
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
            </PageBlock>
          </Stack>
        </Section>

        <Section tone="surface" title="Case studies">
          <Stack space="xxxlarge">
            <PageBlock width={pageWidth}>
              <Columns space="large" collapseBelow="tablet">
                <Column>
                  <ArticleCard
                    title="Designing beyond the system: Going custom with purpose"
                    subtitle="How custom solutions uplift products, evolve design systems and save money."
                    link="https://medium.com/design-systems-collective/designing-beyond-the-system-going-custom-with-purpose-6623a08d49b7"
                    image={custom}
                  />
                </Column>
                <Column>
                  <ArticleCard
                    title="With great persuasion comes great responsibility: Ethics in design"
                    subtitle="Practical frameworks to ensure ethical and responsible product design."
                    link="https://medium.com/p/adedcbe1bb66"
                    image={ethics}
                  />
                </Column>
              </Columns>
            </PageBlock>
            <PageBlock width="large">
              <Stack space="xxlarge">
                <Heading level="3" align="center">
                  Other projects
                </Heading>
                <Columns space="large" collapseBelow="tablet">
                  <Column>
                    <ArticleCard
                      title="Designing beyond the system: Going custom with purpose"
                      subtitle="How custom solutions uplift products, evolve design systems and save money."
                      link="https://medium.com/design-systems-collective/designing-beyond-the-system-going-custom-with-purpose-6623a08d49b7"
                      image={custom}
                    />
                  </Column>
                  <Column>
                    <ArticleCard
                      title="With great persuasion comes great responsibility: Ethics in design"
                      subtitle="Practical frameworks to ensure ethical and responsible product design."
                      link="https://medium.com/p/adedcbe1bb66"
                      image={ethics}
                    />
                  </Column>
                  <Column>
                    <ArticleCard
                      title="Choosing the right user research method for your project"
                      subtitle="How to set your research up for success by choosing the best method for the best outcome."
                      link="https://medium.com/p/3c7adace3bb9"
                      image={research}
                    />
                  </Column>
                </Columns>
              </Stack>
            </PageBlock>
          </Stack>
        </Section>

        <Section tone="brandAccent" title="Skills">
          <PageBlock width={pageWidth}>
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
          </PageBlock>
        </Section>
      </Page>
    </BraidProvider>
  );
}
