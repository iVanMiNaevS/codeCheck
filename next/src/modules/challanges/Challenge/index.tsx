import React from "react";
import styles from "./styles/_challenge.module.scss";
import { ChallengeType } from "@/types/challenges";

interface challengeProps {
	challenge: ChallengeType;
}

export const Challenge = (props: challengeProps) => {
	const { challenge } = props;

	return (
		<div className={styles.chell}>
			<h2>{challenge.title}</h2>
			<p>{challenge.description}</p>
			<div className={styles.chell_bottom}>
				<div className={styles.chell_left}>
					<div className={`${styles.chell_option} ${styles.chell_mode}`}>
						{challenge.mode.title}
					</div>
					{challenge.tags.map((tag) => (
						<div key={tag.id} className={styles.chell_option}>
							{tag.title}
						</div>
					))}
				</div>
				<div className={styles.chell_right}>
					{challenge.languages.map((lang) => (
						<img key={lang.id} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${lang.icon.url}`} />
					))}
				</div>
			</div>
		</div>
	);
};
