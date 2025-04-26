import React, { useState, useEffect } from 'react';
import { updateStudent, getStudentById } from '../api/studentApi';

function EditStudent({ selectedStudentId, onStudentUpdated, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function fetchStudent() {
      if (selectedStudentId) {
        const student = await getStudentById(selectedStudentId);
        setName(student.name);
        setEmail(student.email);
      }
    }
    fetchStudent();
  }, [selectedStudentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(selectedStudentId, { name, email });
    onStudentUpdated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Edit Student</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
    </form>
  );
}

export default EditStudent;
