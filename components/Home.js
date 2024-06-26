import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Head from '../assets/profile.png'
import Search from '../assets/search.png'
import Card from '../assets/Card.png'
import Send from '../assets/send.png'
import TopUp from '../assets/topUp.png'
import Receive from '../assets/recieve.png'
import Loan from '../assets/loan.png'
import { useTheme } from '@react-navigation/native'
import Apple from '../assets/apple.png'
import Spotify from '../assets/spotify.png'
import Transfer from '../assets/moneyTransfer.png'
import Grocery from '../assets/grocery.png'
import { ScrollView } from 'react-native'

const data = [
    {id: 1, name: 'Apple Store', text: 'Entertainment', amount: '-$5,99', image: Apple},
    {id: 2, name: 'Spotify', text: 'Music', amount: '-$12,99', image: Spotify},
    {id: 3, name: 'Money Transfer', text: 'Transaction', amount: '$300', image: Transfer},
    {id: 4, name: 'Grocery', text: 'Shopping', amount: '-$88', image: Grocery},
]

const home = () => {
    const { colors } = useTheme();

    const renderItem = () => {
        return(
            <View style={{marginTop: 10, display:'flex', gap: 15}}>
                {
                    data.map((item, index) => {
                        return(
                            <TouchableOpacity key={index} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  paddingHorizontal: 20}}>
                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                    <View style={{width: 50, height: 50, backgroundColor: '#f4f4f4', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <Image source={item.image} style={{}}/>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.text}}>{item.name}</Text>
                                        <Text style={{color: colors.text}}>{item.text}</Text>
                                    </View>
                                </View>
                                <Text style={{color: colors.text, fontSize: 18}}>{item.amount}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

  return (
    <SafeAreaView>
        <ScrollView>
        <View style={{display: 'flex', flexDirection: 'row',marginHorizontal: 10}}>
            <View style={{marginVertical:10}}>
                <Image source={Head} style={{height:70,width: 70,borderRadius: 100}}/>
            </View>
            <View style={{marginHorizontal:10, marginVertical: 20}}>
                <Text style={{color: 'gray', fontSize: 20}}>Welcome back,</Text>
                <Text style={{fontSize:20,marginVertical:5, color: colors.text}}>Abdul Rashid</Text>
            </View>
            <View style={{marginVertical: 20,backgroundColor: '#f4f4f4',borderRadius: 100,height: 40,width: 40,justifyContent: 'center',alignItems: 'center',marginHorizontal:100}}>
                <Image source={Search} />
            </View>
        </View>
        
        <View style={{display:'flex',alignItems: 'center',marginVertical: 20}}>
            <Image source={Card} />
        </View>

        <TouchableOpacity style={{display: 'flex',flexDirection: 'row',marginVertical: 20,marginHorizontal: 10, gap: 50}}>
            <View>
                <View style={{height: 50,width: 50, borderRadius: 100,backgroundColor:'#F4F4F4',alignItems: 'center',justifyContent: 'center' }}>
                    <Image source={Send}/>
                </View>
                <Text style={{marginVertical:10,marginHorizontal: 10,color: colors.text}}>Sent</Text>
            </View>
            <View>
                <View style={{height: 50,width: 50, borderRadius: 100,backgroundColor:'#F4F4F4',alignItems: 'center',justifyContent: 'center' }}>
                    <Image source={Receive}/>
                </View>
                <Text style={{marginVertical:10,color: colors.text}}>Receive</Text>
            </View>
            <View>
                <View style={{height: 50,width: 50, borderRadius: 100,backgroundColor:'#F4F4F4',alignItems: 'center',justifyContent: 'center' }}>
                    <Image source={Loan}/>
                </View>
                <Text style={{marginVertical:10,marginHorizontal: 10,color: colors.text}}>Loan</Text>
            </View>
            <View>
                <View style={{height: 50,width: 50, borderRadius: 100,backgroundColor:'#F4F4F4',alignItems: 'center',justifyContent: 'center' }}>
                    <Image source={TopUp}/>
                </View>
                <Text style={{marginVertical:10,color: colors.text}}>TopUp</Text>
            </View>
        </TouchableOpacity>

        <View style={{display: 'flex', flexDirection:'row',gap: 220,marginVertical:20}}>
            <Text style={{fontWeight: 'bold',color: colors.text,fontSize: 20}}>Transaction</Text>
            <Text style={{color: '#0066FF'}}>Sell All</Text>
        </View>

        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
        </ScrollView>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})