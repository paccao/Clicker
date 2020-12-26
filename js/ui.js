import { find, show, hide } from './util'

export const UI = {
    day: find('.day'),
    time: find('.time'),
    actions: find('#actions'),
    morning: find('#morning'),
    afternoon: find('#afternoon'),
    evening: find('#evening'),
}

const showAction = ({ title }) => `
    <span>${title}</span>
`

export function showNextDay(dayNumber = 1) {
    UI.day.innerText = dayNumber
}

export function showMorning() {
    UI.time.innerText = 'Morning'
    hide(UI.evening)
    show(UI.morning)
    // Type out text for the RNG number
    // "Get ready, in 3.. 2.. 1.."

    // After click"phase" is over, type out something like "time's up"
}

export function showAfternoon(actions = []) {
    UI.actions.innerHTML = actions.map(showAction).join('')
    UI.time.innerText = 'Afternoon'
    hide(UI.morning)
    show(UI.afternoon)
}

export function showEvening() {
    UI.time.innerText = 'Evening'
    hide(UI.afternoon)
    show(UI.evening)
}
