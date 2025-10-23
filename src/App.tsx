import 'braid-design-system/reset';
import apacTheme from 'braid-design-system/themes/apac';
import { BraidProvider, Box, Heading, Text } from 'braid-design-system';

function App() {
  return (
    <BraidProvider theme={apacTheme}>
      <Box padding="large">
        <Heading level="1">Welcome to My Personal Website</Heading>
        <Text>This is built with the Braid design system!</Text>
      </Box>
    </BraidProvider>
  );
}

export default App;
