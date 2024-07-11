"use server";
import { addStudent } from "../mongodb/models/Student";

async function createStudent(formData: FormData) {
	const name = formData.get("name") as string;
	const age = Number(formData.get("age"));
	const email = formData.get("email") as string;

	console.log({ name, age, email });

	const newStudent = await addStudent(name, age, email);

	return JSON.stringify(newStudent);
}

export default createStudent;
