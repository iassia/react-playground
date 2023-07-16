import CreditCard from './components/credit-card/CreditCard.tsx'
import { useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <CreditCard front={toggle} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default App
