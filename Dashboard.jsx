import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MOCK_DATA} from './MOCK';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTop}>Actions</Text>
      </View>
      <View style={styles.cards}>
        {MOCK_DATA.map(md => {
          return (
            <View style={styles.card} key={md.type}>
              <View style={styles.cardIcon} />
              <View style={styles.title}>
                <Text>{md.title}</Text>
              </View>
              <View style={styles.description}>
                <Text style={styles.description}>
                  {md.description} {'>'}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 20,
    position: 'relative',
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  titleTop: {
    fontSize: 18,
    fontWeight: '600',
  },
  cards: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 14,
    marginBottom: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cardIcon: {
    width: 36,
    height: 36,
    backgroundColor: 'black',
    borderRadius: 36,
    marginRight: 8,
  },
  title: {
    flex: 1,
  },
  description: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Dashboard;
