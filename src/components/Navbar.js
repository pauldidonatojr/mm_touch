import styled from 'styled-components'

function Navbar() {
    return (
     <Wrapper>
      <div>Navbar</div>
     </Wrapper>
    )
}

const Wrapper = styled.div`
 min-height: 5vh;
 padding: 1.5rem;
 width: 100%;
 background-color: lightblue;
 background: var(--clr-white);
 box-shadow: var(--light-shadow);
`
export default Navbar
