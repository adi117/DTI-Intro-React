import '../../App.css'
import HeroImage from '../../components/Hero Image';
import SectionTitle from '../../components/Section Title';
import WorkCard from '../../components/Work Card';
import { DummyWorkUrl } from '../../constants/workcard';
import Work from '../../components/Work';
import SectionGrid from '../../components/SectionGrid';
import { DummyTestimonials } from '../../constants/testimonialcard';
import Testimonials from '../../components/Testimonial';
import TestimonialCard from '../../components/Testimonial Card';
import { WorkImageUrl } from '../../constants/workimage';
import CarouselWorkImage from '../../components/Carousel Work';


const About = () => {
    return (
        <div className='flex flex-col gap-40 bg-white'>
          <HeroImage></HeroImage>
          <SectionGrid>
            <SectionTitle>
              About
            </SectionTitle>
            <div className='flex-2 font-normal text-gray-600 bg-white justify-end pr-20'>
              <p className='about-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
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
          <div className='flex flex-col gap-10'>
            <div className='w-full overflow-x-auto no-scrollbar'>
              <div className='flex gap-10 min-w-max'>
                {WorkImageUrl.map((imageurl) => (
                    <CarouselWorkImage key={imageurl.id} {...imageurl} />
                  ))}
              </div>
            </div>
            <div className='w-full overflow-x-auto no-scrollbar'>
              <div className='flex gap-10 min-w-max'>
                {WorkImageUrl.map((imageurl) => (
                    <CarouselWorkImage key={imageurl.id} {...imageurl} />
                  ))}
              </div>
            </div>
          </div>
          <SectionGrid>
            <SectionTitle>
                Testimonials
              </SectionTitle>
              <div className='flex-2 text-2xl/8 font-normal text-gray-900 bg-white justify-end pr-20'>
                <div className='flex flex-col gap-y-16'>
                  {DummyTestimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.username}>
                      <Testimonials {...testimonial}/>
                    </TestimonialCard>
                  ))}
                </div>
              </div>
          </SectionGrid>
          <footer className='flex flex-col bg-black p-20 pb-0 gap-36'>
            <div className='flex text-6xl font-medium items-center justify-between'>
                <div className='flex flex-col gap-2'>
                  <div className=''>
                    Have something in mind?
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src="https://s3-alpha-sig.figma.com/img/81ed/7be0/0cf7ff47fc052eb38343290bf9c3390c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DHRC8R6lk3gYYwk0Fke7Ao3lWXe4QgrMCBzcPAka0OAQTG-Xy6XVJP~43lYuvQoRURLgUAOuKlbbx1TN67MAdj1eJr2EJhYj5VDTfTOnp-AqY-AxjJD45dNEM3FMvaqE5jTqHHSKiJpd3LA-ihzID~HHDFh1IUs1wmDMU8fepDZwZoUFTw2klATdURJGViUr1903-0xiW6wO4s3dqB8DZAs91Ure3ofk8tZ9Ez71N-0Naki3J8uZPBnQfQvdmTdpRv2goOJ1kJwn-dTfpqiPzuKMVPeeHml3zfyhbAlDQG1Gqx1dtTnv8mrgoDZz-rICpDKxDJ5yLaUt6Vtfs6T1fg__" alt="" className='w-20 h-20 object-fill rounded-full'/>
                    let’s build it together.
                  </div>
                </div>
                <div className='flex content-end items-end'>
                  <button className='!rounded-full px-12 py-6 !bg-white !text-black !text-lg'>Get in touch</button>
                </div>
            </div>
            <div className='flex justify-between pb-8'>
              <div>
                Build with 💖 by Brightscout & Ayush 
              </div>
              <ul className='flex gap-8'>
                <li><a href=""></a>LinkedIn</li>
                <li><a href=""></a>Twitter</li>
                <li><a href=""></a>Instagram</li>
                <li><a href=""></a>Webflow</li>
              </ul>
            </div> 
          </footer>
        </div>
      );
}

export default About;