import React from "react";
import styles from "./styles/challenges.module.scss";
import { MainContainer } from "@/components/MainContainer";
import { Filters } from "@/components/Challenges/Filters";
import { observer } from "mobx-react-lite";
import { GetStaticProps } from "next";
import { useStore } from "@/stores/context";
const Challenges = observer(() => {
	return (
		<MainContainer>
			<div className={styles.container}>
				<Filters />
				<div className={styles.challenges}></div>
			</div>
		</MainContainer>
	);
});

// export function getStaticProps(): GetStaticProps {

// }

export default Challenges;
