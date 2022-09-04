import React, { Component } from 'react'
import Header from '../components/Header'
import { Box, Container, Text, Button, Input, Flex } from '@chakra-ui/react'
import QRCode from 'qrcode'

export default class GenerateCode extends Component {
    constructor(){
        super()
        this.state = {
            text: '',
            generatingCode : false,
            qrCodeImageUrl : '',
            error: false
        }
    }

    generateCode = async() => {
        try{
            this.setState({ generatingCode: true, error: false})
            const response = await QRCode.toDataURL(this.state.text)
            this.setState({text: '', generatingCode:false,  qrCodeImageUrl: response})
        }catch(err){
            this.setState({generatingCode: false, qrCodeImageUrl: '', error: true, text: ''})
        }
    }

  render() {
    return (
        <Box  h={'100vh'} bg={'blue.50'}>
            <Header/>
            <Container my={10} maxW={'3xl'}>
                <Flex mb={5} flexWrap={'wrap'}>
                    <Input
                        color='blue.800'
                        placeholder='Enter Text'
                        _placeholder={{ color: 'inherit' }}
                        m={2} flex={1}
                        borderColor={'blue.200'}
                        value={this.state.text} onChange={(e)=>{this.setState({ text: e.target.value})}}
                    />
                    <Button colorScheme='linkedin' m={2} py={2} px={4} display={'inline-flex'} onClick={this.generateCode}>Generate QRCode</Button>
                </Flex>
                <Flex w={'50vm'} h={'50vmin'} borderWidth={'1px'} borderStyle={'solid'}  borderColor={'blue.700'} maxW={'xl'} maxH={'xl'} mx={'auto'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                    {this.state.qrCodeImageUrl && 
                    <>
                    <a href={this.state.qrCodeImageUrl} download>
                        <img src={this.state.qrCodeImageUrl} alt={'QRCode'} download />
                    </a>
                    <Text>
                        click to download
                    </Text>
                    </>}
                    {this.state.error && <Text color={'red.300'}>Error occured</Text>}
                    {this.state.generatingCode && <Text color={'green.300'}>Generating QRCode</Text>}
                </Flex>

            </Container>

        </Box>
    )
  }
}
