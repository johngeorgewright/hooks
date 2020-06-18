import { useState } from 'react'

export default function useToggle(
  initialState: boolean = false
): [boolean, () => void] {
  const [state, setState] = useState(initialState)
  return [state, () => setState(!state)]
}
