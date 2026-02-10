import React from "react";
import styles from "./styles/challenges.module.scss";
import { MainContainer } from "@/components/MainContainer";
import { Filters } from "@/components/Challenges/Filters";
const Challenges = () => {
	return (
		<MainContainer>
			<div className={styles.container}>
				<Filters />
				<div className={styles.challenges}></div>
			</div>
		</MainContainer>
	);
};

export default Challenges;
