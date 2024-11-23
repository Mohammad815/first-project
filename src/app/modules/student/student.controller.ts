import { Request, Response } from 'express';
import { StudentService } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    // Validate the student using Joi schema
    const { error, value } = studentValidationSchema.validate(student);
    if (error) {
      // Return the response immediately to prevent further execution
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.details, // Provide detailed validation errors
      });
    }

    // Proceed to create the student if validation passes
    const result = await StudentService.createStudentIntoDB(value);

    // Send response for successful creation
    res.status(201).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    // Handle unexpected errors
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getAllstudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'student is created succesfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studenId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(studenId);
    res.status(200).json({
      success: true,
      message: 'student is retrieve succesfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};
export const StudentControllers = {
  createStudent,
  getAllstudents,
  getSingleStudent,
};
