import React, { Component } from 'react';


function Sidebar(props) {
	return (
		// <div className="">
		// 	<div id="mySidenav" className="sidenav" style={{width:`${this.state.width}px`}}>
		// 		<a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
		// 		<a href="#">About</a>
		// 		<a href="#">Services</a>
		// 		<a href="#">Clients</a>
		// 		<a href="#">Contact</a>
		// 	</div>
		// 	<span className="openNav" style={{fontSize:30}} onClick={this.openNav}><i className="fa fa-navicon"></i> </span>
		// </div>

		<div id="sidebar-container">
			<div id="sidebar-wrapper">
				<ul id="sidebar-nav">
					<li><i className="fa fa-book" aria-hidden="true" /><span className="sidebar-title">Lessons</span><i className="fa fa-chevron-right" /></li>
					<li><i className="fa fa-object-group" aria-hidden="true" /><span className="sidebar-title">Dashboard</span></li>
					<li><i className="fa fa-calendar-check-o" aria-hidden="true" /><span className="sidebar-title">Calender</span></li>
					<li><span className="sidebar-title">Forms</span></li>
				</ul>
			</div>
		</div>
		// <div id="wrapper">
		// 	<div id="sidebar-wrapper">
		// 		<aside id="sidebar">
		// 			<ul id="sidemenu" className="sidebar-nav">
		// 				<li>
		// 					<a href="#">
		// 						<span className="sidebar-icon"><i className="fa fa-dashboard"></i></span>
		// 						<span className="sidebar-title">Home</span>
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-2">
		// 						<span className="sidebar-icon"><i className="fa fa-users"></i></span>
		// 						<span className="sidebar-title">Management</span>
		// 						<b className="caret"></b>
		// 					</a>
		// 					<ul id="submenu-2" className="panel-collapse collapse panel-switch" role="menu">
		// 						<li><a href="#"><i className="fa fa-caret-right"></i>Users</a></li>
		// 						<li><a href="#"><i className="fa fa-caret-right"></i>Roles</a></li>
		// 					</ul>
		// 				</li>
		// 				<li>
		// 					<a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-3">
		// 						<span className="sidebar-icon"><i className="fa fa-newspaper-o"></i></span>
		// 						<span className="sidebar-title">Blog</span>
		// 						<b className="caret"></b>
		// 					</a>
		// 					<ul id="submenu-3" className="panel-collapse collapse panel-switch" role="menu">
		// 						<li><a href="#"><i className="fa fa-caret-right"></i>Posts</a></li>
		// 						<li><a href="#"><i className="fa fa-caret-right"></i>Comments</a></li>
		// 					</ul>
		// 				</li>
		// 				<li>
		// 					<a href="#">
		// 						<span className="sidebar-icon"><i className="fa fa-database"></i></span>
		// 						<span className="sidebar-title">Data</span>
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a href="#">
		// 						<span className="sidebar-icon"><i className="fa fa-terminal"></i></span>
		// 						<span className="sidebar-title">Console</span>
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</aside>
		// 	</div>
		// 	<main id="page-content-wrapper" role="main">
		// 	</main>
		// </div>



	)

}

export default Sidebar;