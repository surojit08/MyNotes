import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider,Button } from '@mantine/core';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <div className=''>
<Button>Albert Einstein</Button>
      </div>
      </MantineProvider>
  )
}

export default App
