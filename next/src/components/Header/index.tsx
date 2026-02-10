import Link from "next/link";
import styles from "./styles/header.module.scss";
import { MainContainer } from "../MainContainer";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<div className={styles.logo}>CODECHEK</div>
				<nav className={styles.nav}>
					<Link href={"/challenges"}>Задания</Link>
					<Link href={"/olimp"}>Олимп</Link>
				</nav>
			</div>
			<button className={styles.button}>Войти</button>
		</header>
	);
};
