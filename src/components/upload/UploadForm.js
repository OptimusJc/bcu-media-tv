import { useState } from "react";
import Progress from "../progress/Progress";
import UploadInput from "./UploadInput/UploadInput.jsx";

const UploadForm = () => {
	const [files, setFiles] = useState(null);
	const [error, setError] = useState(null);

	// *Start
	const onChangeHandler = (e) => {
		// * Get the files array
		const selected = [...e.target.files];

		// * file types
		const types = [
			"audio/mpeg",
			"audio/mp3",
			"video/mp4",
			"video/mpeg",
			"video/mkv",
		];
		// const types = ["application/pdf", "application/epub+zip"];

		if (selected) {
			selected.map((selectedFile) => {
				types.includes(selectedFile.type);

				setError("");
				return setFiles(selected);
			});
		} else {
			setFiles(null);
			setError("Please select an audio or video file");
			// setError("Please select a pdf or epub file");
		}
	};
	// * [end]

	return (
		<div className="container">
			<div className="row">
				<div className="col" style={{ height: "500px", marginTop: "2rem" }}>
					<form>
						<h3>Upload Section</h3>
						<p className="lead">Choose a collection to upload to</p>

						<div className="mb-3">
							<input
								className="form-check-input"
								type="radio"
								name="flexRadioDefault"
								id="ebookCollection"
								value="ebooks"
							/>
							<label className="form-check-label" htmlFor="ebookCollection">
								Ebooks
							</label>
						</div>
						<div className="mb-3">
							<input
								className="form-check-input"
								type="radio"
								name="flexRadioDefault"
								id="podcastCollection"
								value="podcasts"
							/>
							<label className="form-check-label" htmlFor="podcastCollection">
								Podcasts
							</label>
						</div>

						<UploadInput onChange={onChangeHandler} />

						{/* *output feedback */}
						<div className="output">
							{error && <div className="error">{error}</div>}
							{files && (
								<div>
									{files.map((file, index) => {
										return <p key={index}>{file.name}</p>;
									})}
								</div>
							)}

							{files && <Progress files={files} setFiles={setFiles} />}
						</div>
						<input
							type="submit"
							value="upload"
							className="btn btn-primary mt-4"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UploadForm;
