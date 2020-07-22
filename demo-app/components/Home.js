import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import * as Location from 'expo-location';
const styles = StyleSheet.create({
    container: {
     flex: 1,
     marginTop:50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 100,
      backgroundColor:"green",
      color:"white"
    },
  });


export default function Home(props) {
    const [state,setState]=useState({
        data:["1","2","3","4"]
    });

    const [location,setLocation] =useState({
        latitude:0,
        longitude:0,
    });
    const [errorMsg,setErrorMsg] =useState(null);
  
    useEffect(() => {
        (async () => {
            try{
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
          let location = await Location.getCurrentPositionAsync({});
          setLocation({latitude:location.coords.latitude,longitude:location.coords.longitude});
          console.log('lcotiocghi')
      }
      catch(err){
          console.log(err);
      }
          
        })();
    }, []);
  
    
  
  
    
  
 

    return (
        
       <View style={styles.container}>      
        {state.data.map((ke,i)=>{
                     return(
                     <FlatList
                     
                       key={i}
                        data={[{key:ke}]}
                       renderItem={({item}) => <TouchableOpacity onPress={()=>props.navigation.navigate("Resturant",{
                           resturant:"Ali"
                       })} key={item.key}style={styles.item}><Text>{item.key}</Text></TouchableOpacity>
                     }/>)
        })}
                       <Text>{location.longitude}</Text>
                       <Text>{location.latitude}</Text>
     </View>
    )
}
