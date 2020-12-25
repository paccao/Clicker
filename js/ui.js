import { find } from './util'

const showAction = ({ title }) => `
    <span>${title}</span>
`

export function showAfternoon(actions = []) {
    find('#afternoon-div').innerHTML = actions.map(showAction).join('')
}

// showNextDay function (update span element in day-number)

// Show morning

// Show evening
