import React from 'react'
import { setNotification, deleteNotification } from '../reducers/notificationReducer'
import { vote } from '../reducers/anecdoteReducer'

class AnecdoteList extends React.Component {

  anecdotesToShow() {
    return this.props.store.getState()
      .anecdotes
      .filter(x => x.content.includes(this.props.store.getState().filter))
  }

  render() {
    const anecdotes = this.anecdotesToShow()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.store.dispatch(vote(anecdote.id))
                this.props.store.dispatch(setNotification(`Äänestit anekdoottia: ${anecdote.content}`))
                setTimeout(() =>
                  this.props.store.dispatch(deleteNotification()),
                  5000)
              }
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
