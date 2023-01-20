import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { CardSwiper, CardSwiperItem } from './CardSwiper';

function CardSwiperExample(){
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://example-data.draftbit.com/users?_limit=10")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  if (!data) {
    return <Text>"Loading..."</Text>;
  }

  function onSwiped(index:number){
    console.log("card swapped! " + index)
  }

  function onSwipedAll(){
    console.log("card ends")
  }

  return(
    <View style={styles.container}>
      <View style={{ marginBottom: 12, position: "relative" }}>
        <Text style={{ marginBottom: 6, textAlign: "center" }}>
          First Example
        </Text>
        <CardSwiper
          style={{
            height: 300,
          }}
          horizontalSwipe={true}
          verticalSwipe={true}
          onEndReached={onSwipedAll}
          onIndexChanged={onSwiped}
        >
        {data.map((item) => (
          <CardSwiperItem style={{ paddingLeft: 12, paddingRight: 12 }}>
            <View style={styles.item}>
              <Image
                style={styles.avatarLarge}
                source={{uri: item.avatar}}
              />
              <View>
                <Text style={styles.title}>
                  {item.fullName}
                </Text>
                <Text style={{ fontSize: 14, textAlign: "center" }}>
                  @{item.twitterHandle}
                </Text>
              </View>
              <Text style={{ fontSize: 12, textAlign: "center" }}>
                {item.bio}
              </Text>
              <Button
                style={{paddingTop: 24}}
                title="Follow"
              />
            </View>
          </CardSwiperItem>
        ))}
        </CardSwiper>
      </View>
      <View style={{ marginBottom: 12, position: "relative" }}>
        <Text style={{ marginBottom: 6, textAlign: "center" }}>
          Second Example
        </Text>
        <CardSwiper
          style={{
            height: 180,
          }}
          horizontalSwipe={true}
          verticalSwipe={false}
          onEndReached={onSwipedAll}
          onIndexChanged={onSwiped}
          data={data}
          renderItem={({item}) => (
            <CardSwiperItem style={{ paddingLeft: 12, paddingRight: 12}}>
              <View style={styles.item}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginTop: 4, marginRight: 12 }}>
                    <Image
                      style={styles.avatarSmall}
                      source={{uri: item?.avatar}}
                    />
                  </View>
                  <View style={{ flexDirection: "column", flex:1 }}>
                    <Text style={styles.title}>
                      {item?.fullName}
                    </Text>
                    <Text style={{ fontSize: 12, flex: 1, flexWrap: "wrap" }}>
                      {item?.bio}
                    </Text>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Button
                    title="Follow"
                  />
                </View>              
              </View>
            </CardSwiperItem>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",
  },
  item:{
    display: "flex",
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  avatarLarge:{
    width: 84,
    height: 84,
    borderRadius: 84/2
  },
  avatarSmall:{
    width: 64,
    height: 64,
    borderRadius: 64/2
  },
  title:{
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  }
})

export default CardSwiperExample;