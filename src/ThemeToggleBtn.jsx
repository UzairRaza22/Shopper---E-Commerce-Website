import React, { useEffect } from 'react'
import sun_icon from './assets/sun_icon.svg'
import moon_icon from './assets/moon_icon.svg'


const ThemeToggleBtn = ({theme , setTheme}) => {

    useEffect(()=> {
        const prefersDarkMode= window.matchMedia('(prefers-color-scheme: dark').matches
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    } ,[])

    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])
  return (
    <>
    <button>
        {theme === 'dark' ? (
            <img onClick={()=> setTheme('light')} src={sun_icon}
            className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />
        ) : (
           <img onClick={()=> setTheme('dark')} src={moon_icon}
            className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />
        )}
    </button>
      
    </>
  )
}

export default ThemeToggleBtn
