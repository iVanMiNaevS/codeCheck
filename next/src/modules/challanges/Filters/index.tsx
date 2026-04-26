import React from "react";
import styles from "./styles/filters.module.scss";
import { observer } from "mobx-react-lite";
import { Filter } from "@/types/challenges";
import { ChallengesStore } from "@/modules/challanges/challengesStore";

interface filtersProps {
	filters: Filter[];
	store: ChallengesStore;
}

export const Filters = observer((props: filtersProps) => {
	const { filters, store } = props;
	return (
		<div className={styles.filters}>
			{filters.map((filter) => {
				const value =
					store.filters.find((filterFromStore) => filterFromStore.filter === filter.filter)
						?.value || (filter.isMultiply ? [filter.filters[0].slug] : filter.filters[0].slug);

				return (
					<div key={filter.title} className={styles.filter}>
						<p>{filter.title}</p>
						<select
							onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
								const value = filter.isMultiply
									? Array.from(e.target.selectedOptions, (option) => option.value)
									: e.target.value;
								store.setFilters(filter.filter, value, filter.isMultiply);
							}}
							value={value}
							multiple={filter.isMultiply}
							name={filter.title}
						>
							{filter.filters.map((filterOption) => (
								<option value={filterOption.slug} key={filterOption.slug}>
									{filterOption.title}
								</option>
							))}
						</select>
					</div>
				);
			})}
			<button
				className={styles.filter_btn_reset}
				onClick={() => {
					store.resetFilter();
				}}
			>
				Сбросить фильтры
			</button>
			<button
				className={styles.filter_btn}
				onClick={() => {
					store.applyFilter();
				}}
			>
				Найти
			</button>
		</div>
	);
});
