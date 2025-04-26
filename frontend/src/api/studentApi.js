import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getStudents = async () => {
  const response = await axios.get(`${BASE_URL}/api/students`);
  return response.data;
};

export const addStudent = async (student) => {
  const response = await axios.post(`${BASE_URL}/api/students`, student);
  return response.data;
};

export const updateStudent = async (id, updatedStudent) => {
  const response = await axios.put(`${BASE_URL}/api/students/${id}`, updatedStudent);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await axios.delete(`${BASE_URL}/api/students/${id}`);
  return response.data;
};

export const getStudentById = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/students/${id}`);
  return response.data;
};
