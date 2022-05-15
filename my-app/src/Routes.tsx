import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"

import InnerContent from "./components/InnerContent"
import Dashboard from "./components/Dashboard"
import Tabs from "./components/Tabs"
import Login from "./components/Login"

import Tab1 from "./components/Tab1"
import Tab2 from "./components/Tab2"

import PublicRoutes from "./components/PublicRoutes"
import PermissionDenied from "./components/PermissionDenied"

const MainRoutes = () => (
	<Routes>
		{/** Protected Routes */}
			<Route path="/" element={<InnerContent />}>
				<Route path="/" element={<Navigate replace to="dashboard" />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="tabs"  element={<Tabs props={{userName: "admin"}} />}>
					<Route path="/tabs" element={<Navigate replace to="tab1" />} />
					<Route path="tab1" element={<Tab1 />} />
						<Route path="/tabs/tab2" element={<Tab2 />} />
				</Route>

			</Route>

		<Route path="login" element={<PublicRoutes />}>
			<Route path="/login" element={<Login />} />
		</Route>

		<Route path="/denied" element={<PermissionDenied />} />
	</Routes>
)

export default MainRoutes
