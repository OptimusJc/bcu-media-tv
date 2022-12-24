import useStorage from "../../hooks/useStorage";
import { useEffect } from "react";
// import styles from "./progress.module.css";

const Progress = ({ file, setFile, description, collectionName }) => {
	const { url, progress } = useStorage(file, description, collectionName);

	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);

	return (
		<div className="progress">
			<div
				className="progress-bar"
				role="progressbar"
				style={{ width: progress + "%" }}
				aria-valuenow={progress}
				aria-valuemin="0"
				aria-valuemax="100"
			>
				{progress + "%"}
			</div>
		</div>
	);
};

export default Progress;
