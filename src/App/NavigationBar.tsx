import {
  Bleed,
  Box,
  Button,
  Hidden,
  Inline,
  Actions,
  Drawer,
  Stack,
  PageBlock,
} from 'braid-design-system';
import { useState } from 'react';

interface NavigationBarProps<TSectionId extends string> {
  navItems: readonly { id: TSectionId; label: string }[];
  activeSection: TSectionId;
  onNavigate: (sectionId: TSectionId) => void;
  pageWidth: 'small' | 'medium' | 'large' | 'full';
}

export function NavigationBar<TSectionId extends string>({
  navItems,
  activeSection,
  onNavigate,
  pageWidth,
}: NavigationBarProps<TSectionId>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Box
      background="brandAccent"
      paddingY="small"
      position="sticky"
      top={0}
      style={{ zIndex: 250 }}
    >
      <PageBlock width={pageWidth}>
        <Bleed
          left={{
            mobile: 'none',
            tablet: 'none',
            desktop: 'small',
            wide: 'small',
          }}
        >
          <Hidden below="desktop">
            <Actions>
              {navItems.map(({ id, label }) => (
                <Button
                  key={id}
                  size="small"
                  variant={activeSection === id ? 'ghost' : 'transparent'}
                  tone="neutral"
                  aria-pressed={activeSection === id}
                  onClick={() => onNavigate(id)}
                >
                  {label}
                </Button>
              ))}
            </Actions>
          </Hidden>
          <Hidden above="tablet">
            <Inline space="none">
              <Button
                size="small"
                variant="ghost"
                tone="neutral"
                onClick={() => setMenuOpen(true)}
              >
                Menu
              </Button>
            </Inline>
          </Hidden>
        </Bleed>
      </PageBlock>

      <Hidden above="tablet">
        <Drawer
          title="Menu"
          open={menuOpen}
          onClose={closeMenu}
          position="left"
        >
          <Stack space="small">
            {navItems.map(({ id, label }) => (
              <Button
                key={id}
                variant={activeSection === id ? 'solid' : 'soft'}
                tone={activeSection === id ? 'brandAccent' : 'neutral'}
                onClick={() => {
                  onNavigate(id);
                  closeMenu();
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Drawer>
      </Hidden>
    </Box>
  );
}
