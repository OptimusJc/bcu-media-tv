const UploadInput = ({ onChange }) => {
	return (
		<>
			<div className="mt-4" style={{ width: "400px" }}>
				<label htmlFor="fileInput" className="form-label">
					Choose file to upload
				</label>

				<input
					className="form-control"
					type="file"
					id="fileInput"
					onChange={onChange}
					multiple
				/>
			</div>
		</>
	);
};

export default UploadInput;
