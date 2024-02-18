import { defineConfig } from '@farmfe/core';
import * as path from "node:path"
import farmJsPluginPostcss from '@farmfe/js-plugin-postcss';
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [farmJsPluginPostcss({}),'@farmfe/plugin-react'],
  vitePlugins: [{ enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */) }],
    compilation: {
    resolve: {
      alias: {
        "@": path.join(process.cwd(), 'src')
      }
    }
  }
});
