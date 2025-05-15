import { useState } from 'react'

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => setValue(e.target.value);
  const clean = () => {setValue('')}

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clean,
  }
}