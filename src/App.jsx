import SiteHeader from './components/SiteHeader.jsx'
import HeroSection from './components/HeroSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import FeaturedProject from './components/FeaturedProject.jsx'
import DesignSection from './components/DesignSection.jsx'
import EducationContact from './components/EducationContact.jsx'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <FeaturedProject />
        <DesignSection />
        <EducationContact />
      </main>
    </>
  )
}

export default App
