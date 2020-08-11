import { useState, useEffect } from 'react';

const getScroll = () => {
    if (window.scrollY < 100) {
        return false
      } else if (window.scrollY > 100) {
        return true
      }
}
  export const useScrollHeight = () => {
  // save current window width in the state object
  const [scroll, setScroll] = useState();

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const scrollListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setScroll(getScroll()), 50);
    };
    // set resize listener
    window.addEventListener('scroll',scrollListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])
  return scroll;
}