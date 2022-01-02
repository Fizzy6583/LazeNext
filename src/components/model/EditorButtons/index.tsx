import type { VFC } from 'react';

import { CompileButton } from '@/components/model/EditorButtons/EditorButton/CompileButton';
import { ConvertButton } from '@/components/model/EditorButtons/EditorButton/ConvertButton';
import { SamplesButton } from '@/components/model/EditorButtons/EditorButton/SamplesButton';
import { SettingsButton } from '@/components/model/EditorButtons/EditorButton/SettingsButton';

export const EditorButtons: VFC = () => {
  return (
    <>
      <div className="flex h-full bg-[#f3f3f3] dark:bg-background">
        <CompileButton />
        <SamplesButton />
        <ConvertButton />
        <div className="ml-auto">
          <SettingsButton />
        </div>
      </div>
    </>
  );
};
