import 'braid-design-system/reset'; // <-- MUST BE FIRST to avoid CSS ordering issues
import { useEffect, useState } from 'react';
import {
  BraidProvider,
  Stack,
  Heading,
  Text,
  PageBlock,
  Columns,
  Column,
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
  IconLink,
} from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { Section } from './Section';
import { NavigationBar } from './NavigationBar';
import chez from '../images/Chez-SM.png';
import ethics from '../images/articleCover_ethics.png';
import research from '../images/articleCover_research.png';
import custom from '../images/articleCover_custom.png';
import { ArticleCard } from './ArticleCard';
import { HeroCard } from './HeroCard';
import { SkillTile } from './SkillTile';

export default function App() {
  const pageWidth = 'large';
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ] as const;
  const navOffset = 70;
  const [activeSection, setActiveSection] =
    useState<(typeof navItems)[number]['id']>('home');
  const getScrollBehavior = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

  const scrollToSection = (sectionId: (typeof navItems)[number]['id']) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: getScrollBehavior() });
      setActiveSection('home');
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const y = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: y, behavior: getScrollBehavior() });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const sectionIds = navItems.map(({ id }) => id);
    let ticking = false;

    const updateActiveSection = () => {
      if (window.scrollY < 60) {
        setActiveSection('home');
        ticking = false;
        return;
      }

      const currentScrollPosition = window.scrollY + navOffset + 1;
      let nextActiveSection: (typeof navItems)[number]['id'] = 'home';

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) {
          continue;
        }

        if (section.offsetTop <= currentScrollPosition) {
          nextActiveSection = sectionId;
        }
      }

      setActiveSection(nextActiveSection);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <BraidProvider theme={seekJobs}>
      <NavigationBar
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        pageWidth={pageWidth}
      />

      <Section tone="brandAccent" id="home">
        <Columns
          space={{ mobile: 'large', desktop: 'xxlarge' }}
          collapseBelow="desktop"
          reverse
          alignY="center"
        >
          <Column width="1/2">
            <Box
              borderRadius="full"
              overflow="hidden"
              style={{
                width: '450px',
                height: '450px',
              }}
            >
              <img src={chez} alt="Chez" width="450px" height="450px" />
            </Box>
          </Column>
          <Column>
            <Stack space="xxlarge">
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
                . I bridge design and technology to build design systems that
                create great products.
              </Text>
            </Stack>
          </Column>
        </Columns>
      </Section>

      <Section tone="surface" title="About me" id="about">
        <Stack space="xxlarge">
          <Columns
            space={{ mobile: 'large', desktop: 'xxlarge' }}
            collapseBelow="desktop"
          >
            <Column width="1/2">
              <Stack space="large">
                <Text size="large">
                  I&rsquo;m a Product Designer with over 15 years experience and
                  a bachelor&rsquo;s degree in Psychology. I love applying my
                  behavioural knowledge to designs so I can help create products
                  people love. Working in design systems, I collaborate with
                  engineers to implement and maintain components, patterns and
                  usage guidelines that ensure best practice.
                </Text>
              </Stack>
            </Column>
            <Column width="1/2">
              <Stack space="large">
                <Text size="large">
                  I have front-end development experience spanning HTML, CSS and
                  JavaScript, as well as working knowledge in React, Git/GitHub
                  and Cursor IDE. I create code-based prototypes combining my
                  design expertise with technical execution. I like to share my
                  learnings and experiences with other designers in the
                  community. Check out a few of my recent blog articles below,
                  or see more on{' '}
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

      <Section tone="brandAccent" title="Projects" id="projects">
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
                      featured={true}
                      title="Supporting a pricing model transformation"
                      link="https://medium.com/@cheryl.paulsen/seek-pricing-transformation-ddef8f756b3"
                      image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*vuhdHaCoEqng2wabjVm1-g.jpeg"
                    />
                  </Column>
                  <Column>
                    <HeroCard
                      size="standard"
                      title="Creating a UX research resource for the design community"
                      link="https://medium.com/@cheryl.paulsen/rubik-a-ux-resource-for-the-design-community-cf477ead6de6"
                      image="https://cherylpaulsen.com/images/casestudy03_cover.png"
                    />
                  </Column>
                </Columns>
              </Stack>
            </Column>
            <Column>
              <Stack space="small">
                <Columns space="none" collapseBelow="tablet">
                  <Column>
                    <HeroCard
                      size="standard"
                      title="Designing a service blueprint for a multi-channel experience"
                      link="https://medium.com/@cheryl.paulsen/anz-digital-transformation-service-design-cf167827e58b"
                      image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*BRG7l1Wz0qqN7cxRl8jH5g.png"
                    />
                  </Column>
                  <Column width="content">
                    <Box />
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

      <Section tone="surface" title="Skills" id="skills">
        <Tiles space="xxxlarge" columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
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
          <SkillTile title="User research" icon={<IconPeople size="fill" />} />
          <SkillTile
            title="UI & visual design"
            icon={<IconImage size="fill" />}
          />
        </Tiles>
      </Section>

      <Section tone="brandAccent" title="Let's be friends" id="contact">
        <Stack space="large">
          <Heading level="4" weight="weak">
            <TextLink
              icon={<IconSocialLinkedIn />}
              href="https://www.linkedin.com/in/cherylpaulsen/"
              target="_blank"
              weight="weak"
            >
              LinkedIn
            </TextLink>
          </Heading>
          <Heading level="4" weight="weak">
            <TextLink
              icon={<IconSocialMedium />}
              href="https://medium.com/@cheryl.paulsen"
              target="_blank"
              weight="weak"
            >
              Medium
            </TextLink>
          </Heading>
          <Heading level="4" weight="weak">
            <TextLink
              icon={<IconLink />}
              href="https://dribbble.com/cherylpaulsen"
              target="_blank"
              weight="weak"
            >
              Dribble
            </TextLink>
          </Heading>
          <Heading level="4" weight="weak">
            <TextLink
              icon={<IconSocialGitHub />}
              href="https://github.com/cherylpaulsen"
              target="_blank"
              weight="weak"
            >
              GitHub
            </TextLink>
          </Heading>
          <Heading level="4" weight="weak">
            <TextLink
              icon={<IconSocialX />}
              href="https://x.com/Cheryl_Paulsen"
              target="_blank"
              weight="weak"
            >
              X
            </TextLink>
          </Heading>
        </Stack>
      </Section>

      <Box
        background="neutral"
        paddingY="xlarge"
        paddingX={{ mobile: 'small', tablet: 'gutter' }}
      >
        <PageBlock width={pageWidth}>
          <Text size="standard">
            Made with{' '}
            <TextLink
              href="https://seek-oss.github.io/braid-design-system"
              target="_blank"
              weight="weak"
            >
              Braid design system
            </TextLink>{' '}
            ❤️
          </Text>
        </PageBlock>
      </Box>
    </BraidProvider>
  );
}
