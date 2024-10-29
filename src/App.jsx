import './AppP.css'
import Home from './components/home'
import LeftSideBar from './components/leftSideBar'
import MainContent from './components/mainContent'
import RightSideBar from './components/rightSideBar'

function App() {
  return (
    <div className="allBlocks">
      <LeftSideBar />
      <Home />
      <RightSideBar />
    </div>
  )
}

export default App