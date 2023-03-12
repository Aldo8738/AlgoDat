import { FC } from "react"
import styles from './SortingVisualizer.module.scss'

type InfoPannelProps = {
	amountOfComparisons: number
	amountOfSwaps: number
}

const InfoPannel: FC<InfoPannelProps> = ({ amountOfComparisons, amountOfSwaps }) => {
	return (
		<div className={styles.infoPannel}>
			<p><b>{amountOfComparisons}</b> Comparisons</p>
			<p><b>{amountOfSwaps}</b> Swaps</p>
		</div>
	)
}

export default InfoPannel