// StudentFormScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {connect} from 'react-redux';
import {addStudent, clearStudentData} from './studentAction';
import {Formik} from 'formik';
import * as Yup from 'yup';

const mapStateToProps = state => ({
  studentData: state.students.studentData,
});

const mapDispatchToProps = dispatch => ({
  addStudent: studentData => dispatch(addStudent(studentData)),
  clearStudentData: () => dispatch(clearStudentData()),
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  college: Yup.string().required('College Name is required'),
  mobile: Yup.string()
    .matches(/^\d{10}$/, 'Mobile must be a 10-digit number')
    .required('Mobile is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
  postcode: Yup.string()
    .matches(/^\d{6}$/, 'Postcode must be a 6-digit number')
    .required('Postcode is required'),
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
      <Formik
        initialValues={{
          name: '',
          college: '',
          mobile: '',
          email: '',
          address: '',
          postcode: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          // Validation has passed, you can submit the data
          addStudent(values);
          resetForm();
          navigation.navigate('Home');
        }}>
        {({values, handleChange, handleSubmit, errors, touched}) => (
          <View>
            <TextInput
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {touched.name && errors.name && <Text>{errors.name}</Text>}

            <TextInput
              placeholder="College Name"
              value={values.college}
              onChangeText={handleChange('college')}
            />
            {touched.college && errors.college && <Text>{errors.college}</Text>}

            <TextInput
              placeholder="Mobile"
              value={values.mobile}
              onChangeText={handleChange('mobile')}
              keyboardType="numeric"
            />
            {touched.mobile && errors.mobile && <Text>{errors.mobile}</Text>}

            <TextInput
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}

            <TextInput
              placeholder="Address"
              value={values.address}
              onChangeText={handleChange('address')}
            />
            {touched.address && errors.address && <Text>{errors.address}</Text>}

            <TextInput
              placeholder="Postcode"
              value={values.postcode}
              onChangeText={handleChange('postcode')}
              keyboardType="numeric"
            />
            {touched.postcode && errors.postcode && (
              <Text>{errors.postcode}</Text>
            )}

            <Button title="Register" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentFormScreen);
