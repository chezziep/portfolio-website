import {
  Box,
  Button,
  Hidden,
  Actions,
  Inline,
  MenuItem,
  OverflowMenu,
  PageBlock,
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
        <Hidden below="desktop">
          <Actions>
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
          </Actions>
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
      </PageBlock>
    </Box>
  );
}
