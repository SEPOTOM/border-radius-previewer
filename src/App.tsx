import { ChangeEvent, useState } from 'react';

const App = () => {
  const [borderRadiusValues, setBorderRadiusValues] = useState([
    '0',
    '0',
    '0',
    '0',
  ]);

  const handleBorderRadiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'top-left': {
        setBorderRadiusValues([e.target.value, ...borderRadiusValues.slice(1)]);
        break;
      }
      case 'top-right': {
        setBorderRadiusValues([
          borderRadiusValues[0],
          e.target.value,
          ...borderRadiusValues.slice(2),
        ]);
        break;
      }
      case 'bottom-right': {
        setBorderRadiusValues([
          ...borderRadiusValues.slice(0, 2),
          e.target.value,
          borderRadiusValues[3],
        ]);
        break;
      }
      case 'bottom-left': {
        setBorderRadiusValues([
          ...borderRadiusValues.slice(0, 3),
          e.target.value,
        ]);
        break;
      }
    }
  };

  const borderRadius = borderRadiusValues
    .map((value) => {
      const parsedValue = parseFloat(value);

      if (isNaN(parsedValue) || parsedValue === 0) {
        return '0';
      } else {
        return `${parsedValue}px`;
      }
    })
    .join(' ');

  return (
    <>
      <input
        type="number"
        aria-label="Top-left corner"
        name="top-left"
        value={borderRadiusValues[0]}
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Top-right corner"
        value={borderRadiusValues[1]}
        name="top-right"
        onChange={handleBorderRadiusChange}
      />
      <div
        role="presentation"
        aria-label="Preview box"
        className="h-24 w-24 bg-main"
        style={{ borderRadius }}
      />
      <input
        type="number"
        aria-label="Bottom-left corner"
        value={borderRadiusValues[3]}
        name="bottom-left"
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Bottom-right corner"
        value={borderRadiusValues[2]}
        name="bottom-right"
        onChange={handleBorderRadiusChange}
      />
    </>
  );
};

export default App;
