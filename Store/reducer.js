// reducers.js
const initialState = {
  studentData: [],
};

const students = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return {...state, studentData: [...state.studentData, action.payload]};

    case 'CLEAR_STUDENT_DATA':
      return {...state, studentData: []};

    default:
      return state;
  }
};

export default students;
