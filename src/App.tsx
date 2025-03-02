import './App.css'
import HeroImage from './components/Hero Image';
import SectionTitle from './components/Section Title';
import WorkCard from './components/Work Card';
import { DummyWorkUrl } from './constants/workcard';
import Work from './components/Work';
import SectionGrid from './components/SectionGrid';

function App() {
  return (
    <div>
      <HeroImage></HeroImage>
      <SectionGrid>
        <SectionTitle>
          About
        </SectionTitle>
        <div className='flex-2 text-2xl/8 font-normal text-gray-900 bg-white justify-end pr-20'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br />
            velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
      </SectionGrid>

      <SectionGrid>
        <SectionTitle>
            Recent Work
          </SectionTitle>
          <div className='flex-2 text-2xl/8 font-normal text-gray-900 bg-white justify-end pr-20'>
            <div>
              {DummyWorkUrl.map((workcard) => (
                <WorkCard key={workcard.title}>
                  <Work {...workcard}/>
                </WorkCard>
              ))}
            </div>
          </div>
      </SectionGrid>
    </div>
  )
}

export default App
