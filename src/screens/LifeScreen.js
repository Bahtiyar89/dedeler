import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet, StatusBar} from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';

import Countries from '../components/Countries';
import State from '../components/State';
import Towns from '../components/Towns';
import database from '../database/data.json';

const LifeScreen = () => {
  const [countrycode, setCountrycode] = useState(null);
  const [state, setState] = useState(null);
  const [town, setTown] = useState(null);
  const [db, setDb] = useState([]);

  const getCountryOptions = () => {
    if (!database) {
      return [];
    }

    const data = database.filter(function (item) {
      return item.key == countrycode;
    });
    console.log('data: ', data);

    return data;
  };

  const getStateOptions = () => {
    if (!database) {
      return [];
    }

    const data = database.filter(function (item) {
      return item.il_plaka == state;
    });
    console.log('state: ', data);

    return data;
  };

  const getTownOptions = () => {
    if (!database) {
      return [];
    }

    const data = database.filter(function (item) {
      return item.ilce_id == town;
    });
    console.log('state: ', data);

    return data;
  };

  useEffect(() => {
    setDb(getCountryOptions());
  }, [countrycode]);

  useEffect(() => {
    setDb(getStateOptions());
  }, [state]);

  useEffect(() => {
    setDb(getTownOptions());
  }, [town]);

  console.log('country: ', countrycode);
  console.log('town: ', town);
  console.log('state: ', state);

  return (
    <View>
      <Countries country={countrycode} setCountry={setCountrycode} />
      <State country={countrycode} state={state} setState={setState} />
      <Towns town={town} state={state} setTown={setTown} />

      <FlatList
        data={db}
        renderItem={({index, item}) => (
          <View key={index} style={{padding: 10}}>
            <Text style={{fontWeight: '900'}}>{item.ismi}</Text>
            <ReadMore numberOfLines={3} style={{fontSize: 14}}>
              {item.life}
            </ReadMore>
          </View>
        )}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height: 220}}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default LifeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
