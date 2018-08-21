import {html} from 'snabbdom-jsx';
export function App (sources) {
  const sinks = {
    DOM: sources.DOM.select('input').events('click')
    .map(ev => ev.target.checked)
    .startWith(false)
    .map(toggled =>
      <div>
        <input type="checkbox" /> Toggle me
        <p>{toggled ? 'ON' : 'off'}</p>
      </div>
    )
  }
  return sinks
}
