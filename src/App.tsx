import SortingVisualizer from "./sorting-algorithms/sorting-visualizer/SortingVisualizer"
import styling from './App.module.css'

function App() {
  return (
    <div className={styling.sortingApp}>
      <div className={styling.filterBar}></div>
      <SortingVisualizer />
    </div>
  )
}

export default App
