import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React ,{ useState } from "react"
import { useNavigation } from "@react-navigation/native"
export default function Lab3b() {
    const [image, setImage] = useState(require("../assets/vs_red.png"))
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 5, gap: 15 }}>
            <View style={{ height: 160, flexDirection: 'row', gap: 10 }}>
                <View style={{ width: '35%' }}>
                    <Image
                        source={image}
                        resizeMode='contain'
                        style={{ height: 160 }}
                    />
                </View>
                <View style={{ paddingRight: 50, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>Điện Thoại Vsmart Joy 3</Text>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>Hàng chính hãng</Text>
                </View>
            </View>
            <View style={{ height: '100%', backgroundColor: 'gray', padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>Chọn một màu bên dưới:</Text>
                <View style={{ paddingVertical: 20, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                    <Pressable onPress={() => { setImage(require("../assets/vs_silver.png")); }}
                    >
                        <View style={{ height: 80, width: 85, backgroundColor: "silver" }}></View>
                    </Pressable>
                    <Pressable onPress={() => { setImage(require("../assets/vs_red.png")); }}
                    >
                        <View style={{ height: 80, width: 85, backgroundColor: "red" }}></View>
                    </Pressable>
                    <Pressable onPress={() => { setImage(require("../assets/vs_black.png")); }}
                    >
                        <View style={{ height: 80, width: 85, backgroundColor: "black" }}></View>
                    </Pressable>
                    <Pressable onPress={() => { setImage(require("../assets/vs_blue.png")); }}
                    >
                        <View style={{ height: 80, width: 85, backgroundColor: "blue" }}></View>
                    </Pressable>
                </View>
                <Pressable onPress={() => {navigation.navigate("Home",image)}}
                    style={{ padding: 15, backgroundColor: 'blue', borderRadius: 20, marginTop: 40 }}>
                    <Text style={{ textAlign: 'center', textTransform: 'uppercase', color: '#fff', fontWeight: 600, fontSize: 18 }}>Xong</Text>
                </Pressable>
            </View>
        </View>
    );
}


