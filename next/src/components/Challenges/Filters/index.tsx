import React from "react";
import styles from "./styles/filters.module.scss";
import { observer } from "mobx-react-lite";
export const Filters = observer(() => {
	return <div className={styles.filters}></div>;
});
