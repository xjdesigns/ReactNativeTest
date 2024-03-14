import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ACTIVE_GUEST_PASSES} from './MOCK';

const ActiveCards = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Active</Text>
      </View>
      <View style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          horizontal={true}
          style={styles.scroll}>
          <View style={styles.cards}>
            {ACTIVE_GUEST_PASSES.map((agp, idx) => {
              return (
                <View
                  style={{...styles.card, ...styles[`card${idx}`]}}
                  key={idx}>
                  <View style={styles.cardIcon} />
                  <View>
                    <Text style={styles.cardTitle}>{agp.title}</Text>
                    <View>
                      <Text style={styles.cardActivePass}>
                        {agp.value.length} Active Pass
                      </Text>
                    </View>
                    {agp.value.map((v, vidx) => {
                      return (
                        <View key={vidx}>
                          <Text style={styles.cardDescription}>
                            {v.name} expires in 1 hour
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  scoll: {
    flex: 0,
  },
  cards: {
    flexDirection: 'row',
    height: 108,
  },
  card: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#888',
    borderRadius: 20,
    padding: 20,
    marginRight: 10,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  cardIcon: {
    width: 28,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 28,
    marginRight: 8,
  },
  cardTitle: {
    fontWeight: '300',
    marginBottom: 4,
  },
  cardActivePass: {
    fontWeight: 700,
    marginBottom: 4,
  },
  cardDescription: {},
  card0: {
    backgroundColor: '#69b5d2',
  },
  card1: {
    backgroundColor: '#b669d2',
  },
  card2: {
    backgroundColor: '#d2bd69',
  },
});

export default ActiveCards;
