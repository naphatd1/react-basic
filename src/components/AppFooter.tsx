import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
type User = {
  fullname: string
}

const AppFooter = () => {
  // let company = 'typescript'
  const isShow = false
  const [number, setNumber] = useState(0)
  const [showMsg, setShowMsg] = useState('React')
  // const [user, setUser] = useState<User>({ fullname: 'John' })
  const [user, setUser] = useState<User | null>(null)
  const company = () => {
    setShowMsg('Typescript')
    setUser({fullname: 'Naphat'})
  }
  return (
    <>
      {user && <p>User: {user.fullname}</p>}
      
      <p>created by {showMsg}</p>
      <Button colorScheme='teal' size='md' onClick={company}>Clickme</Button>
      <p>{new Date().getFullYear()} &#169;</p>
      {isShow && <p>Hello React 18</p>}
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Count</button>
      <button onClick={() => setNumber(0)}>Count</button>
      <button onClick={() => setNumber(number - 1)}>- Count</button>
    </>
  )
}

export default AppFooter
