import React from "react";
import styles from "./styles/main_container.module.scss";

interface MainContainerProps {
	children: React.ReactElement;
}

export const MainContainer = ({ children }: MainContainerProps) => {
	return <div className={styles.container}>{children}</div>;
};
