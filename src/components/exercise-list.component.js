import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
	<tr>
		<td>{props.exercise.username}</td>
		<td>{props.exercise.description}</td>
		<td>{props.exercise.duration}</td>
		<td>{props.exercise.date.substring(0, 10)}</td>
		<td>
			<Link to={"/edit/" + props.exercise._id}>edit</Link> |
			{/* <button onClick={props.deleteExercise(props.exercise._id)}>delete</button> */}
		</td>
	</tr>
);
export default class ExerciseList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			exercise: []
		};
		// this.deleteExercise = this.deleteExercise.bind(this);
		this.exerciseList = this.exerciseList.bind(this);
	}
	componentDidMount() {
		axios
			.get("http://localhost:5000/exercise/")
			.then((response) => {
				this.setState({
					exercise: response.data
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}
	// deleteExercise(id) {
	// 	axios
	// 		.delete("http://localhost:5000/exercise/" + id)
	// 		.then((res) => console.log(res.data));
	// 	this.setState({
	// 		exercise: this.state.exercise.filter((el) => el._id !== id)
	// 	});
	// }
	exerciseList() {
		return this.state.exercise.map((currentExercise) => {
			return (
				<Exercise
					exercise={currentExercise}
					deleteExercise={this.deleteExercise}
					key={currentExercise._id}
				/>
			);
		});
	}
	render() {
		return (
			<div>
				<h3>Logged Exercise</h3>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>username</th>
							<th>description</th>
							<th>duration</th>
							<th>date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{this.exerciseList()}</tbody>
				</table>
			</div>
		);
	}
}
