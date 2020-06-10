import { useState, useEffect, useCallback } from 'react'

export default function useDebounce<Value>(value: Value, delay: number): Value {
  const [debouncedValue, setDebouncedValue] = useState(value)

  const onTimeout = useCallback(() => {
    setDebouncedValue(value)
  }, [value])

  useEffect(() => {
    if (value === debouncedValue) {
      return undefined
    }

    const timeout = setTimeout(onTimeout, delay)

    return () => clearTimeout(timeout)
  }, [delay, debouncedValue, onTimeout, value])

  return debouncedValue
}
