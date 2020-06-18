# @hooks/debounce

Debounces state updates.

```tsx
import React, {useState} from 'react'
import useDebounce from '@hooks/debounce'

export default function MyComponent() {
  const [text, setText] = useState('')
  const debouncedText = useDebounce(text, 500)

  return (
    <input type="text" value={text} onChange={setText}/>
    <p>Debounced text: {debouncedText}</p>
  )
}
```
