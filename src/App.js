import './App.css';
import { useEffect, useRef, useState } from 'react';
import { numberIterator } from './tools/NumberTools';
function App() {
  return (
    <PagesProfiling />
  );
}

export default App;

const IMG_PATH = "dev-assets/profiling";


const PagesProfiling = () => {

  const [pageType, setPageType] = useState('svg');
  const [size, setSize] = useState(50);
  const [light, setLight] = useState(false);


  const pages = numberIterator(0, 5).map(idx => {
    const path = pageType === 'svg' ? `${IMG_PATH}/africa0${idx}.svg` : `${IMG_PATH}/alleluia0${idx}.png`;
    const imgLightStyle = light ? { visibility: 'hidden' } : { visibility: 'inherit' };
    const imgStyle = { ...imgLightStyle, width: '100%', height: '100%' }
    return <div key={idx} style={{ width: size + 'px', height: size * 1.41 + 'px', border: '1px solid purple', background: light ? '#ccccccaa' : 'white', border: light ? '2px solid white' : 'none', borderRadius: '3px' }}>
      <img src={path} style={imgStyle} />
    </div>;
  })

  return <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
    <header style={{ display: 'flex', gap: '.5rem', padding: '.5rem' }}>
      <h2 style={{ margin: '0', color: 'white' }}>Scalingtest2</h2>
      <input type="range" min="50" max="800" value={size} onChange={e => setSize(e.target.value)} />
      <button style={{ background: pageType === 'svg' ? 'dodgerblue' : '#2f3740' }} onClick={e => setPageType('svg')}>SVG</button><button style={{ background: pageType === 'png' ? 'dodgerblue' : '#2f3740' }} onClick={e => setPageType('png')}>PNG</button>
      <button onClick={e => setLight(!light)}>Light {light ? 'OFF' : 'ON'}</button>
    </header>
    <div className="PlayerComponent GraphicsElement" style={{ display: 'flex', flexDirection: 'row', gap: '.5rem', flexWrap: 'wrap', padding: '.5rem', overflow: 'auto' }}>
      {pages}
    </div>
  </div >
}

