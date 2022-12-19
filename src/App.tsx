import './App.css'
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"


function App() {
 

  return (
    <>
      <AppHeader title='React' year={2022}/>
      <AppHeader title='Typescript'/>
      <h2>Hello React Typescript</h2>
      <AppFooter />
    </>
  )
}

export default App
