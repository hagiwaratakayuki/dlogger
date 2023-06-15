import BasicForm from "./BasicForm.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Auth/Certify',
  component: BasicForm,
  
};

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Login = {
  args: {},
};

