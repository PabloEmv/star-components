import { Button } from './stories/Button/Button'
import { Container } from './stories/Container/Container'
import { Input } from './stories/Input/Input'
import { Text } from './stories/Text/Text'

function App() {
  return (
    <Container
      style={{ height: '100vh' }}
      variant='main'
      customStyles={{
        flex: {},
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray_100'
      }}
    >
      <Container
        variant='form'
        customStyles={{
          borderRadius: { radius: 'md' },
          borderColor: 'gray_200',
          backgroundColor: 'white',
          color: 'gray_700',
          fontFamily: 'poppins',
          padding: {
            paddingY: 'lg',
            paddingX: 'xl'
          },
          flex: {
            direction: 'column'
          },
          gap: '8',
          borderWidth: 'lg'
        }}
        style={{
          width: '280px'
        }}
      >
        <Text
          variant='h1'
          customStyles={{ fontSize: 'xl', textAlign: 'center' }}
        >
          Iniciar Sesión
        </Text>
        <Container
          variant='div'
          customStyles={{
            flex: {
              direction: 'column'
            }
          }}
        >
          <Text variant='label' htmlFor='username'>
            Nombre de Usuario
          </Text>
          <Input type='text' id='username' />
        </Container>
        <Container
          variant='div'
          customStyles={{
            flex: {
              direction: 'column'
            }
          }}
        >
          <Text variant='label' htmlFor='email'>
            Email
          </Text>
          <Input type='email' id='email' />
        </Container>
        <Container
          variant='div'
          customStyles={{
            flex: {
              direction: 'column'
            }
          }}
        >
          <Text variant='label' htmlFor='password'>
            Nombre de Usuario
          </Text>
          <Input type='password' id='password' />
        </Container>
        <Container
          variant='div'
          customStyles={{ flex: {}, justifyContent: 'center' }}
        >
          <Button customStyles={{}}>Iniciar Sesión</Button>
        </Container>
      </Container>
    </Container>
  )
}

export default App
