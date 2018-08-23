import * as React from 'react'
import * as kQuery from 'kquerysma'
import style from './style'

export default class Ex2 extends React.Component {
  execute(): void {
    kQuery('.append')
      .append('<span> I am new </span>')
      .style({ color: 'red' })
  }

  clear(): void {
    kQuery('#example2')
      .find('span')
      .remove()

    kQuery('.append').style({ color: 'black' })
  }

  render(): JSX.Element {
    return (
      <div className={style.example}>
        <div id="example2">
          <div className="append">Some</div>
          <div className="append">Item</div>
        </div>

        <div className={style.action}>
          <div className={style.instruction}>
            kQuery('.append') .append(
            {'<span> I am new </span>'}) .style(
            {"{color: 'red'}"})
          </div>
          <button onClick={() => this.execute()} className={style.button}>
            {' '}
            Execute{' '}
          </button>
          <button onClick={() => this.clear()} className={style.button}>
            {' '}
            Clear{' '}
          </button>
        </div>
      </div>
    )
  }
}
