import { useSession, signIn, signOut } from "next-auth/react"
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

export default function Signin() {
  
  const signInWithGithub = () => {
    signIn("github",{callbackUrl:"http://localhost:3000"})
  }
  const signInWithGoogle = () => {
    signIn("google",{callbackUrl:"http://localhost:3000"})
  }
  return (
    <div className="p-4 flex justify-center h-screen items-center">
      <div className="flex flex-col w-full sm:w-3/5 lg:w-2/5  p-4 mx-auto gap-4 ">
      <button className="rounded-md p-2 md:p-4 bg-black text-white text-md md:text-2xl font-medium flex items-center justify-center gap-2" onClick={signInWithGithub}><GitHubIcon/>Sign in with Github</button>
      {/* <GoogleIcon/> */}
      <button className="p-2 md:p-4 text-md md:text-2xl flex items-center justify-center gap-2 bg-red-600 rounded-md text-white font-medium" onClick={signInWithGoogle}><GoogleIcon/>Sign in with Google</button>
      </div>
    </div>
  )
}