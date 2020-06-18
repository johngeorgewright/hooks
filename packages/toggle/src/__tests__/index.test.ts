import { renderHook, act } from '@testing-library/react-hooks'
import useToggle from '..'

test('toggles states', () => {
  const { result } = renderHook(() => useToggle())

  expect(result.current[0]).toBe(false)

  act(() => {
    result.current[1]()
  })

  expect(result.current[0]).toBe(true)
})

test('initial state', () => {
  const { result } = renderHook(() => useToggle(true))

  expect(result.current[0]).toBe(true)

  act(() => {
    result.current[1]()
  })

  expect(result.current[0]).toBe(false)
})
