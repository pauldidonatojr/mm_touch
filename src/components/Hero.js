import styled from 'styled-components'

function Hero() {
 return (
  <Wrapper>
   <div className="container">
    <div>
     <h1> Welcome </h1>
     <span style={{marginLeft: '0.5rem'}}>
      <button type="button" className="btn">
       Contact us today
      </button>
     </span>
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 min-height: 60vh;
 background: var(--clr-grey-8);
 display: grid;
 justify-content: center;
 align-items: center;

 .container {
  height: 25rem;
  width: 20rem;
  padding: 2rem;
  background-color: var(--clr-black);
  box-shadow: var(--light-shadow);
  display: grid;
  justify-content: center;

  div {
   display: grid;
   justify-content: center;
   margin-left: 2rem;
   grid-gap: 7rem;
  }
 }
 h1 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-size: 3rem;
  color: white;
 }
 @media (min-width: 576px) {
  .container {
   height: 25rem;
   width: 20rem;
  }
 }
 @media only screen and (max-width: 600px) {
  .container {
   height: 28rem;
   width: 23rem;
  }
 }

 @media only screen and (min-width: 600px) {
  .container {
   height: 28rem;
   width: 25rem;
  }
 }

 @media only screen and (min-width: 768px) {
  .container {
   height: 28rem;
   width: 32rem;
  }
 }

 @media (min-width: 992px) {
  .container {
   height: 28rem;
   width: 34rem;
  }
 }

 @media (min-width: 1280px) {
  .container {
   height: 28rem;
   width: 35rem;
  }
 }
`
export default Hero
