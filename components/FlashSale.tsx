import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';  
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';  
import { ProductType } from '@/types/type';

type Props = {};

const FlashSale = (products: Props) => {
    const saleEndDate = new Date();
    //saleEndDate.setFullYear(2024,11,31);
    saleEndDate.setDate(saleEndDate.getDate() + 2);  
    saleEndDate.setHours(23, 59, 59, 999);  

    const [timeUnits, setTimeUnits] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
       
        const calculateTimeUnits = (timeDifference: number) => {
            const seconds = Math.floor(timeDifference / 1000);
            setTimeUnits({
                days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
                hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
                minutes: Math.floor((seconds % (60 * 60)) / 60),
                seconds: seconds % 60,
            });
        };

        const updateCountdown = () => {
            const currentDate = new Date().getTime();  
            const expiryTime = saleEndDate.getTime(); 
            const timeDifference = expiryTime - currentDate; 

            if (timeDifference <= 0) {
                calculateTimeUnits(0);  
            } else {
                calculateTimeUnits(timeDifference);  
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);  

    const formatTime = (time: number) => {
        return time.toString().padStart(2, "0");
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <View style={styles.timerWrapper}>
                    <Text style={styles.title}>Flash Sale</Text>
                    <View style={styles.timer}>
                        <Ionicons name="time-outline" size={16} color={Colors.black} />
                        <Text style={styles.timerTxt}>
                            {`${formatTime(timeUnits.days)}:${formatTime(timeUnits.hours)}:${formatTime(timeUnits.minutes)}:${formatTime(timeUnits.seconds)}`}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.titleBtn}>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FlashSale;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.black,
    },
    titleBtn: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.black,
    },
    timerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    timer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: Colors.highlight,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 12,
    },
    timerTxt: {
        color: Colors.black,
        fontWeight: '500',
    },
});
