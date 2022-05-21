import React from 'react'
import styled from 'styled-components'
function Filler() {
 return (
  <Wrapper>
   <div>Filler</div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 min-height: 30vh;
 background: var(--clr-white);
`
export default Filler
