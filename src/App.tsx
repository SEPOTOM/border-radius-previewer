import { ChangeEvent, useState } from 'react';

const App = () => {
  const [borderRadiusValues, setBorderRadiusValues] = useState({
    'top-left': '0',
    'top-right': '0',
    'bottom-right': '0',
    'bottom-left': '0',
  });

  const handleBorderRadiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBorderRadiusValues({
      ...borderRadiusValues,
      [e.target.name]: e.target.value,
    });
  };

  const borderRadius = [
    borderRadiusValues['top-left'],
    borderRadiusValues['top-right'],
    borderRadiusValues['bottom-right'],
    borderRadiusValues['bottom-left'],
  ]
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
        value={borderRadiusValues['top-left']}
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Top-right corner"
        value={borderRadiusValues['top-right']}
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
        value={borderRadiusValues['bottom-left']}
        name="bottom-left"
        onChange={handleBorderRadiusChange}
      />
      <input
        type="number"
        aria-label="Bottom-right corner"
        value={borderRadiusValues['bottom-right']}
        name="bottom-right"
        onChange={handleBorderRadiusChange}
      />
    </>
  );
};

export default App;
