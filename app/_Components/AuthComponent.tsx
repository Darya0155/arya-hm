"use client"
import React from 'react'
import output from "@/amplify_outputs.json"
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure( output)



export default function AuthComponent({children}: {children?: React.ReactNode}) {
  return (
    <Authenticator >
        {children}
    </Authenticator>
   
  )
}
