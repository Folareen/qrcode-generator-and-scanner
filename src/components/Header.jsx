import React, { Component } from 'react'
import { Flex, Link } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'

export default class Header extends Component {

  render() {
    const otherOption = () => {
        switch(window.location.pathname){
            case '/generate-code':
                return {title: 'Scan QRCode', path: '/scan-code'}
            case '/scan-code':
                return {title: 'Generate QRCode', path: '/generate-code'}
            default:
                return ''
        }
    }

    return (
      <Flex w={'100%'} bg={'blue.300'} boxShadow={'0 2px 2px rgba(0, 0, 0, .5)'}>
          <Link as={RouterLink} to={'/'} flex={1} p={4} display={'block'} px={8}  color={'white'} fontWeight={'bold'} borderRight={'2px'}>
              Homepage
          </Link>
          <Link as={RouterLink} to={otherOption().path} p={4} display={'block'} px={10}  color={'white'} fontWeight={'bold'}>
              {otherOption().title}
          </Link>
      </Flex>
    )
  }
}
