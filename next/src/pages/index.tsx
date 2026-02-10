import { MainLayout } from "@/components/MainLayout";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
export default function Home() {
	return (
		<MainLayout>
			<div className={styles.container}>
				<h2>Начинём?</h2>
				<Link href={"/challenges"}>К программированию</Link>
			</div>
		</MainLayout>
	);
}
