import { useState } from "react";
import Progress from "../progress/Progress";
import Form from "./form/Form";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [selected, setSelected] = useState(null);
	const [description, setDescription] = useState("");
	const [collection, setCollection] = useState("");

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Form
						selected={selected}
						setSelected={setSelected}
						error={error}
						setError={setError}
						collection={collection}
						setCollection={setCollection}
						file={file}
						setFile={setFile}
						description={description}
						setDescription={setDescription}
					/>

					{/* *output feedback */}
					<div className="output">
						{error && <div className="error">{error}</div>}

						{file && (
							<Progress
								file={file}
								setFile={setFile}
								description={description}
								setDescription={setDescription}
								collectionName={collection}
								setCollection={setCollection}
								selected={selected}
								setSelected={setSelected}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadForm;
