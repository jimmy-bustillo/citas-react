import Formulario from './components/Formulario'
import Hedaer from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
 
  return (
    <div className='container mx-auto mt-20'>
      <Hedaer/>
      <Formulario/>
      <ListadoPacientes/>
    </div>
  )
}

export default App
