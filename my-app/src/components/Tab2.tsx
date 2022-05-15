import React from "react"
import WithPermission from "./WithPermission"

const Tab2 = () => {
	return (
		<div className="tab2">
			<h2>Page avec permission </h2>
			<WithPermission roleRequired="ADMIN" message="Only Admin can view this">
				<h1>Welcome Admin!</h1>
				<button>Edit</button>
			</WithPermission>
		</div>
	)
}

export default Tab2
