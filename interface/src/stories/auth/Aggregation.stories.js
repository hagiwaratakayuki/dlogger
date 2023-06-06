import Aggregation from './Aggregation.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Auth/Aggregation',
  component: Aggregation,
  
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Create = {
  args: {
    primary: true,
    label: 'Button',
  },
};

