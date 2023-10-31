// StudentFormScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {connect} from 'react-redux';
import {addStudent, clearStudentData} from './studentAction';

// Your component code here

const mapStateToProps = state => ({
  studentData: state.students.studentData,
});

const mapDispatchToProps = dispatch => ({
  addStudent: studentData => dispatch(addStudent(studentData)),
  clearStudentData: () => dispatch(clearStudentData()),
});

const StudentFormScreen = ({
  navigation,
  studentData,
  addStudent,
  clearStudentData,
}) => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  //   const [studentData, setStudentData] = useState([]);

  const handleRegister = async () => {
    // Validation: Check if any of the fields are empty.
    if (!name || !college || !mobile || !email || !address || !postcode) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    // Validation: Check if the mobile number is valid (you can add more complex validation).
    if (!/^\d{10}$/.test(mobile)) {
      Alert.alert(
        'Validation Error',
        'Please enter a valid 10-digit mobile number',
      );
      return;
    }

    // Validation: Check if the email is valid (you can add more complex email validation).
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    // Assuming you have a data store or API for storing student data, you can use it here.
    const studentData = {
      name,
      college,
      mobile,
      email,
      address,
      postcode,
    };

    Alert.alert(
      'Student Registered',
      ` You have successfully registered ${studentData.name} from ${studentData.college}.`,
    );

    addStudent(studentData);

    // Clear the form fields after successful registration.
    setName('');
    setCollege('');
    setMobile('');
    setEmail('');
    setAddress('');
    setPostcode('');

    // Navigate to the Home screen after registration.
    navigation.navigate('Home');
  };
  //   clearStudentData();
  const handleClearData = () => {
    // Clear student data in the Redux store
    clearStudentData();
  };
  return (
    <View>
      {/* <Text>Register as a Student:</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput
        placeholder="College Name"
        value={college}
        onChangeText={setCollege}
      />
      <TextInput
        placeholder="Mobile"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="numeric"
      />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Postcode"
        value={postcode}
        onChangeText={setPostcode}
        keyboardType="numeric"
      />
      <Button title="Register" onPress={handleRegister} /> */}
      <Text>Register as a Student:</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput
        placeholder="College Name"
        value={college}
        onChangeText={setCollege}
      />
      <TextInput
        placeholder="Mobile"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="numeric"
      />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Postcode"
        value={postcode}
        onChangeText={setPostcode}
        keyboardType="numeric"
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Clear Student Data" onPress={handleClearData} />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentFormScreen);
