import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type Props = React.ComponentProps<typeof TextInput>;

const InputField = (props: Props) => {
  return (
    <View>
      <TextInput 
        style={styles.inputField}
        {...props}
      />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    borderRadius: 5,
    fontSize: 16,
    color: Colors.black,
    marginBottom: 20,
  }
});
