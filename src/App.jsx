import WebViewer from '@pdftron/webviewer';
import pdf from './assets/images/mypdf.pdf'
import { useEffect, useRef } from 'react';

function App() {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: pdf,
      },
      viewer.current,
    )
  }, []);

  return (
    <div className="w-full" ref={viewer} style={{ height: "100vh" }}></div>
  )
}

export default App