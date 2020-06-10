import { act, renderHook } from '@testing-library/react-hooks'
import useDebounce from '..'

jest.useFakeTimers()

test('values are debounced', () => {
  let value = 1

  const { result, rerender } = renderHook(() => useDebounce(value, 10))

  value = 2
  rerender()

  expect(result.current).toBe(1)

  act(() => {
    jest.runAllTimers()
  })

  expect(result.current).toBe(2)
})
