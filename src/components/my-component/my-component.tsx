import { Component, h, Host } from '@stencil/core';
import { useState } from "../../hooks";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  render() {
    const [count, setCount] = useState(0);
    return (
      <Host>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </Host>
    );
  }
}
