import './App.css'
import HeroImage from './components/Hero Image';
import About from './components/About';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <HeroImage></HeroImage>
      <About></About>
    </div>
  )
}

export default App
