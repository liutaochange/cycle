import {run} from '@cycle/run'
import {makeDOMDriver, div, input, p} from '@cycle/dom'
import {App} from './app'

const main = App

const drivers = {
  DOM: makeDOMDriver('#root')
}

run(main, drivers)
