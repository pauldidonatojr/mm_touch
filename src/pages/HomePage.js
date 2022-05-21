import styled from 'styled-components'
import { Hero, Services, Filler, Reviews } from '../components'

function HomePage() {
 return (
  <Wrapper>
   <Hero />
   <Services />
   <Filler />
   <Reviews />
  </Wrapper>
 )
}

const Wrapper = styled.div`
 display: grid;

 grid-gap: 2rem;

 background-color: var(--clr-black);
`
export default HomePage
