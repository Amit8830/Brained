// actions.js
export const addStudent = studentData => ({
  type: 'ADD_STUDENT',
  payload: studentData,
});

export const clearStudentData = () => ({
  type: 'CLEAR_STUDENT_DATA',
});
