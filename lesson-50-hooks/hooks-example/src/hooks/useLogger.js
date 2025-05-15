import { useEffect } from 'react'

export function useLogger(value) {
  useEffect(() => {
    console.log('Changed', value);
  }, [value])
}