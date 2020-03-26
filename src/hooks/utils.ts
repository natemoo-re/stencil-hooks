import { getRenderingRef } from "@stencil/core";

export const getRef = () => {
    const ref = getRenderingRef();
    if (!ref.$$hooks) {
        ref.$$hooks = {
          i: 0,
          args: [],
          $: null,
          stack: [],
          length: 0
        };
    }
    return ref;
}