import './App.css'
import { Autocomplete, TextField } from '@mui/material'
import { red } from '@mui/material/colors';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { top100Films} from './data/filmsData.ts'
import { useState } from 'react'
import type { Film } from './types/Film.interface.ts'
import ExampleTable from './components/ExampleTable.tsx'


function App() {
  const [selectedFilm, setSelectedFilm] = useState<Film>({
    label: '',
    year: 0
  });

  const handleChange = (e, value: Film) => {
    console.log(value);
    setSelectedFilm(value);
  }

  return (
    <>
      <div>
        { selectedFilm.label && <span>Movie: {selectedFilm.label}, Year: {selectedFilm.year}</span>}
      </div>
      <AccessAlarmIcon sx={{ fontSize: 80, color: red[900] }}  />
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        onChange={handleChange}
      />

      <ExampleTable />

    </>
  )
}

export default App
