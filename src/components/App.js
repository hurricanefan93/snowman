import React, { Component } from 'react'
import _ from 'lodash'
import LetterButton from './LetterButton'
import Snowman from './Snowman'
import Word from './Word'
import Button from './Button'

// ALPHABET is an array of 26 letters, 'a' through 'z', i.e. ['a', 'b', 'c', ...'z']
const ALPHABET = _.range(26).map(i => String.fromCharCode(i + 97))

// WORDS is an array of 1024 different seven letter words
const WORDS = require('raw!../wordList.txt').trim().split('\n')

class App extends Component {
  state = {
      word: _.sample(WORDS),
      guesses: []
    }

  reset = () => {
    this.setState({
      word: _.sample(WORDS),
      guesses: []
    })
  }

  choose (letter) {
    // console.log('you clicked', letter)
    this.setState({
      guesses: [...this.state.guesses, letter],

    })
  }

  get points () {
    return this.state.word.split('').filter((letter) => {
      return this.state.guesses.includes(letter)
    }).length
  }

  render () {
    const letter = ALPHABET.map((letter, i) => {
      return <LetterButton
        value={letter}
        onChoose={() => this.choose(letter)}
        disabled={this.state.guesses.includes(letter)}
        key={i}
        />
    })
    return <div className='app'>
      <main>
        <div className='counter'>{this.points}</div>
        <Word value={this.state.word} guesses={this.state.guesses} />
        <div className='keyboard'>
          {letter}
        </div>
        <Button reset={this.reset} />
      </main>
      <footer>Its like hangman, but, um... backwards or something.</footer>
    </div>
  }
}


export default App
