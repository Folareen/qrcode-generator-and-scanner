import React, { Component } from 'react'
import Header from '../components/Header'
import { Flex, Container, Box, Button, Text} from '@chakra-ui/react'
import QrReader from 'react-qr-scanner'

export default class ScanCode extends Component {
  constructor(){
    super()
    this.state = {
      scanResult : ''
    }
  }

  handleScan = (data) =>{
    this.setState({
      scanResult: data,
    })
    // console.log(data)
  }

  handleError = (error) => {
    console.log(error);
  }

  render() {
    return (
        <Box bg={'blue.50'} minH={'100vh'}>
            <Header/>
            <Flex my={5} flexWrap={'wrap'}>

              <Container my={5} textAlign={'center'}>
                <Button colorScheme='linkedin' m={2} py={2} px={4} display={'inline-flex'} onClick={this.scanFile} >Upload QRCode to scan</Button>
                <Flex w={'50vm'} h={'50vmin'} borderWidth={'1px'} borderStyle={'solid'}  borderColor={'blue.700'} maxW={'xl'} maxH={'xl'} mx={'auto'} alignItems={'center'} justifyContent={'center'}>
                <QrReader
                  delay={false}
                  style={{width: '100%', height: '100%'}}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  />
                </Flex>
                <Flex flexWrap={'wrap'} p={2} my={2} borderColor={'blue.200'} border={'1px'} fontWeight={'bold'}>
                  <Text color={'blue.700'}>Scanned Code: </Text> <Text px={2}  color={'green.600'}> {this.state.scanResult}</Text>
                </Flex>
              </Container>

              <Container my={5} textAlign={'center'}>
                <Button colorScheme='linkedin' m={2} py={2} px={4} display={'inline-flex'}>Scan QRCode with Webcam</Button>
                <Box w={'50vm'} h={'50vmin'} borderWidth={'1px'} borderStyle={'solid'}  borderColor={'blue.700'} maxW={'xl'} maxH={'xl'} mx={'auto'}>
                    yaga
                </Box>
                <Flex flexWrap={'wrap'} p={2} my={2} borderColor={'blue.200'} border={'1px'} fontWeight={'bold'}>
                  <Text color={'blue.700'}>Scanned Code: </Text> <Text px={2}  color={'green.600'}> {this.state.scanResult}</Text>
                </Flex>
              </Container>
            </Flex>
        </Box>
    )
  }
}
