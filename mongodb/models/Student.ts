import mongoose, { Schema, Document, models } from "mongoose";
import connectDB from "../db";

interface Student extends Document {
	name: string;
	age: number;
	email: string;
}

const studentSchema = new Schema({
	name: String,
	age: Number,
	email: String,
});

//create a student model
const StudentModel = models.Student || mongoose.model<Student>("Student", studentSchema);

//Function add a student to the database
export const addStudent = async (name: string, age: number, email: string) => {
	connectDB();
	try {
		const student = new StudentModel({ name, age, email });
		const savedStudent = await student.save();
		return savedStudent;
	} catch (error) {
		throw new Error(`Error adding student: ${error}`);
	}
};

// Function get all students from the database
export const getStudents = async () => {
	connectDB();
	try {
		const students = await StudentModel.find();
		return students;
	} catch (error) {
		throw new Error(`Error getting students: ${error}`);
	}
};

// Function to delete a student from the database
export async function deleteStudent(email: string): Promise<void> {
	connectDB();
	try {
		const student = await StudentModel.findOne({ email });
		if (!student) {
			throw new Error("Student not found");
		}

		await student.remove();
	} catch (error) {
		throw new Error(`Error deleting student: ${error}`);
	}
}
