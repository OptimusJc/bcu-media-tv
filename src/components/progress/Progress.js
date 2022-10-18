import useStorage from "../../hooks/useStorage";
import { useEffect } from "react";
// import styles from "./progress.module.css";

const Progress = ({ files, setFiles }) => {
	const { url, progress } = useStorage(files);

	useEffect(() => {
		if (url) {
			setFiles(null);
		}
	}, [url, setFiles]);

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
