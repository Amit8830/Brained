import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {connect} from 'react-redux';

const HomeScreen = ({studentData, navigation}) => {
  return (
    <View>
      <Text>Student List:</Text>
      {studentData.length > 0 ? (
        <FlatList
          data={studentData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View>
              <Text>Name: {item.name}</Text>
              <Text>College: {item.college}</Text>
              <Text>Mobile: {item.mobile}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Address: {item.address}</Text>
              <Text>Postcode: {item.postcode}</Text>
              <View style={{borderBottomWidth: 1, borderBottomColor: 'gray'}} />
            </View>
          )}
        />
      ) : (
        <View>
          <Text>No data found</Text>
          <Button
            title="Add Student"
            onPress={() => navigation.navigate('StudentForm')}
          />
        </View>
      )}
      <Button
        title="Add Student"
        onPress={() => navigation.navigate('StudentForm')}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  studentData: state.students.studentData,
});

export default connect(mapStateToProps)(HomeScreen);

{
  /* <Button
  title="Add Student"
  onPress={() => navigation.navigate('StudentForm')}
/>; */
}
