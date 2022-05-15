import React from "react"
import {Outlet} from "react-router-dom"
import TavNav from "./TabNav"

const Tabs = (props: any) => {
	
	return (
		<div className="tabs">
			<TavNav />
			<Outlet />
		</div>
	)
}

export default Tabs
