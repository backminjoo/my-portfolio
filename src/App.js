import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Project } from './components/Project'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Activities } from './components/Activities'
function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Project />
            <Education />

            {/* <Activities /> */}
            <Footer />
        </div>
    )
}

export default App
