import { writable } from 'svelte/store'

import { TimeOfDay } from '$lib/constants'

// -------------- Player state --------------
export const playerName = writable('')
export const treesPerClick = writable(1) // Active income per click
export const treesPerSecond = writable(0) // Passive income
export const treesPlantedToday = writable(0) // Daily total trees planted
export const treeIncomeToday = writable(0) // Daily total from passive income

// -------------- Game World state --------------
export const health = writable(2)
export const trees = writable(100)
export const corruption = writable(0.7) // Trees that die off each day
export const bioMass = writable(0) // Mass to build buildings and do research with
export const day = writable(1)
export const morningDuration = writable(0) // Seconds
export const actions = writable([])
export const timeOfDay = writable(TimeOfDay.MORNING)
