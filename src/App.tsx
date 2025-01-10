import { useState } from 'react';

import {
  AdvancedModeControls,
  Button,
  NormalModeControls,
  Popup,
  PreviewBox,
} from '@/components';
import {
  AdvancedBorderRadiusValues,
  BorderRadiusUnits,
  BorderRadiusValues,
} from '@/types';
import { borderRadiusObjToStr, borderRadiusObjToStrAdvanced } from '@/utils';

const App = () => {
  const [borderRadiusValues, setBorderRadiusValues] =
    useState<BorderRadiusValues>({
      'top-left': '0',
      'top-right': '0',
      'bottom-right': '0',
      'bottom-left': '0',
    });
  const [borderRadiusUnits, setBorderRadiusUnits] = useState<BorderRadiusUnits>(
    {
      'top-left-unit': 'px',
      'top-right-unit': 'px',
      'bottom-right-unit': 'px',
      'bottom-left-unit': 'px',
    },
  );
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
  const [copyError, setCopyError] = useState<Nullable<Error>>(null);

  const borderRadius = borderRadiusObjToStr(
    borderRadiusValues,
    borderRadiusUnits,
  );
  const advancedBorderRadius = borderRadiusObjToStrAdvanced(
    advancedBorderRadiusValues,
  );

  const handleBorderRadiusValuesChange = (newValues: BorderRadiusValues) => {
    setBorderRadiusValues(newValues);
  };

  const handleBorderRadiusUnitsChange = (newUnits: BorderRadiusUnits) => {
    setBorderRadiusUnits(newUnits);
  };

  const handleAdvancedBorderRadiusValuesChange = (
    newValues: AdvancedBorderRadiusValues,
  ) => {
    setAdvancedBorderRadiusValues(newValues);
  };

  const handleCopyButtonClick = async () => {
    try {
      if (isAdvanced) {
        await navigator.clipboard.writeText(advancedBorderRadius);
      } else {
        await navigator.clipboard.writeText(borderRadius);
      }

      setShowSuccess(true);
    } catch (err) {
      if (err instanceof Error) {
        setCopyError(err);
      }
    }

    setTimeout(() => {
      setShowSuccess(false);
      setCopyError(null);
    }, 3000);
  };

  const handleModesSwitch = () => {
    setIsAdvanced(!isAdvanced);
  };

  return (
    <div className="mx-auto flex h-full max-w-5xl basis-full flex-col justify-center gap-y-3 p-3">
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
          borderRadiusUnits={borderRadiusUnits}
          onBorderRadiusValuesChange={handleBorderRadiusValuesChange}
          onBorderRadiusUnitsChange={handleBorderRadiusUnitsChange}
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
        <Popup aria-label="Copied successfully">The value is copied!</Popup>
      )}

      {copyError && (
        <Popup aria-label="Copy error" isError>
          An unexpected error occurred! Please try again later.
        </Popup>
      )}
    </div>
  );
};

export default App;
