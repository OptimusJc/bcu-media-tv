import { useEffect } from "react";

const Form = ({
	selected,
	setSelected,
	file,
	setFile,
	error,
	setError,
	collection,
	setCollection,
	description,
	setDescription,
}) => {
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

	const collectionHandler = (e) => {
		setCollection(e.target.value);
	};

	const onClickHandler = (e) => {
		e.preventDefault();

		if (selected) {
			setFile(selected);
		} else {
			setFile(null);
		}
	};

	const onDescripitionHandler = (e) => {
		setDescription(e.target.value);
	};

	return (
		<form>
			<h3>Upload Section</h3>

			<div className="file-input">
				<label htmlFor="fileInput" className="label">
					Select File
				</label>

				<input
					className="fileInput"
					type="file"
					id="fileInput"
					onChange={onChangeHandler}
				/>
				<p className="file-name">{selected && selected.name}</p>
			</div>

			<div className="collection_select">
				<label htmlFor="collection_select">Choose a category</label>
				<select
					name="collection"
					id="collection_select"
					onClick={collectionHandler}
				>
					<option value="" defaultValue>
						Select category
					</option>
					<option value="holySpirit">Holy Spirit</option>
					<option value="salvation">Salvation</option>
					<option value="faith">Faith</option>
					<option value="deliverance">Deliverance</option>
					<option value="soulTies">Soul Ties</option>
				</select>
			</div>

			<textarea
				placeholder="Enter description here"
				onChange={onDescripitionHandler}
			></textarea>

			<input
				type="submit"
				value="upload"
				className="btn btn-primary mt-4"
				onClick={onClickHandler}
			/>
		</form>
	);
};

export default Form;
