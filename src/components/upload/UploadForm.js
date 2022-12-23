import { useState } from "react";
import Progress from "../progress/Progress";
import UploadInput from "./UploadInput/UploadInput.jsx";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [description, setDescription] = useState("");
	const [selected, setSelected] = useState(null);

	const onChangeHandler = (e) => {
		const types = [
			"audio/mpeg",
			"audio/mp3",
			"video/mp4",
			"video/mpeg",
			"video/mkv",
		];

		if (e.target.files && types.includes(e.target.files[0].type)) {
			setSelected(e.target.files[0]);
			setError("");
		} else {
			setError("Select a video file");
		}
	};

	const onClickHandler = (e) => {
		e.preventDefault();

		if (selected) {
			setFile(selected);
		} else {
			setFile(null);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col" style={{ height: "500px", marginTop: "2rem" }}>
					<form>
						<h3>Upload Section</h3>

						<UploadInput onChange={onChangeHandler} />
						<textarea
							placeholder="Enter description here"
							onChange={(e) => setDescription(e.target.value)}
						></textarea>

						<input
							type="submit"
							value="upload"
							className="btn btn-primary mt-4"
							onClick={onClickHandler}
						/>
					</form>

					{/* *output feedback */}
					<div className="output">
						{error && <div className="error">{error}</div>}

						{file && (
							<Progress
								file={file}
								setFile={setFile}
								description={description}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadForm;
