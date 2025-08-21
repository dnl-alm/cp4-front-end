import { ExerciseList } from "./components/ExerciseList"
import { MotivationalMessage } from "./components/motivational-message"
import { Welcome } from "./components/welcome"



function App() {
  return (
    <>
      <main>
        <Welcome />
        <ExerciseList />
        <MotivationalMessage 
        message="'Se você quer realmente se tornar forte, pare de se preocupar com o que os outros pensam sobre você. Viver sua vida não tem nada a ver com que os outros pensam.'"
        author="Saitama"
        />
      </main>
    </>
  )
}

export default App
