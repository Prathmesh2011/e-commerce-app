import { Pressable, StyleSheet, Text, View, GestureResponderEvent } from "react-native";
import React from "react";
import { icon } from "@/constants/Icons";
import { Colors } from "@/constants/Colors";


type Props= {
    onPress: (event: GestureResponderEvent) => void;
    onLongPress: (event: GestureResponderEvent) => void;
    isFocused: boolean;
    label: string;
    routeName: keyof typeof icon;
};

const TabBarButton = (props: Props) => {
    const {onPress, onLongPress, isFocused, routeName, label} = props;
    return (
        <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.tabbarbtn}
        >   
        {routeName == 'cart' && (
        <View style={styles.badgeWrapper}>
            <Text style={styles.badgeText}>3</Text>
        </View>
        )}
            {icon[routeName]({
                color: isFocused ? Colors.primary : Colors.black,
            })}
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
            </Text>
        </Pressable>
    )
}

export default TabBarButton;

const styles = StyleSheet.create({
    tabbarbtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    badgeWrapper: {
        position: 'absolute',
        backgroundColor: Colors.highlight,
        top: -5,
        right: 20,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 10,
        zIndex: 10
    },
    badgeText: {
        color: Colors.black,
        fontSize: 12
    }
});