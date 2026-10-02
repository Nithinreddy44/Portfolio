import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { CodeInspector } from './components/CodeInspector';
import { SkillsSection } from './components/SkillsSection';
import { EngineeringPlayground } from './components/EngineeringPlayground';
import { Terminal } from './components/Terminal';
import { CertificationsSection } from './components/CertificationsSection';
import { GithubSection } from './components/GithubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-brand-500/30 selection:text-brand-300">
          {/* Custom Cursor for Desktop */}
          <CustomCursor />

          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Fixed Sticky Header Navigation */}
          <Navbar />

          {/* Main Content Sections */}
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <About />
            <ExperienceTimeline />
            <ProjectsSection />
            <CodeInspector />
            <SkillsSection />
            <EngineeringPlayground />
            <Terminal />
            <CertificationsSection />
            <GithubSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </SoundProvider>
    </ThemeProvider>
  );
}

export default App;
