import { Container, Content, ListItem, Text } from "native-base";
import React, { Component } from "react";
import { Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
const routes = [{ key: "1", route: "Home" }, { key: "2", route: "Profile" }];

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          />
          <FlatList
            data={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderItem={({ item }) => {
              console.log("asdasd", item.route);
              return (
                <ListItem
                  id={item.key}
                  button
                  onPress={() => this.props.navigation.navigate(item.route)}
                >
                  <Text>{item.route}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
