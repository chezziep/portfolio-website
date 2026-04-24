import {
  Box,
  Button,
  Hidden,
  Inline,
  MenuItem,
  OverflowMenu,
  PageBlock,
  Spread,
} from 'braid-design-system';

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
  return (
    <Box
      background="brandAccent"
      paddingY="small"
      position="sticky"
      top={0}
      style={{ zIndex: 250 }}
    >
      <PageBlock width={pageWidth}>
        <Spread space="small" alignY="center">
          <Hidden below="desktop">
            <Inline space="small" align="center">
              {navItems.map(({ id, label }) => (
                <Button
                  key={id}
                  size="small"
                  variant={activeSection === id ? 'solid' : 'soft'}
                  tone="neutral"
                  aria-pressed={activeSection === id}
                  onClick={() => onNavigate(id)}
                >
                  {label}
                </Button>
              ))}
            </Inline>
          </Hidden>
          <Hidden above="tablet">
            <OverflowMenu
              label={
                navItems.find(({ id }) => id === activeSection)?.label ?? 'Menu'
              }
            >
              {navItems.map(({ id, label }) => (
                <MenuItem key={id} onClick={() => onNavigate(id)}>
                  {label}
                </MenuItem>
              ))}
            </OverflowMenu>
          </Hidden>
        </Spread>
      </PageBlock>
    </Box>
  );
}
