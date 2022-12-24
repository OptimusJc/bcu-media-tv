import { useState } from "react";
import Progress from "../progress/Progress";
import Form from "./form/Form";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [description, setDescription] = useState("");
	const [selected, setSelected] = useState(null);
	const [collection, setCollection] = useState("");

	return (
		<div className="container">
			<div className="row">
				<div className="col" style={{ height: "500px", marginTop: "2rem" }}>
					<Form
						setSelected={setSelected}
						setError={setError}
						setCollection={setCollection}
						setFile={setFile}
						setDescription={setDescription}
						selected={selected}
					/>

					{/* *output feedback */}
					<div className="output">
						{error && <div className="error">{error}</div>}

						{file && (
							<Progress
								file={file}
								setFile={setFile}
								description={description}
								collectionName={collection}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadForm;
