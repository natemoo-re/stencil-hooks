import { getRef } from './utils';

export const useRef = value => {
  const ref = getRef();
  const i = ref.$$hooks.i++;
  const { stack, length } = ref.$$hooks;
  if (i === length) ref.$$hooks.length = stack.push({ current: value });
  return stack[i];
};

