import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  //   const [number1, setNumber1] = useState('');
  //   const [number2, setNumber2] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const navigation = useNavigation();

  const checkFibonacci = () => {
    const isPerfectSquare = x => {
      const s = Math.sqrt(x);
      return s * s === x;
    };

    const isFibonacci = n => {
      return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
    };

    if (isFibonacci(firstNumber) && firstNumber === secondNumber) {
      navigation.navigate('Home');
    } else {
      alert(
        'The number is not a Fibonacci number or does not match the second number.',
      );
    }
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Number 1"
        keyboardType="numeric"
        value={firstNumber}
        onChangeText={text => setFirstNumber(text)}
      />
      <TextInput
        placeholder="Number 2"
        keyboardType="numeric"
        value={secondNumber}
        onChangeText={text => setSecondNumber(text)}
      />
      <Button title="Login" onPress={checkFibonacci} />
    </View>
  );
};

export default LoginScreen;
