import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Switch} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../ThemeContext'; 
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  const { colors } = useTheme();
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: colors.background }}>
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <Text style={{ fontSize: 30,color: colors.text,fontWeight: 'bold' }}>Settings</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', gap: 40, marginVertical: 50, marginHorizontal: 20 }}>
          <View style={{ borderBottomWidth: 1, paddingBottom: 10,borderColor:colors.text,direction: 'flex', flexDirection: 'row',justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20,color: colors.text,fontWeight: 'bold' }}>Language</Text>
            <Icon name="chevron-forward-outline" size={20} color={colors.text} />
          </View>
          <View style={{ borderBottomWidth: 1, paddingBottom: 10,borderColor:colors.text,direction: 'flex', flexDirection: 'row',justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20,color: colors.text,fontWeight: 'bold' }}>My Profile</Text>
            <Icon name="chevron-forward-outline" size={20} color={colors.text} />
          </View>
          <View style={{ borderBottomWidth: 1, paddingBottom: 10,borderColor:colors.text,direction: 'flex', flexDirection: 'row',justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20,color: colors.text,fontWeight: 'bold' }}>Contact Us</Text>
            <Icon name="chevron-forward-outline" size={20} color={colors.text} />
          </View>
          <View style={{ borderBottomWidth: 1, paddingBottom: 10,borderColor:colors.text,direction: 'flex', flexDirection: 'row',justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20,color: colors.text,fontWeight: 'bold' }}>Change Password</Text>
            <Icon name="chevron-forward-outline" size={20} color={colors.text} />
          </View>
          <View style={{ borderBottomWidth: 1, paddingBottom: 10,borderColor:colors.text,direction: 'flex', flexDirection: 'row',justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20,color: colors.text,fontWeight: 'bold' }}>Privacy Policy</Text>
            <Icon name="chevron-forward-outline" size={20} color={colors.text} />
          </View>
        </View>
        
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 40 }}>
          <Text style={{ fontSize: 24, color: colors.text }}>Theme</Text>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
