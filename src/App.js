import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<br />
				<Route path="/" exact component={ExerciseList} />
				<Route path="/edit/:id" exact component={EditExercise} />
				<Route path="/create" exact component={CreateExercise} />
				<Route path="/User" exact component={CreateUser} />
			</div>
		</Router>
	);
}

export default App;
