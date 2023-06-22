import { AppHeader } from './components/AppHeader'
import { HeroSection } from './pages/HeroSection'
import { AboutSection } from './pages/AboutSection'
import { SkillsSection } from './pages/SkillsSection'
import { FeaturedProjects } from './pages/FeaturedProjects'
import { Recommendations } from './pages/Recommendations'
import { Contact } from './pages/Contact'
import { AppFooter } from './components/AppFooter'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('dark')
  
  const handleChangeTheme = () => {
    document.body.classList.toggle('light__theme')   
    setTheme(theme === 'dark' ? 'light' : 'dark') 
}

  return (
    <div>
      <AppHeader changeTheme={handleChangeTheme}/>
      <main className='main'>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <FeaturedProjects /> 
        <Recommendations/>
        <Contact/>
        <AppFooter/>

      </main>
    </div>
  )
}

export default App
