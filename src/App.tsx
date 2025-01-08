import { useState } from 'react';

import { AdvancedModeControls, Button, NormalModeControls } from '@/components';
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
          <div
            role="presentation"
            aria-label="Preview box"
            className="mx-auto h-72 w-72 bg-main transition-all"
            style={{ borderRadius: advancedBorderRadius }}
          />
        </AdvancedModeControls>
      : <NormalModeControls
          borderRadiusValues={borderRadiusValues}
          onBorderRadiusValuesChange={handleBorderRadiusValuesChange}
        >
          <div
            role="presentation"
            aria-label="Preview box"
            className="mx-auto h-72 w-72 bg-main transition-all"
            style={{ borderRadius: borderRadius }}
          />
        </NormalModeControls>
      }

      <Button onClick={() => void handleCopyButtonClick()}>
        Copy to clipboard!
      </Button>
    </div>
  );
};

export default App;
