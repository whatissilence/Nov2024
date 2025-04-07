import { useState } from 'react'

export function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (event) => { setValue(event.target.value) },
  }
}