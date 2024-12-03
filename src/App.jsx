import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

function CollapsibleTreeContent({ width, height }) {
  return <div></div>;
}

function CollapsibleTree() {
  const wrapperRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setSize({
        width: wrapperRef.current.clientWidth,
        height: wrapperRef.current.clientHeight,
      });
    });
    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="collapsible-tree-wrapper">
      {data && (
        <CollapsibleTreeContent width={size.width} height={size.height} />
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <CollapsibleTree />
    </div>
  );
}

export default App;
