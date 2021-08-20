import React, { useContext, useEffect, useState } from 'react'
import { Heading, Button } from '@chakra-ui/react'

import { GameContext } from '../GameContext'
import { getRandomItemFromArray } from '../util'
import { AFTERNOON } from '../constants'

const Morning = () => {
    const {
        setMorningDuration,
        morningDuration,
        treesPerSecond,
        day,
        setTimeOfDay,
        treesPlantedToday,
        setTreesPlantedToday,
        setTreeIncomeToday,
        treesPerClick,
        setTrees,
    } = useContext(GameContext)

    const [isEndOfMorning, setIsEndOfMorning] = useState(false)

    function plantTrees() {
        setTreesPlantedToday((prevTreesPlantedToday) => {
            console.log(prevTreesPlantedToday)
            return prevTreesPlantedToday + treesPerClick
        })
    }

    function getTreeIncome() {
        setTreeIncomeToday(
            (prevTreeIncomeToday) => prevTreeIncomeToday + treesPerSecond,
        )
    }

    function endMorning() {
        // TODO: calculate corruption and remove trees based on it

        // TODO: Reset treesPlantedToday, treeIncomeToday and morningDuration, all to 0

        setIsEndOfMorning(true)
    }

    function sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), ms)
        })
    }

    useEffect(async () => {
        // Handle end of morning
        
        if (isEndOfMorning) {
            let finalTreesPlantedToday
            let finalTreeIncomeToday

            setTreesPlantedToday((prevTreesPlantedToday) => {
                finalTreesPlantedToday = prevTreesPlantedToday
                return 0
            })
            setTreeIncomeToday((treeIncomeToday) => {
                finalTreeIncomeToday = treeIncomeToday
                return 0
            })

            await sleep(60)

            console.log(finalTreesPlantedToday, finalTreeIncomeToday)

            let updatedTrees

            setTrees((trees) => {
                updatedTrees =
                    trees + finalTreesPlantedToday + finalTreeIncomeToday
                console.log(updatedTrees)
                return updatedTrees
            })

            setTimeOfDay(AFTERNOON)
        }
    }, [isEndOfMorning])

    const getRandomTime = () => {
        setMorningDuration(getRandomItemFromArray([3, 6]))
    }

    function startTreeIncome() {
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
    }

    function handleClick() {
        if (treesPlantedToday === 0) {
            startTreeIncome()
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
