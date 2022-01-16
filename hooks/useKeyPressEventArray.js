import { useKeyPressEvent as keyPressEvent } from 'react-use';

/**
 * useKeyPressEvent hook but accepts an array of keys
 */
const useKeyPressEventArray = (array, fn) => {
  array.forEach(key => {
    keyPressEvent(key, fn);
  });
}

export default useKeyPressEventArray