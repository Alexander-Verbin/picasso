import React from "react";
import { ReactComponent as Spinner } from "../../img/Preloader.svg";
import styles from "./styles.module.scss";

export const Preloader: React.FC = () => {
	return (
		<div className={styles.preloader}>
			<Spinner className={styles.preloader__spinner} />
		</div>
	);
};
