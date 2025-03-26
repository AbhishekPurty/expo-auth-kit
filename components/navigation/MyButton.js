import { View, Text, TouchableOpacity } from 'react-native'

export default function MyButton({ title, color, onPress}){
  return (
    <View style={{width: "100%"}}>
      <TouchableOpacity 
        style={{
            backgroundColor: color, 
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius : 10,
            alignItems: "center"
        }}
        onPress={onPress}
        >
            <Text
                style={{
                    color : "white",
                    fontWeight: "bold",
                }}
            >
                {title}
            </Text>
      </TouchableOpacity>
    </View>
  )
}

