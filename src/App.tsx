import { useState } from 'react';

import { NormalModeControls } from '@/components';

const App = () => {
  const [borderRadius, setBorderRadius] = useState('0 0 0 0');
  const [isAdvanced, setIsAdvanced] = useState(false);

  const handleBorderRadiusChange = (newBorderRadius: string) => {
    setBorderRadius(newBorderRadius);
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

      <NormalModeControls onBorderRadiusChange={handleBorderRadiusChange}>
        <div
          role="presentation"
          aria-label="Preview box"
          className="h-24 w-24 bg-main"
          style={{ borderRadius }}
        />
      </NormalModeControls>

      <button type="button" onClick={() => void handleCopyButtonClick()}>
        Copy to clipboard!
      </button>
    </>
  );
};

export default App;
