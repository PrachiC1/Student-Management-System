const mongoose = require('mongoose');
const Student = require('./models/studentModel'); // make sure path is correct

const students = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '1234567890',
    age: 20,
    grade: 'A',
  },
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    phone: '2345678901',
    age: 22,
    grade: 'B',
  },
  {
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    phone: '3456789012',
    age: 21,
    grade: 'A',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '4567890123',
    age: 20,
    grade: 'A',
  },
];

async function seedStudents() {
  try {
    await mongoose.connect('mongodb://localhost:27017/studentsDB'); // Correct DB name
    console.log('✅ MongoDB connected for seeding');

    await Student.deleteMany(); // Clear old data
    await Student.insertMany(students); // Insert fresh data
    console.log('✅ Students seeded successfully');

    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error seeding students:', error);
  }
}

seedStudents();
