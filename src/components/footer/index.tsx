import React from 'react'
import '@fontsource/blinker'
import {
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  FaFacebookF,
  FaInstagram,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import Link from 'next/link'
const Footer = () => {
  return (
    <Stack spacing={0.5} bg='black'>
      <Flex
        h={'100px'}
        justify={'center'}
        backgroundImage={
          'https://assets.worldofwarcraft.com/static/components/Pane/Pane-dirtLight.18def74ed60ab9f1f4139f87349d2f79.jpg'
        }
        backgroundPosition='center'
        backgroundSize={'cover'}
      >
        <HStack spacing={5}>
          <Text
            fontWeight={'bold'}
            fontSize='xl'
            fontFamily={'Blinker'}
            color={'#ebddc2'}
          >
            Seguir a Warcraft
          </Text>
          {socialMedia.map((item) => (
            <Link href={item.link} passHref>
              <a>
                <Text
                  color={'brand.yellow'}
                  _hover={{ color: 'white' }}
                  fontSize='3xl'
                  key={item.id}
                >
                  <item.icon />
                </Text>
              </a>
            </Link>
          ))}
        </HStack>
      </Flex>
      <Flex
        minH={'40vh'}
        backgroundImage={
          'https://assets.worldofwarcraft.com/static/components/Pane/Pane-dirtDark.ea235926d6487091ac2d6786fd7d2615.jpg'
        }
        justify='center'
      >
        <VStack py={10}>
          <Image src='/images/blizzard_logo.svg' w={100} />
          <HStack>
            {footerOptions.map((option, i) => (
              <>
                <Link href={option.link} passHref>
                  <a>
                    <Text
                      fontSize='lg'
                      fontWeight={'medium'}
                      color={'#ebddc2'}
                      _hover={{ color: 'white' }}
                      key={option.id}
                      textTransform='uppercase'
                    >
                      {option.title}
                    </Text>
                  </a>
                </Link>
                {i !== footerOptions.length - 1 && <Divider w={'2'} />}
              </>
            ))}
          </HStack>
          <Text textAlign='center' fontSize={'14px'} color={'brand.yellow'}>
            ©2022 BLIZZARD ENTERTAINMENT, INC. TODOS LOS DERECHOS RESERVADOS.
          </Text>
          <Text textAlign='center' fontSize={'14px'} color={'brand.yellow'}>
            Todas las marcas comerciales a las que se hace referencia son
            propiedad de sus respectivos dueños.
          </Text>
        </VStack>
      </Flex>
    </Stack>
  )
}

export default Footer

const socialMedia = [
  { id: 0, icon: FaFacebookF, link: 'https://www.facebook.com/' },
  { id: 1, icon: FaTwitter, link: 'https://www.twitter.com/' },
  { id: 2, icon: FaYoutube, link: 'https://www.youtube.com/' },
  { id: 3, icon: FaReddit, link: 'https://www.reddit.com/' },
  { id: 4, icon: FaInstagram, link: 'https://www.instagram.com/' },
]

const footerOptions = [
  { id: 0, title: 'empleos', link: '/' },
  { id: 1, title: 'faqs', link: '/' },
  { id: 2, title: 'contacto', link: '/' },
  { id: 4, title: 'privacidad', link: '/' },
  { id: 5, title: 'prensa', link: '/' },
]