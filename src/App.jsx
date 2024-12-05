import Navbar from "./components/Navbar"
import CharacterList from "./components/CharacterList"
import Entities from "./components/Entities"
import Game from "./components/Game"


function App() {
  return (
   
    <div className="font-serif">
      <Navbar />
      <CharacterList />
      <Entities />
      <Game />
    </div>
  )
}


export default App