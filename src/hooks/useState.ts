import { forceUpdate } from "@stencil/core";
import { getRef } from './utils';

export const useState = <T>(value: T): [T, (value: T) => void] => {
    const ref = getRef();
    const i = ref.$$hooks.i++;
    const { args = [], stack = [], length = 0 } = ref.$$hooks;
    if (i === length) {
        (ref.$$hooks ?? {}).length = stack.push({
          $: typeof value === "function" ? value() : value,
          _: (ctx, args) => {
            ref.$$hooks = {
                i,
                ctx,
                args,
                stack,
                length
            }
            forceUpdate(ref)
          }
        });
    }
    const update = stack[i];

    return [update.$ as T, (value: T) => {
        const $value = typeof value === "function" ? value(update.$) : value;
        if (update.$ !== $value) {
            update.$ = $value;
            update._(null, args);
        }
    }];
}