import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import countrycodes from '../jsons/countries.json';

const Countries = ({country, setCountry}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [countries, setCountries] = useState([]);

  const renderLabel = () => {
    if (country || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>ülke</Text>
      );
    }
    return null;
  };

  const getCountryOptions = () => {
    if (!countrycodes) {
      return [];
    }
    let out = countrycodes.map(c => {
      return {
        key: c.key,
        label: `${c.name}`,
        value: c.key,
      };
    });
    console.log('out: ', out);

    return out;
  };

  console.log('country: ', country);

  useEffect(() => {
    setCountries(getCountryOptions());
  }, []);

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={countries}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Ülke seç' : '...'}
        searchPlaceholder="Search..."
        value={country}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setCountry(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default Countries;

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
