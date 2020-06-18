import { useState, useCallback } from 'react'

export default function useToggle(
  initialState: boolean = false
): [boolean, () => void] {
  const [state, setState] = useState(initialState)
  const toggle = useCallback(() => setState(!state), [state, setState])
  return [state, toggle]
}
