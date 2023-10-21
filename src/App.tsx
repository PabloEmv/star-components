import { Avatar } from './stories/Avatar/Avatar'
import { Button } from './stories/Button/Button'
import { Container } from './stories/Container/Container'
import Dropdown from './stories/Dropdown/Dropdown'
import { Input } from './stories/Input/Input'
import { Text } from './stories/Text/Text'

function App() {
  return (
    <div style={{ display: 'grid', placeContent: 'center', height: '100vh' }}>
      <Text
        variant='p'
        fontFamily='poppins'
        fontSize='4xl'
        fontWeight='300'
      >
        Este es un texto de{' '}
        <Text
          variant='label'
          color='error_600'
        >
          prueba
        </Text>{' '}
        e=mc<Text variant='sup'>2</Text>
      </Text>
      <Input
        type='email'
        fontFamily='poppins'
        placeholder='Email'
        focusColor='blue_700'
        borderColor='blue_200'
        borderFocusColor='blue_500'
      />
      <Button
        borderColor='blue_200'
        bgColor='blue_600'
        hovborderColor='brand_200'
        fontFamily='poppins'
        hovBgColor='brand_600'
      >
        Hello world
      </Button>
      <Avatar
        alt='Avatar'
        bRad='br_full'
        src='https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        onErrorImg='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        isOnline
      />
      <div style={{ display: 'flex' }}>
        <Button
          borderColor='blue_200'
          bgColor='blue_600'
          hovborderColor='brand_200'
          fontFamily='poppins'
          hovBgColor='brand_600'
        >
          Hello world
        </Button>
        <div style={{ marginLeft: '100px' }}>
          <Container
            elementType='section'
            height='300px'
            hovBgColor='bg_brand_600'
            width='300px'
          >
            Hello world
            <Button
              hovColor='gray_900'
              borderColor='blue_200'
              bgColor='blue_600'
              hovborderColor='brand_200'
              fontFamily='poppins'
              hovBgColor='brand_600'
            >
              Hello world
            </Button>
          </Container>
          <Dropdown
            activator={
              <Text
                variant='label'
                cursor='pointer'
              >
                jdfjsdjfds
              </Text>
            }
          >
            <ul>
              <li>Opción 1</li>
              <li>Opción 2</li>
              <li>Opción 3</li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default App
