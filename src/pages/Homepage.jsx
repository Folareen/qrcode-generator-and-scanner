import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React, { Component } from 'react'
import {Link as RouterLink} from 'react-router-dom'

export default class Homepage extends Component {
  render() {
    return (
        <Flex align={'center'} justify={'center'} h={'100vh'} bg={'blue.100'}>
            <Box w={'max-content'} p={4} textAlign={'center'}>
                <Heading as={'h1'} size={'3xl'} color={'blue.800'} mb={10}>
                    QRCode Generator and Scanner
                </Heading>
                <Text mt={4} fontStyle={'italic'}>
                    Generate and scan QRCode in less than a minute!.
                </Text>
                <Container m={2} display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}  maxW={'10xl'}>
                    <Link textDecoration={'none'} as={RouterLink} to={'/generate-code'} py={4} display={'block'} px={8} bg={'blue.400'} color={'white'} fontWeight={'bold'} borderRadius={30} m={2}>
                        Generate QRCode 
                    </Link>
                    <Link textDecoration={'none'} as={RouterLink} to={'/scan-code'} py={4} display={'block'} px={8} bg={'blue.400'} color={'white'} fontWeight={'bold'} borderRadius={30} m={2}>
                        Scan QRCode 
                    </Link>
                </Container>
            </Box>
        </Flex>
    )
  }
}
