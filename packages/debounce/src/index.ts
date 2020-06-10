import { useState, useEffect } from 'react'

export default function useDebounce<Value>(value: Value, delay: number): Value {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    if (value === debouncedValue) {
      return undefined
    }

    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timeout)
  }, [delay, debouncedValue, value])

  return debouncedValue
}
