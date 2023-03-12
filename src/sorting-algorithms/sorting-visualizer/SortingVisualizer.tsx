import { useState } from "react"
import GraphBar from "../../common/graph/GraphBar"
import styles from "./SortingVisualizer.module.scss"
import InfoPannel from "./InfoPanel"


const SortingVisualizer = () => {
	const [height, setHeight] = useState(300)
	const [width, setWidth] = useState(50)
	const numArray = [10, 20, 40, 100, 60, 33, 54, 33, 88, 11, 6, 32, 78, 11, 10, 20, 40, 100, 60, 33, 54, 33, 88, 11, 6, 32, 78, 11, 10, 20, 40, 100, 60, 33, 54, 33, 88, 11, 6, 32, 78, 11]

	return (
		<div className={styles.sortingVisualizer} id="sorting-visualizer">
			<InfoPannel amountOfComparisons={30} amountOfSwaps={20} />
			<div className={styles.graphContainer}>
				{height && numArray.map((num) => <GraphBar height={num * 3} width={width} isComparing={false} />)}
			</div>
		</div>

	)
}

export default SortingVisualizer 