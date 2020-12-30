import { find, show, hide } from './util'
import { applyAction } from './action'

export const UI = {
    day: find('.day'),
    time: find('.time'),
    actions: find('#actions'),
    morning: find('.morning'),
    afternoon: find('.afternoon'),
    evening: find('.evening'),
}

const showAction = ({ title, text, modifiers }, index) => {
    find(`.span${index + 1}-title`).innerText = title
    find(`.span${index + 1}-text`).innerText = text
    find(`.span${index + 1}-button`).innerText = 'Select'
}

export function showNextDay(dayNumber = 1) {
    UI.day.innerText = dayNumber
}

export function showMorning(dayTimeAmount) {
    UI.time.innerText = 'Morning'

    // Type out text for the RNG number
    // "Get ready, in 3.. 2.. 1.."
    find('.morning .step1').innerText =
        'Click the button to acquire your work schedule for the day'

    find(
        '.morning .step2',
    ).innerText = `You got ${dayTimeAmount} seconds to click for the day`

    find('.morning .step3').innerText =
        'Click the button to begin your day, get ready to click as much as you can!'

    // After click"phase" is over, type out something like "time's up"
    hide(UI.evening)
    show(UI.morning)
}

export function showAfternoon(actions = []) {
    actions.forEach(showAction)
    UI.time.innerText = 'Afternoon'
    hide(UI.morning)
    show(UI.afternoon)
}

export function showEvening() {
    UI.time.innerText = 'Evening'
    hide(UI.afternoon)
    show(UI.evening)
}

export function showRemainingTime(time) {
    find('.time-remaining').innerText = time / 1000
}
