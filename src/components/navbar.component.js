import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to="/" className="navbar-brand">
					ExerciseTracker
				</Link>
				<div className="collpase navbar-collpase">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to="/" className="nav-link">
								Exercise
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link">
								CreateUserLog
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/user" className="nav-link">
								CreateUser
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
