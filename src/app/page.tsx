import Image from "next/image";
import createStudent from "../../actions/createStudent";
import { getStudents } from "../../mongodb/models/Student";

export default async function Home() {
	const students = await getStudents();

	console.log(students);

	return (
		<main className="min-h-screen p-24 bg-black">
			<h1 className="text-white">Hello Students</h1>
			<form action={createStudent} className="flex flex-col space-y-4 mb-4">
				<input type="text" name="name" placeholder="Name" />
				<input type="number" name="age" placeholder="Age" />
				<input type="email" name="email" placeholder="Email" />
				<button className="text-white">Add Student</button>
			</form>
			<div className="grid grid-cols-3 gap-4">
				{students.map((student) => (
					<div key={student._id} className="bg-white p-5 rounded-lg">
						<h2>{student.name}</h2>
						<p>{student.age}</p>
						<p>{student.email}</p>
					</div>
				))}
			</div>
		</main>
	);
}
