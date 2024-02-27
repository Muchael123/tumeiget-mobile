import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import { Stack, useFocusEffect } from 'expo-router'
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera'

const Scan = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back')
  const [isActive, setIsActive] = useState(false);
  const camera = useRef<Camera>(null);

  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => {setIsActive(false);}  
      },[])
  )
  useEffect(() => {
    if(!hasPermission){
      requestPermission();
    }
  }
    ,[hasPermission])

    const onTakePicture = async () => {
      const Photo  = await camera.current?.takePhoto()
    }

  console.log(hasPermission, '\n isActive', isActive);
  if(!hasPermission){
    return <ActivityIndicator/>;
  }
  return (
    <View style={{flex:1}}>
      <Stack.Screen  options={{headerShown: false}}/>
      <Camera
      ref={camera}
      style={StyleSheet.absoluteFill}
      device={device}
      photo = {true}
      isActive={isActive}
    />

    </View>
  )
}

export default Scan