import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import { Preview } from '@teambit/preview';
import { ReactEnv } from '@bitdev/react.react-env';
import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import hostDependencies from './preview/host-dependencies.js';

const esmRequire = createRequire(import.meta.url);

export class MaterialUiEnv extends ReactEnv {
  name = 'material-ui-env';

  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      mounter: this.previewMounter,
      docsTemplate: this.previewDocsTemplate,
      hostDependencies,
    });
  }

  protected previewDocsTemplate = esmRequire.resolve('./preview/docs.js');

  protected tsconfigPath = esmRequire.resolve('./config/tsconfig.json');

  protected eslintConfigPath = esmRequire.resolve('./config/eslintrc.cjs');

  protected prettierConfigPath = esmRequire.resolve(
    './config/prettier.config.cjs'
  );

  protected vitestConfigPath = esmRequire.resolve('./config/vitest.config.mjs');

  protected previewMounter = esmRequire.resolve('./preview/mounter.js');

  protected dirName = dirname(fileURLToPath(import.meta.url));
}

export default new MaterialUiEnv();
