import Popup from 'reactjs-popup'
import {Component} from 'react'
import PopupComponent from './components/PopupComponent'
import {
  JustContainer,
  Container,
  GameContainer,
  Heading,
  ScoreContainer,
  ButtonsContainer,
  Button,
  Image,
  Paragraph,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isPlaying: true,
    choice: '',
    result: '',
    opponentChoice: '',
  }

  playGame = event => {
    const opponentChoice = choicesList[Math.floor(Math.random() * 3)].id
    const choice = event.target.alt
    console.log(choice)
    console.log(opponentChoice)

    if (
      (choice === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (choice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (choice === 'PAPER' && opponentChoice === 'ROCK')
    ) {
      this.setState(prev => ({
        isPlaying: false,
        result: 'YOU WON',
        score: prev.score + 1,
        choice,
        opponentChoice,
      }))
    } else if (choice === opponentChoice) {
      this.setState({
        isPlaying: false,
        result: 'IT IS DRAW',
        choice,
        opponentChoice,
      })
    } else {
      this.setState(prev => ({
        isPlaying: false,
        result: 'YOU LOSE',
        score: prev.score - 1,
        choice,
        opponentChoice,
      }))
    }
  }

  playAgain = () => {
    this.setState({isPlaying: true})
  }

  renderResultsView = () => {
    const {choice, result, opponentChoice} = this.state
    const you = choicesList.filter(c => c.id === choice)[0]
    console.log(you)
    const opponent = choicesList.filter(c => c.id === opponentChoice)[0]
    console.log(opponent)
    return (
      <JustContainer>
        <JustContainer>
          <JustContainer>
            <Heading>You</Heading>
            <Image src={you.imageUrl} alt="your choice" />
          </JustContainer>
          <JustContainer>
            <Heading>Opponent</Heading>
            <Image src={opponent.imageUrl} alt="opponent choice" />
          </JustContainer>
        </JustContainer>
        <Paragraph>{result}</Paragraph>
        <Button type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </Button>
      </JustContainer>
    )
  }

  render() {
    const {score, isPlaying} = this.state
    return (
      <Container>
        <GameContainer>
          <Heading>Rock Paper Scissors</Heading>
          <ScoreContainer>
            <Paragraph>Score</Paragraph>
            <Paragraph>{score}</Paragraph>
          </ScoreContainer>
        </GameContainer>
        {isPlaying ? (
          <ButtonsContainer>
            {choicesList.map(button => (
              <Button
                type="button"
                onClick={this.playGame}
                data-testid={`${button.id.toLowerCase()}Button`}
                key={button.id}
              >
                {/* <p>{`${button.id.toLowerCase()}Button`}</p> */}
                <Image src={button.imageUrl} alt={button.id} />
              </Button>
            ))}
          </ButtonsContainer>
        ) : (
          this.renderResultsView()
        )}

        <Popup modal trigger={<Button type="button">Rules</Button>}>
          {close => <PopupComponent status={close} />}
        </Popup>
      </Container>
    )
  }
}

export default App
