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
    <div className="mx-auto flex h-full max-w-5xl flex-col justify-center gap-y-3 p-3">
      <button
        type="button"
        role="switch"
        aria-checked={isAdvanced}
        onClick={handleModesSwitch}
        className="mx-auto rounded-md border-4 border-main p-2 text-xl font-black uppercase text-main transition-colors hover:bg-main hover:text-secondary active:border-main-dark active:bg-main-dark active:text-secondary active:transition-none"
      >
        Switch the mode
      </button>

      {isAdvanced ?
        <AdvancedModeControls onBorderRadiusChange={handleBorderRadiusChange}>
          <div
            role="presentation"
            aria-label="Preview box"
            className="mx-auto h-72 w-72 bg-main transition-all"
            style={{ borderRadius: advancedBorderRadius }}
          />
        </AdvancedModeControls>
      : <NormalModeControls onBorderRadiusChange={handleBorderRadiusChange}>
          <div
            role="presentation"
            aria-label="Preview box"
            className="mx-auto h-72 w-72 bg-main transition-all"
            style={{ borderRadius: borderRadius }}
          />
        </NormalModeControls>
      }

      <button
        type="button"
        onClick={() => void handleCopyButtonClick()}
        className="mx-auto rounded-md border-4 border-main p-2 text-xl font-black uppercase text-main transition-colors hover:bg-main hover:text-secondary active:border-main-dark active:bg-main-dark active:text-secondary active:transition-none"
      >
        Copy to clipboard!
      </button>
    </div>
  );
};

export default App;
