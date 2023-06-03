import styled from 'styled-components'

export const JustContainer = styled.div``

export const Container = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  margin: 0px;
  padding: 40px;
  color: white;
`

export const GameContainer = styled.div`
  border: 5px solid white;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  color: white;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
`

export const ScoreContainer = styled.div`
  background-color: white;
  color: black;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
`

export const ButtonsContainer = styled(Container)`
  background-color: transparent;
`

export const Paragraph = styled.p`
  font-size: 20px;
  font-family: Roboto;
`

export const Button = styled.button``

export const Image = styled.img`
  width: 100px;
  height: 100px;
`
