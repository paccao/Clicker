import React, { useContext, useEffect } from 'react'
import { Heading, Button } from '@chakra-ui/react'

import { GameContext } from '../GameContext'
import { getRandomItemFromArray } from '../util'

const Morning = () => {
    const {
        setMorningDuration,
        morningDuration,
        treesPerSecond,
        day,
        // plantTrees,
        // endMorning,
        // getTreeIncome,
        treesPlantedToday,
        setTreesPlantedToday,
        setTreesGainedToday,
        treesGainedToday,
        treesPerClick,
    } = useContext(GameContext)

    function plantTrees() {
        setTreesPlantedToday((prevTreesPlantedToday) => {
            console.log(prevTreesPlantedToday)
            return prevTreesPlantedToday + treesPerClick
        })
    }

    function getTreeIncome() {
        setTreesGainedToday(
            (prevTreesGainedToday) => prevTreesGainedToday + treesPerSecond,
        )
    }

    function endMorning() {
        // TODO: add treesPlantedToday to total trees
        // TODO: add treesGainedToday to total trees
        // TODO: calculate corruption and remove trees based on it
        // TODO: Reset treesPlantedToday, treesGainedToday and morningDuration, all to 0
        // TODO: At the end, setTimeOfDay to show the AFTERNOON state.

        console.log(
            'planted + gained =',
            treesPlantedToday,
            treesGainedToday,
            treesPlantedToday + treesGainedToday,
        )
    }

    const getRandomTime = () => {
        setMorningDuration(getRandomItemFromArray([3, 6, 9]))
    }

    useEffect(() => {
        const income =
            treesPerSecond > 0
                ? setInterval(() => {
                      getTreeIncome()
                  }, 1000)
                : null

        setTimeout(() => {
            if (income) clearInterval(income)
            endMorning()
        }, morningDuration * 1000)

        return {}
    }, [])

    function handleClick() {
        if (treesPlantedToday === 0) {
            startPlanting()
        }

        plantTrees()
    }

    return (
        <>
            <Heading>Morning, Day {day}.</Heading>

            {morningDuration === 0 ? (
                <Button onClick={getRandomTime}>Get time</Button>
            ) : (
                <Button onClick={handleClick}>Plant tree</Button>
            )}
        </>
    )
}

export default Morning
