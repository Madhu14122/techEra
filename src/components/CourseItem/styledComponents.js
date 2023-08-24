import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #f1f5f9;
  padding: 20px;
  min-height: 10vh;
  width: 100%;
`

export const Logo = styled.img`
  height: 60px;
  width: 150px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const FailImg = styled.img`
  height: 250px;
  width: 250px;
`

export const FailureHeading = styled.h1`
  color: #1e293b;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const FailureParagraph = styled.p`
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
`

export const FailureButton= styled.button`
  background-color: #4656a1;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  padding: 7px;
  border-radius: 3px;
`
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
`

export default Nav
