import styled from 'styled-components'

function Footer() {
 return (
  <Wrapper>
   <div>Footer</div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 position: absolute;
 bottom: 0;
 width: 100%;
 height: 4.5rem;
 background-color: blue;

`
export default Footer
