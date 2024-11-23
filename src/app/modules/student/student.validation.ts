import Joi from 'joi';

// UserName schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-z]*$/, 'capitalize format')
    .messages({
      'string.empty': 'First Name is required',
      'string.max': 'First Name cannot be more than 20 characters',
      'string.pattern.name': '{#value} is not in capitalize format',
    }),
  middleName: Joi.string().allow(null, '').optional(),
  lastName: Joi.string()
    .required()
    .regex(/^[A-Za-z]+$/, 'alphabetic characters only')
    .messages({
      'string.empty': 'Last Name is required',
      'string.pattern.name': '{#value} is not valid',
    }),
});

// Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': 'Father Name is required',
  }),
  fatherContactNo: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9]\d{8}$/, 'phone number format')
    .required()
    .messages({
      'string.empty': 'Father Contact Number is required',
      'string.pattern.base': '{#value} is not a valid phone number',
    }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': 'Father Occupation is required',
  }),
  motherName: Joi.string().required().messages({
    'string.empty': 'Mother Name is required',
  }),
  motherContactNo: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9]\d{8}$/, 'phone number format')
    .required()
    .messages({
      'string.empty': 'Mother Contact Number is required',
      'string.pattern.base': '{#value} is not a valid phone number',
    }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': 'Mother Occupation is required',
  }),
});

// Local Guardian schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().required().messages({
    'string.empty': 'Local Guardian Occupation is required',
  }),
  contactNo: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9]\d{8}$/, 'phone number format')
    .required()
    .messages({
      'string.empty': 'Local Guardian Contact Number is required',
      'string.pattern.base': '{#value} is not a valid phone number',
    }),
  address: Joi.string().required().messages({
    'string.empty': 'Local Guardian Address is required',
  }),
});

// Student schema
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string().valid('Male', 'Female', 'Other').required().messages({
    'any.only': '{#value} is not a valid gender',
    'string.empty': 'Gender is required',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': '{#value} is not a valid email',
  }),
  dateOfBirth: Joi.date().allow(null).optional(),
  contactNo: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9]\d{8}$/, 'phone number format')
    .required()
    .messages({
      'string.empty': 'Contact Number is required',
      'string.pattern.base': '{#value} is not a valid phone number',
    }),
  emergencyContactNo: Joi.string()
    .pattern(/^(?:\+?88)?01[3-9]\d{8}$/, 'phone number format')
    .required()
    .messages({
      'string.empty': 'Emergency Contact Number is required',
      'string.pattern.base': '{#value} is not a valid phone number',
    }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'any.only': '{#value} is not a valid blood group',
      'string.empty': 'Blood Group is required',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent Address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local Guardian information is required',
  }),
  profileImg: Joi.string().uri().allow(null, '').optional(),
  isActive: Joi.string().valid('active', 'block').default('active').messages({
    'any.only': '{#value} is not a valid status',
  }),
});

export default studentValidationSchema;
