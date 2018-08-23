import * as React from 'react'
import * as kQuery from 'kquerysma'
import style from './style'

export default class Ex3 extends React.Component {
  execute(): void {
    kQuery('.remove').remove()
  }

  clear(): void {
    if (kQuery('.remove').get().length === 0) {
      kQuery('#example3').append('<div class="remove">I will disappear</div>')
    }
  }

  render(): JSX.Element {
    return (
      <div className={style.example}>
        <div id="example3">
          <span className="itemReplacement">Hello</span>
          <span className="itemReplacement">World!</span>
          <div className="remove">I will disappear</div>
        </div>

        <div className={style.action}>
          <div className={style.instruction}>kQuery('.remove') .remove()</div>
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
