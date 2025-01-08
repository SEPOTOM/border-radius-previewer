import { useState } from 'react';

import { AdvancedModeControls, NormalModeControls } from '@/components';

const App = () => {
  const [borderRadius, setBorderRadius] = useState('0 0 0 0');
  const [advancedBorderRadius, setAdvancedBorderRadius] =
    useState('0 0 0 0 / 0 0 0 0');
  const [isAdvanced, setIsAdvanced] = useState(false);

  const handleBorderRadiusChange = (newBorderRadius: string) => {
    if (isAdvanced) {
      setAdvancedBorderRadius(newBorderRadius);
    } else {
      setBorderRadius(newBorderRadius);
    }
  };

  const handleCopyButtonClick = async () => {
    await navigator.clipboard.writeText(borderRadius);
  };

  const handleModesSwitch = () => {
    setIsAdvanced(!isAdvanced);
  };

  return (
    <>
      <button
        type="button"
        role="switch"
        aria-checked={isAdvanced}
        onClick={handleModesSwitch}
      >
        Switch the mode
      </button>

      {isAdvanced ?
        <AdvancedModeControls onBorderRadiusChange={handleBorderRadiusChange}>
          <div
            role="presentation"
            aria-label="Preview box"
            className="h-24 w-24 bg-main"
            style={{ borderRadius: advancedBorderRadius }}
          />
        </AdvancedModeControls>
      : <NormalModeControls onBorderRadiusChange={handleBorderRadiusChange}>
          <div
            role="presentation"
            aria-label="Preview box"
            className="h-24 w-24 bg-main"
            style={{ borderRadius }}
          />
        </NormalModeControls>
      }

      <button type="button" onClick={() => void handleCopyButtonClick()}>
        Copy to clipboard!
      </button>
    </>
  );
};

export default App;
