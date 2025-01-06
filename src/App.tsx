const App = () => (
  <>
    <input type="number" aria-label="Top-left corner" />
    <input type="number" aria-label="Top-right corner" />
    <div
      role="presentation"
      aria-label="Preview box"
      className="h-24 w-24 bg-main"
      style={{ borderRadius: '0 0 0 0' }}
    />
    <input type="number" aria-label="Bottom-left corner" />
    <input type="number" aria-label="Bottom-right corner" />
  </>
);

export default App;
