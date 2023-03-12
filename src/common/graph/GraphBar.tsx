import { FC, useEffect, useRef } from "react";
import styles from './GraphBar.module.css'

type GraphBarProps = {
	width: number
	height: number
	isComparing: boolean
}

const GraphBar: FC<GraphBarProps> = ({ width, height, isComparing }) => {
	const barRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const barElement = barRef.current;
		const sortingVisualizer = document.getElementById('sorting-visualizer')

		if (barElement) {
			barElement.style.width = `${width}px`;
			barElement.style.height = `${height}px`;

			if (isComparing) {
				barElement.style.backgroundColor = '#FFC700'
			} else {
				barElement.style.backgroundColor = '##C7B9FF'
			}
		}



	}, [width, height, isComparing]);

	return <div ref={barRef} className={styles.graphBar} />
}

export default GraphBar