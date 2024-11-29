"use client"
import React from 'react'
import axios from 'axios';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react';

// this one below doesn't work correctly with the mixed routing setup we are using
// import { useRouter } from 'next/router';
// This is the router that is working correctly with our setup
import { useRouter } from 'next/navigation';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function Auth() {
  const router = useRouter();

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [variant, setVariant] = React.useState('login');

  const toggleVariant = React.useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, [])

  React.useEffect(() => {
    console.log(router)
  }, [])

  const login = React.useCallback( async() => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        fallbackCallbackUrl: '/'
      })

      // console.log(router)
      router.push('/');

    } catch (error) {
      console.log(error)
    }
  }, [email, password])

  const register = React.useCallback( async() => {
    try {
      await(axios.post('/api/register', {
        email,
        name,
        password
      }))

      login();

    } catch (error) {
      console.log(error);
    }
  }, [email, name, password])

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.png")] bg-no-repeat bg-center bg-fixed bg-cover'> 
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <div className='px-12 py-5'>
          <img src='/images/logo.png' alt='Logo' style={{ height: "10rem", marginTop: "-2rem"}} className='absolute top-0 left-4' />
        </div>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-8 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <div className='relative'>
                  <Input 
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='
                      block 
                      rounded 
                      px-6 
                      pt-6 
                      pb-4 
                      w-full 
                      text-md 
                      text-white 
                      bg-neutral-700 
                      appearance-none 
                      focus:outline-none 
                      focus:ring-0 
                      peer
                    ' 
                    placeholder=' ' 
                  />
                  <label
                    htmlFor="name"
                    className='
                      absolute
                      text-md
                      text-zinc-400
                      duration-150
                      transform
                      -translate-y-3
                      scale-75
                      top-4
                      z-10
                      origin-[0]
                      left-6
                      peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0
                      peer-focus:scale-75
                      peer-focus:-translate-y-3
                    '  
                  >
                    Username
                  </label>
                </div>
              )}
                <div className='relative'>
                  <Input 
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='
                      block 
                      rounded 
                      px-6 
                      pt-6 
                      pb-4 
                      w-full 
                      text-md 
                      text-white 
                      bg-neutral-700 
                      appearance-none 
                      focus:outline-none 
                      focus:ring-0 
                      peer
                    ' 
                    placeholder=' ' 
                  />
                  <label
                    htmlFor="email"
                    className='
                      absolute
                      text-md
                      text-zinc-400
                      duration-150
                      transform
                      -translate-y-3
                      scale-75
                      top-4
                      z-10
                      origin-[0]
                      left-6
                      peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0
                      peer-focus:scale-75
                      peer-focus:-translate-y-3
                    '  
                  >
                    Email
                  </label>
                </div>
              <div className='relative'>
                <Input 
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='
                    block 
                    rounded 
                    px-6 
                    pt-6 
                    pb-4 
                    w-full 
                    text-md 
                    text-white 
                    bg-neutral-700 
                    appearance-none 
                    focus:outline-none 
                    focus:ring-0 
                    peer
                  ' 
                  placeholder=' ' 
                />
                <label
                  htmlFor="password"
                  className='
                    absolute
                    text-md
                    text-zinc-400
                    duration-150
                    transform
                    -translate-y-3
                    scale-75
                    top-4
                    z-10
                    origin-[0]
                    left-6
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-3
                  '  
                >
                  Password
                </label>
              </div>
              <Button onClick={variant === 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md mt-10 hover:bg-red-700 transition'>
                {variant === 'register' ? 'Register' : 'Log in'}
              </Button>
              <div className='flex flex-row justify-center items-center gap-4 mt-8'>
                <div 
                  className="
                    w-10 
                    h-10 
                    bg-white 
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                  ">
                    <FcGoogle size={30} />
                </div>
                <div 
                  onClick={() => signIn('github', { callbackUrl: '/' })}
                  className="
                    w-10 
                    h-10 
                    bg-white 
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                  ">
                    <FaGithub size={30} />
                </div>
              </div>
              <div className="text-neutral-500 mt-12">
                {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                <span onClick={() => toggleVariant()} className='text-white mt-1 hover:underline cursor-pointer ml-1'>
                  {variant === 'login' ? 'Create an account' : 'Login'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
