import React,{useState,useEffect} from 'react'
import { Container, Header, Content, Item, Input,Label,Icon,Title,Left,Right,Body,Button,Text} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


export default function Add() {
    const [readyState,readysetState]=useState({
        isReady:false,
    })
    useEffect(()=>{
        async function myFunction(){
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
          });
          readysetState({isReady:true})
        }
        myFunction();
    },[])
    return (
        readyState.isReady?
        <Container >
            <Header>
                <Left>
                <Button transparent>
              <Icon name='arrow-back' />
            </Button>
 
                </Left>
                <Body>
                    <Title>Add</Title>
                </Body>
                <Right/>
            </Header>
            <Content marginTop={100}>
        <Item stackedLabel>
              <Label>Name</Label>
            <Item  >
            <Input />
            </Item>
            </Item>
            <Item stackedLabel>
              <Label>Description</Label>
            <Item  >
            <Input />
            </Item>
            </Item>
            <Button   block  marginTop={30}  >
            <Text >Add</Text>
          </Button>
            </Content>
        </Container>:<AppLoading/>
    )
}
