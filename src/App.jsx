import { Route, Routes } from 'react-router-dom'
import Cursor from './components/Cursor/Cursor'
import Home from './pages/Home/Home'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'

function App() {
  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
