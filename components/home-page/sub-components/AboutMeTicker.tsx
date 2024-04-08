// Node Modules
import { useCallback, useMemo, useState, useRef } from "react";

// Types
type Props = { tickerItemsArray: Array<string>};
type TickerItem = { key: string };

const AboutMeTicker: React.FC<Props> = ({ tickerItemsArray }) => {
  const tickerItems = useMemo(() => {
    // turning array of strings into array of objects in the shape of { key: "some text" }
    return tickerItemsArray.map(key => ({ key }));
  }, [tickerItemsArray]);
  const [items, setItems] = useState<Array<TickerItem>>(tickerItems);
  // TODO: figure out the type to assign these refs. useRef<(() => HTMLDivElement) | null)> still threw errors but its a starting point
  const wrapperRef = useRef<any>(null);
  const indexRef = useRef<any>(null);
  
  const handleRefUpdate = useCallback((node: any) => {
    if (node !== null && items.length > 0) {
      indexRef.current = node.firstChild;
      wrapperRef.current = node;
      document.documentElement.style.setProperty("--animationDistance", `${0 - indexRef.current?.offsetWidth}px`);
      document.documentElement.style.setProperty("--animationDuration", `${Math.round(indexRef.current?.offsetWidth / 100)}s`);
      wrapperRef.current?.classList.add("moving");
    }
  }, [items]);
  
  const handleLoop = (): void => {
    wrapperRef.current?.classList.remove("moving");
    wrapperRef.current.style.animation = "none";
    const t = wrapperRef.current.offsetHeight; /* trigger reflow */
    wrapperRef.current.style.animation = null;
    shiftNext([...items]);
  };

  const shiftNext = (copy: Array<TickerItem>): void => {
    const firstitem = copy.shift();
    // @ts-ignore
    copy.splice(copy.length, 0, firstitem);		
    setItems(copy);
  };
  
  const handleAnimationEnd = () => {
    handleLoop();
  };

  return (
    <div className="news-ticker relative flex overflow-hidden">
      <span className="ticker-start-gradient"></span>
      <div className="news-ticker-inner" ref={handleRefUpdate} onAnimationEnd={handleAnimationEnd}>
        {items.map((obj: TickerItem, index: number) => (
          <p
            className="ticker-text text-2xl text-nowrap"
            key={obj.key+index}
          >
            {obj.key}
          </p>
        )
        )} 
      </div>
      <span className="ticker-end-gradient"></span>
    </div>
  );
};

export default AboutMeTicker;