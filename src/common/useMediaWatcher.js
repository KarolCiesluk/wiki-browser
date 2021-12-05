import { useEffect, useState } from "react";

const useMediaWatcher = ({ maxWidth }) => {
  const [isConditionFulfilled, setIsConditionFulfilled] = useState(
    window.innerWidth <= maxWidth ?
      true :
      false
  );

  useEffect(() => {
    const mediaWatcher = window.matchMedia(
      `(max-width: ${maxWidth}px)`
    );
    // using deprecated addListener/removeListener for backward compatibility on Safari
    mediaWatcher.addListener(({ matches }) => setIsConditionFulfilled(
      matches ?
        true :
        false
    ));

    return () => mediaWatcher.removeListener(setIsConditionFulfilled());
  }, [maxWidth]);

  return isConditionFulfilled;
};

export default useMediaWatcher;