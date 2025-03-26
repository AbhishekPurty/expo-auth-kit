import MyButton from "@/components/navigation/MyButton";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  
  const onLogin = () => {
    router.navigate("/login");
  }

  const onSignup = () => {
    router.navigate("/signup");
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        padding: 5,
        gap: 7,
        margin: 7,
      }}
    >
    <View style={{paddingVertical: 20, paddingRight: 20}}>
      <Text style={{fontSize: 35, fontWeight: "bold"}}>Welcome to PopX</Text>
      <Text style={{fontSize: 25, fontWeight: "bold", color: "grey"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </View>
      <MyButton title={"Create Account"} color={"blue"} onPress={onSignup}/>
      <MyButton title={"Already Registered? Login"} color={"violet"} onPress={onLogin}/>
    </View>
  );
}
