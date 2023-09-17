import LinkedinVector from '../assets/linkedin.svg'
import GithubVector from '../assets/github.svg'
import MediumVector from '../assets/medium.svg'

export default function LinksWidget() {
  return (
   <div className="flex flex-col fixed md:left-[50px] bottom-0 md:bottom-[100px] md:gap-[24px]">
        <img onClick={()=>{
          window.open("https://linkedin.com/in/codercor","_blank")
        }} src={LinkedinVector} className="md:w-[50px] w-[30px] hover:scale-125 cursor-pointer transition-all"/>
        <img onClick={()=>{
          window.open("https://github.com/codercor","_blank")
        }} src={GithubVector} className="md:w-[50px] w-[30px] hover:scale-125 cursor-pointer transition-all"/>
        <img onClick={()=>{
          window.open("https://codercor.medium.com","_blank")
        }} src={MediumVector} className="md:w-[50px]  w-[30px] hover:scale-125 cursor-pointer transition-all"/>
   </div>
  )
}