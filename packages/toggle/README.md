# @hooks/toggle

A simple boolean state toggler.

```tsx
import React from 'react'
import useToggle from '@hooks/toggle'

export default function MyComponent() {
  const [hasIt, toggleIt] = useToggle()

  return (
    <>
      <input type="checkbox" checked={hasIt} onChange={toggleIt} />
      <p>{hasIt ? 'Has It' : "Doesn't have it"}</p>
    </>
  )
}
```
