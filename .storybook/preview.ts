import type { Preview } from "@storybook/vue3";
import '../src/assets/style.css'
import '../src/assets/root.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
