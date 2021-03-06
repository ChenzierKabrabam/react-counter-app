import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Fab from '@material-ui/core/Fab'
import * as AiIcons from 'react-icons/ai'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
  root: {
    minWidth: 230,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '200px auto',
  },
  text: {
    fontSize: 38,
    fontWeight: 'bolder',
  },
})

function App() {
  const classes = styles()
  let [count, setCount] = React.useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count !== 0) {
      setCount(count - 1)
    }
  }

  const handleReset = () => {
    if (count !== 0) {
      setCount((count = 0))
    }
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <h1 className={classes.text}>{count}</h1>
      </CardContent>

      <CardActions>
        <Fab
          aria-label='add'
          onClick={handleDecrement}
          color='primary'
          disabled={count === 0 ? 'disabled' : ''}
        >
          <AiIcons.AiOutlineMinus />
        </Fab>

        <Fab color='primary' aria-label='edit' onClick={handleIncrement}>
          <AiIcons.AiOutlinePlus />
        </Fab>

        <Fab
          variant='extended'
          aria-label='clear'
          color='secondary'
          disabled={count === 0 ? true : false}
          onClick={handleReset}
        >
          <h2>Reset</h2>
        </Fab>
      </CardActions>
    </Card>
  )
}

export default App
