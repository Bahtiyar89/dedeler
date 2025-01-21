import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import statesData from '../jsons/states.json';

export default function Regions({country, state, setState}) {
  const [isFocus, setIsFocus] = useState(false);
  const [iller, setIller] = useState([]);

  const renderLabel = () => {
    if (state || isFocus) {
      return <Text style={[styles.label, isFocus && {color: 'blue'}]}>il</Text>;
    }
    return null;
  };

  const getStateOptions = () => {
    if (!statesData) {
      return [];
    }

    const data = statesData
      .filter(function (item) {
        return item.key == country;
      })
      .map(function ({plaka, il_adi}) {
        return {key: plaka, label: il_adi, value: plaka};
      });

    return data;
  };

  useEffect(() => {
    setIller(getStateOptions());
  }, [country]);

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
        placeholder={!isFocus ? 'il seç' : '...'}
        searchPlaceholder="Search..."
        value={state}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setState(item.value);
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
