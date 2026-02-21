import React from "react";
import styles from "./styles/filters.module.scss";
import { observer } from "mobx-react-lite";
import { Filter } from "@/types/challenges";

interface filtersProps {
	filters: Filter[];
}

export const Filters = observer((props: filtersProps) => {
	const { filters } = props;
	return (
		<div className={styles.filters}>
			{filters.map((filter) => (
				<div className={styles.filter}>
					<p>{filter.title}</p>
					<select multiple={filter.isMultiply} name={filter.title}>
						{filter.filters.map((filterOption) => (
							<option value={filterOption.slug}>{filterOption.title}</option>
						))}
					</select>
				</div>
			))}
		</div>
	);
});
