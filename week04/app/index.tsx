import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const navigation = useNavigation();
  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Open Drawer" onPress={onToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  
})