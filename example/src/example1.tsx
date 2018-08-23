import * as React from 'react'
import * as kQuery from 'kquerysma'
import style from './style'

export default class Ex1 extends React.Component {
  execute(): void {
    kQuery('.item')
      .replaceWith(kQuery('.itemReplacement'))
      .style({ color: 'red' })
  }

  clear(): void {
    // TODO: create a methods for that in kQuery
    if (document.getElementById('example1') && kQuery('.item').get().length === 0) {
      kQuery('#example1').append('<div class="item">Some</div>' + '<div class="item">Item</div>', 'afterbegin')
      kQuery('.itemReplacement').style({ color: 'black' })
    }
  }

  render(): JSX.Element {
    return (
      <div className={style.example}>
        <div id="example1">
          <div className="item">Some</div>
          <div className="item">Item</div>

          <span className="itemReplacement">Hello</span>
          <span className="itemReplacement">World!</span>
        </div>

        <div className={style.action}>
          <div className={style.instruction}>
            kQuery('.item') .replaceWith(kQuery('.itemReplacement')) .style(
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
