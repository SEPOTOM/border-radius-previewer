import { useState } from 'react';

import {
  AdvancedModeControls,
  Button,
  NormalModeControls,
  PreviewBox,
} from '@/components';
import { AdvancedBorderRadiusValues, BorderRadiusValues } from '@/types';
import { borderRadiusObjToStr, borderRadiusObjToStrAdvanced } from '@/utils';

const App = () => {
  const [borderRadiusValues, setBorderRadiusValues] =
    useState<BorderRadiusValues>({
      'top-left': '0',
      'top-right': '0',
      'bottom-right': '0',
      'bottom-left': '0',
    });
  const [advancedBorderRadiusValues, setAdvancedBorderRadiusValues] =
    useState<AdvancedBorderRadiusValues>({
      'horz-top-left': '0',
      'horz-top-right': '0',
      'horz-bottom-right': '0',
      'horz-bottom-left': '0',
      'vert-top-left': '0',
      'vert-top-right': '0',
      'vert-bottom-right': '0',
      'vert-bottom-left': '0',
    });
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const borderRadius = borderRadiusObjToStr(borderRadiusValues);
  const advancedBorderRadius = borderRadiusObjToStrAdvanced(
    advancedBorderRadiusValues,
  );

  const handleBorderRadiusValuesChange = (newValues: BorderRadiusValues) => {
    setBorderRadiusValues(newValues);
  };

  const handleAdvancedBorderRadiusValuesChange = (
    newValues: AdvancedBorderRadiusValues,
  ) => {
    setAdvancedBorderRadiusValues(newValues);
  };

  const handleCopyButtonClick = async () => {
    if (isAdvanced) {
      await navigator.clipboard.writeText(advancedBorderRadius);
    } else {
      await navigator.clipboard.writeText(borderRadius);
    }

    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleModesSwitch = () => {
    setIsAdvanced(!isAdvanced);
  };

  return (
    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center gap-y-3 p-3">
      <Button
        role="switch"
        aria-checked={isAdvanced}
        onClick={handleModesSwitch}
      >
        Switch the mode
      </Button>

      {isAdvanced ?
        <AdvancedModeControls
          borderRadiusValues={advancedBorderRadiusValues}
          onBorderRadiusValuesChange={handleAdvancedBorderRadiusValuesChange}
        >
          <PreviewBox borderRadius={advancedBorderRadius} />
        </AdvancedModeControls>
      : <NormalModeControls
          borderRadiusValues={borderRadiusValues}
          onBorderRadiusValuesChange={handleBorderRadiusValuesChange}
        >
          <PreviewBox borderRadius={borderRadius} />
        </NormalModeControls>
      }

      <div className="mx-auto mt-5 flex min-w-72 flex-col items-baseline gap-2 text-xl font-bold text-main md:flex-row">
        <span className="whitespace-nowrap">border-radius:</span>
        <output
          aria-label="Output"
          aria-live="polite"
          className="w-full rounded-md bg-main p-2 font-black text-secondary"
        >
          {isAdvanced ? advancedBorderRadius : borderRadius}
        </output>
      </div>

      <Button onClick={() => void handleCopyButtonClick()}>
        Copy to clipboard!
      </Button>

      {showSuccess && (
        <p
          role="status"
          aria-label="Copied successfully"
          className="absolute left-1/2 top-1/2 w-full max-w-72 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-main bg-secondary p-4 text-center text-2xl font-bold text-main outline outline-2 outline-secondary sm:max-w-80 sm:text-3xl"
        >
          The value is copied!
        </p>
      )}
    </div>
  );
};

export default App;
