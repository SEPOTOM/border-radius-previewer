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

      {isAdvanced ?
        <>
          <input
            type="number"
            aria-label="Horizontal top-left radius"
            value={0}
          />
          <input
            type="number"
            aria-label="Horizontal top-right radius"
            value={0}
          />
          <input
            type="number"
            aria-label="Horizontal bottom-left radius"
            value={0}
          />
          <input
            type="number"
            aria-label="Horizontal bottom-right radius"
            value={0}
          />
          <input
            type="number"
            aria-label="Vertical top-left radius"
            value={0}
          />
          <input
            type="number"
            aria-label="Vertical top-right radius"
            value={0}
          />
          <input
            type="number"
            aria-label="Vertical bottom-left radius"
            value={0}
          />
          <input
            type="number"
            aria-label="Vertical bottom-right radius"
            value={0}
          />
        </>
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
