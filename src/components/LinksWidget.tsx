import React from 'react'
import LinkedinVector from '../assets/linkedin.svg'
import GithubVector from '../assets/github.svg'

export default function LinksWidget() {
  return (
   <div className="flex flex-col fixed left-[50px] bottom-[100px] gap-[24px]">
        <img src={LinkedinVector} className="w-[50px] h-[50px]"/>
        <img src={GithubVector} className="w-[50px] h-[50px]"/>
   </div>
  )
}