import React from "react";

export const Register = () => {
	return (
		<div className=" container d-flex flex-column justify-content-end">
			<div className="row d-flex justify-content-center">
				<div className="col-10 col-lg-4 register border rounded ">
					<form action="" method="put">
						<div className="row title d-flex justify-content-center py-3">
							<h3>
								<strong>Registration</strong>
							</h3>
						</div>

						<div className="row mx-1">
							<label>Full name:</label>
						</div>
						<div className="row mx-1">
							<input type="text" className="form-control" />
						</div>

						<div className="row mx-1 pt-3">
							<label>Username:</label>
						</div>
						<div className="row mx-1">
							<input type="text" className="form-control" />
						</div>

						<div className="row mx-1 pt-3">
							<label>Password:</label>
						</div>
						<div className="row mx-1">
							<input type="password" className="form-control" />
						</div>

						<div className="row d-flex justify-content-between pt-3">
							<div className="col ml-2">
								<label>Country:</label>
							</div>
							<div className="col">
								<label>City:</label>
							</div>
						</div>
						<div className="row d-flex justify-content-between">
							<div className="col ml-1">
								<input type="text" className="form-control" />
							</div>
							<div className="col mr-1">
								<input type="text" className="form-control" />
							</div>
						</div>

						<div className="row mx-1 pb-4">
							<button className="btn btn-block mt-3">SUBMIT</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
