import './App.css'
import Dashboard from './Pages/Dashboard';
import { Layout } from './Components/Layout';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './Components/NotFound';



function App() {

  return (
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>     
  )
}

export default App
