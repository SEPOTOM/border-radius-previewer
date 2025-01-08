import { ChangeEvent, useState } from 'react';

import { NormalModeControls } from '@/components';

const App = () => {
  const [borderRadius, setBorderRadius] = useState('0 0 0 0');
  const [advancedBorderRadiusValues, setAdvancedBorderRadiusValues] = useState({
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

  const handleAdvancedBorderRadiusValuesChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setAdvancedBorderRadiusValues({
      ...advancedBorderRadiusValues,
      [e.target.name]: e.target.value,
    });
  };

  const advancedBorderRadius = [
    advancedBorderRadiusValues['horz-top-left'],
    advancedBorderRadiusValues['horz-top-right'],
    advancedBorderRadiusValues['horz-bottom-right'],
    advancedBorderRadiusValues['horz-bottom-left'],
    advancedBorderRadiusValues['vert-top-left'],
    advancedBorderRadiusValues['vert-top-right'],
    advancedBorderRadiusValues['vert-bottom-right'],
    advancedBorderRadiusValues['vert-bottom-left'],
  ].map((value) => {
    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue) || parsedValue === 0) {
      return '0';
    } else {
      return `${parsedValue}px`;
    }
  });

  advancedBorderRadius.splice(4, 0, '/');

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
            value={advancedBorderRadiusValues['horz-top-left']}
            name="horz-top-left"
            onChange={handleAdvancedBorderRadiusValuesChange}
          />
          <input
            type="number"
            aria-label="Horizontal top-right radius"
            value={advancedBorderRadiusValues['horz-top-right']}
            name="horz-top-right"
            onChange={handleAdvancedBorderRadiusValuesChange}
          />
          <input
            type="number"
            aria-label="Horizontal bottom-left radius"
            value={advancedBorderRadiusValues['horz-bottom-left']}
            name="horz-bottom-left"
            onChange={handleAdvancedBorderRadiusValuesChange}
          />
          <input
            type="number"
            aria-label="Horizontal bottom-right radius"
            value={advancedBorderRadiusValues['horz-bottom-right']}
            name="horz-bottom-right"
            onChange={handleAdvancedBorderRadiusValuesChange}
          />
          <div
            role="presentation"
            aria-label="Preview box"
            className="h-24 w-24 bg-main"
            style={{ borderRadius: advancedBorderRadius.join(' ') }}
          />
          <input
            type="number"
            aria-label="Vertical top-left radius"
            value={advancedBorderRadiusValues['vert-top-left']}
            name="vert-top-left"
            onChange={handleAdvancedBorderRadiusValuesChange}
          />
          <input
            type="number"
            aria-label="Vertical top-right radius"
            value={advancedBorderRadiusValues['vert-top-right']}
            name="vert-top-right"
            onChange={handleAdvancedBorderRadiusValuesChange}
          />
          <input
            type="number"
            aria-label="Vertical bottom-left radius"
            value={advancedBorderRadiusValues['vert-bottom-left']}
            name="vert-bottom-left"
            onChange={handleAdvancedBorderRadiusValuesChange}
          />
          <input
            type="number"
            aria-label="Vertical bottom-right radius"
            value={advancedBorderRadiusValues['vert-bottom-right']}
            name="vert-bottom-right"
            onChange={handleAdvancedBorderRadiusValuesChange}
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
