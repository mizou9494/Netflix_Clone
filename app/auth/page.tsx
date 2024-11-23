"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Auth() {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.png")] bg-no-repeat bg-center bg-fixed bg-cover'> 
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <div className='px-12 py-5'>
          <img src='/images/logo.png' alt='Logo' className='h-20 absolute top-0 left-4' />
        </div>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              Sign In
            </h2>
            <div className="flex flex-col gap-4">
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
                  Username
                </label>
              </div>
              <div className='relative'>
                <Input 
                  type='password'
                  id='password'
                  value={password}
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
              <Button className='bg-red-600 py-3 text-white rounded-md mt-10 hover:bg-red-700 transition'>
                Sign In
              </Button>
              <div className="text-neutral-500 mt-12">
                First time using Netflix?
                <span className='text-white mt-1 hover:underline cursor-pointer ml-1'>
                  Create an account
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
