import { useEffect, useState } from "react";

export const useSiblingCount = (initialSiblingCount) => {
  const [siblingCount, setSiblingCount] = useState(
    window.innerWidth <= 500 ?
      initialSiblingCount - 1 :
      initialSiblingCount
  );

  useEffect(() => {
    let mediaWatcher = window.matchMedia(
      `(max-width: 500px)`
    );
    // using deprecated addListener/removeListener for backward compatibility on Safari
    mediaWatcher.addListener(({ matches }) => setSiblingCount(
      matches ?
        initialSiblingCount - 1 :
        initialSiblingCount
    ));

    return () => mediaWatcher.removeListener(setSiblingCount());
  }, [initialSiblingCount]);

  return siblingCount;
};