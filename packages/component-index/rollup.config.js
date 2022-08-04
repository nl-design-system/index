import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import packageJson from './package.json';

/**
 * @type {import('rollup').RollupOptions}
 */

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
    },
    {
      file: packageJson.module,
      format: 'esm',
    },
  ],
  plugins: [typescript(), filesize()],
};
