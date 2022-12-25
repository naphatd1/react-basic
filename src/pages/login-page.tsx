import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormErrorMessage,
    useToast,
  } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormInput } from '../app-types/login-form-input.type';
import { useNavigate} from 'react-router-dom';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
  export default function LoginPage() {
const toast = useToast()
    const schema = yup.object().shape({
      email: yup.string().required('Input Email').email('email ไม่ถูกต้อง'),
      password: yup.string().required('Input Password').min(3,'รหัสผ่าน 3 ตัวขึ้นไป')
    })

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormInput>({
      resolver: yupResolver(schema),
      mode: 'all'
    });
    const onSubmit = (data: LoginFormInput) => 
    // console.log(data);
    toast({
      title: 'ผลการทำงาน',
      description: JSON.stringify(data),
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right'

      
    })
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Login Page';
      }, []);
    return (
      <form onSubmit= {handleSubmit(onSubmit)} noValidate action="">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={errors.email ? true : false}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
                <FormErrorMessage>
                  {errors.email && errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password ? true : false}>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")} />
                <FormErrorMessage>
                  {errors.password && errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button 
                isLoading={isSubmitting}
                loadingText="กำลังเข้าระบบ..."
                  type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Log In
                </Button>
                <Button
                onClick={() => {
                  navigate('/')
                }}
                  bg={'yellow.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Back Home
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </form>
    );
  }
  