import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import COLORS from './Constants/Colors';


export default function Products() {
  const [productList, setProductList] = useState()

  const getProductList = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');

      var dummydata = [];
      const product = res.data.map(d => {
        dummydata.push({
          title: d.title,
        });
        // console.log(" D in daat", d.title)
      });
      product && setProductList(dummydata)

      // console.log(" List", res.data)

    } catch (error) {
      console.log("Error while fetching List of products", error)

    }
  }

  useEffect(() => {
    getProductList();
  }, [])

  // console.log(" List", productList)
  return (
    <ScrollView>
      <View >
        <FlatList
          data={productList}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    borderBottomColor: COLORS.grey,
    borderWidth: 1
  },
  text: {
    fontSize: 18
  }

})