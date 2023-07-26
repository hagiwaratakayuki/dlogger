import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
  plugins: [
    HstSvelte(),
  ],
  storyMatch: [
    'src/story/**/*.story.svelte',
    'src/lib/**/*.story.svelte',
    'src/route/**/*.story.svelte',

  ],
  tree: {
    file: function ({ path }) {
      return path
        .replace(/^src\//, '')
        .replace(/^story\//, '')
        .replace('.story.svelte', '')
        .replace('lib', '$lib')
        .split('/')
        .map(function (r) {
          if (r === 'lib') {
            return '$lib';
          }
          return r

        })

    }
  },
})