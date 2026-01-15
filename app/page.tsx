"use client"
import { useAuthenticator } from "@aws-amplify/ui-react";
import Image from "next/image";

export default function Home() {

  const {user,signOut} = useAuthenticator((context) => [context.user]);
  console.log(user)
  return (
    <div >
      {user.userId}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
