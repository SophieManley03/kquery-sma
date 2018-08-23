import { style } from 'typestyle'
import { rem } from 'csx'

export default {
  example: style({
    width: 550,
    padding: '20px 30px 70px 30px',
    margin: 10,
    border: '1px solid black',
    borderRadius: 5,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  }),

  button: style({
    display: 'flex',
    height: 25,
    borderRadius: 5,
    marginLeft: 15,
  }),

  action: style({
    position: 'absolute',
    bottom: 25,
    left: 30,
    display: 'flex',
    alignItems: 'baseline',
  }),

  instruction: style({
    color: '#909090',
    fontStyle: 'italic',
    fontSize: rem(0.8),
    marginBottom: 10,
  }),
}
