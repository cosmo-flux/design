import React from 'react';
import { CommandsProvider } from '@teambit/community.ui.bit-cli.commands-provider';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import rawCommands from '@teambit/harmony.content.cli-reference/dist/cli-reference.json';

export const NewMuiWsCommand = () => {
  const bitNewValues = {
    'template-name': 'material-ui',
    'workspace-name': 'mui-ws',
    'default-scope': 'MY_ORG.MY_SCOPE',
    aspect: 'teambit.community/starters/material-ui',
  };
  return (
    <CommandsProvider rawCommands={rawCommands}>
      <CommandsExplorer commandName="new" commandExample={bitNewValues} />
    </CommandsProvider>
  );
};
