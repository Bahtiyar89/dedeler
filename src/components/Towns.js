import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import townsData from '../jsons/towns.json';

export default function Towns({town, state, setTown}) {
  const [isFocus, setIsFocus] = useState(false);
  const [iller, setIller] = useState([]);

  const renderLabel = () => {
    if (town || isFocus) {
      return <Text style={[styles.label, isFocus && {color: 'blue'}]}>il</Text>;
    }
    return null;
  };

  const getCountryOptions = () => {
    if (!townsData) {
      return [];
    }

    const data = townsData
      .filter(function (item) {
        return item.il_plaka == state;
      })
      .map(function ({ilce_id, ilce_adi}) {
        return {key: ilce_id, label: ilce_adi, value: ilce_id};
      });

    return data;
  };

  useEffect(() => {
    setIller(getCountryOptions());
  }, [state]);

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={iller}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'ilçe seç' : '...'}
        searchPlaceholder="Search..."
        value={town}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setTown(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
