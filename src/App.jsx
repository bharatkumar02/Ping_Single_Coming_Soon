import React,{useState, useRef} from 'react';
import ping_Image from './assets/illustration-dashboard.png';
import logo from './assets/logo.svg';
import twitter from './assets/twitter.svg';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import twitterHover from './assets/twitterHover.svg';
import facebookHover from './assets/facebookHover.svg';
import instagramHover from './assets/instagramHover.svg';
function App() {

  const yourEmail = useRef('');
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e){
    e.preventDefault();
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailCheck.test(yourEmail.current.value)){
      setValidEmail(true);
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 2000);

    }

    else{
      setValidEmail(false);
    }

  }

  return (
    <>
      <section className='flex justify-center items-center flex-col gap-10 bg-gray-50 pt-20 px-6 md:px-36 lg:px-64 xl:px-96 min-h-screen h-full'>
        <header>
          <img src={logo} alt="logo"/>
        </header>
        <main className='flex flex-col justify-center items-center gap-8'>
          <div className='text-center'>
            <h1 className='text-[1.8rem] md:text-[2.6rem] text-gray-400 pb-4'>
              We are launching <span className='font-bold text-gray-800'>soon!</span>
            </h1>
            <p className='text-gray-700'>Subscribe and get notified</p>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[85%] md:flex-row relative mb-2'>
            <input ref={yourEmail} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email address..." className={`border-2 rounded-full p-3 px-5 ${validEmail ? "border-gray-400 focus:border-gray-300" : "border-red-400"} outline-none  transition-all duration-300 ease-in-out md:w-[70%]`}/>
            <button className='rounded-full p-3 bg-blue-600 text-gray-50 bg-opacity-90 shadow-md shadow-blue-200 hover:bg-opacity-75 transition-all duration-300 ease-in-out hover:shadow-none md:w-[30%]'>Notify Me</button>

            <p className={`absolute left-5 -bottom-6 ${validEmail ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}  text-red-400 transition-all duration-200 ease-in`}><i>Please provide a valid email address</i></p>

            <p className={`absolute left-5 -bottom-6 ${!submitted ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}  text-red-400 transition-all duration-200 ease-in`}>Submitted!!</p>
          </form>
          
          <div>
            <img src={ping_Image} alt="Ping_Image" />
          </div>
        </main>
        <footer className='pb-10'>
          <div className="flex flex-col gap-6 items-center text-gray-400">
            <ul className="flex justify-center gap-7 *:border *:rounded-full *:p-2 *:border-gray-300 *:w-[19%] *:cursor-pointer">
              <li className='group transition-all duration-200 ease-in-out hover:bg-blue-600 hover:bg-opacity-90 hover:-translate-y-1'>
                <img src={facebook} alt="Facebook" className='group-hover:hidden'/>
                <img src={facebookHover} alt="facebook" className='hidden group-hover:block' />
              </li>
              <li className='group transition-all duration-200 ease-in-out hover:bg-blue-600 hover:bg-opacity-90 hover:-translate-y-1'>
                <img src={twitter} alt="Twitter" className='group-hover:hidden'/>
                <img src={twitterHover} alt="Twitter" className='hidden group-hover:block' />
              </li>
              <li className='group transition-all duration-200 ease-in-out hover:bg-blue-600 hover:bg-opacity-90 hover:-translate-y-1'>
                <img src={instagram} alt="Instagram" className='group-hover:hidden'/>
                <img src={instagramHover} alt="Instagram" className='hidden group-hover:block' />
              </li>
            </ul>
            <p>&copy; Copyright Ping. All rights reserved.</p>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
