import { useEffect, useState } from 'react';
import styles from './styles/_skeleton_loader.module.scss'

export const SkeletonLoader = () => {
	const [showSkeleton, setShowSkeleton] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSkeleton(true);
		}, 200);

		return () => clearTimeout(timer);
	}, []);

	return showSkeleton && (
		<div className={styles.chell}>
			<h2></h2>
			<p></p>
			<div className={styles.chell_bottom}>
				<div className={styles.chell_left}>
					<div className={`${styles.chell_option} ${styles.chell_mode}`}></div>
					<div className={styles.chell_option}></div>
					<div className={styles.chell_option}></div>
				</div>
				<div className={styles.chell_right}>
					<div className={styles.img}></div>
				</div>
			</div>
		</div>
	);
};
