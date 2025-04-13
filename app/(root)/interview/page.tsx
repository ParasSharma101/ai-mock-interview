import React from 'react'
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import Agent from '@/components/Agent';

const page = () => {
  return (
    <>
        <h3>Interview Generation</h3> 
        <Agent userName="You" userId="user1" type="generate" />
    </>
  )
}

export default page