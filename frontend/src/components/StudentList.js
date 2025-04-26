import React, { useState, useEffect } from 'react';
import { getStudents, deleteStudent } from '../api/studentApi';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import './StudentList.css'; // CSS IMPORT

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editingStudentId, setEditingStudentId] = useState(null);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  const handleEdit = (id) => {
    setEditingStudentId(id);
  };

  const handleCancelEdit = () => {
    setEditingStudentId(null);
  };

  const handleStudentUpdated = () => {
    fetchStudents();
    setEditingStudentId(null);
  };

  return (
    <div className="container">
      <h1>Student List</h1>
      <AddStudent onStudentAdded={fetchStudents} />
      {editingStudentId && (
        <EditStudent
          selectedStudentId={editingStudentId}
          onStudentUpdated={handleStudentUpdated}
          onCancel={handleCancelEdit}
        />
      )}
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} ({student.email})
            <div>
              <button onClick={() => handleEdit(student._id)}>Edit</button>
              <button onClick={() => handleDelete(student._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
