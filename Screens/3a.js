import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native"
export default function Lab3a( route) {
     const navigation = useNavigation();
     const data = route.route.params;
    return (
        <View style={{ width: '100%', gap: 15, padding: 15, marginTop: 10 }}>
            <View style={{ height: 300 }}>
                <Image
                    resizeMode='contain'
                    style={{ width: null, height: 300 }}
                    source={data ? data: require("../assets/vs_red.png")}
                />
            </View>
            <View>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../assets/Star.png")}
                    />
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../assets/Star.png")}
                    />
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../assets/Star.png")}
                    />
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../assets/Star.png")}
                    />
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../assets/Star.png")}
                    />
                    <Text style={{ fontSize: 14, fontWeight: 600 }}>(Xem 828 đánh giá)</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>1.790.000 đ</Text>
                    <Text style={{ fontSize: 22, color: 'gray', textDecorationLine: 'line-through' }}>1.790.000 đ</Text>
                </View>
                <View style={{ flexDirection: 'row' , marginTop: 10}}>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: 'red' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image
                        style={{ width: 15, height: 15 }}
                        source={require("../assets/chamhoi.png")}
                    />
                </View>
            </View>
            <View style={{marginTop: 10}}>
                <Pressable onPress={() => { navigation.navigate('Detail') }} style={{ paddingVertical: 15, width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 50 }}>
                    <Text style={{ textTransform: 'uppercase', fontSize: 18, textAlign: 'center' }}>
                        4 Màu-chọn màu
                    </Text>
                </Pressable>
            </View>
            <View style={{marginTop: 10}}>
                <Pressable style={{ backgroundColor: 'red', paddingVertical: 15, width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 50 }}>
                    <Text style={{ textTransform: 'uppercase', fontSize: 18, textAlign: 'center', color: 'white' }}>
                        Chọn mua
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

