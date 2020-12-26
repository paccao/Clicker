import { find } from './util'

const showAction = ({ title }) => `
    <span>${title}</span>
`

export function showAfternoon(actions = []) {
    find('#afternoon-div').innerHTML = actions.map(showAction).join('')
}

export function showNextDay(dayNumber = 0) {
    find('.day').innerText = dayNumber
}

// Show morning

// Show evening
