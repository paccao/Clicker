# Clicker

Onclick plant tree

## Theme

Post apocalyptic: Survival Horror
The earth was in bad shape, your mission is to replant the earth

### Theme ideas

Humans have developed a tool called replicators which use biomass to make stuff.

## Future ideas

-   Multiplayer
    -   2-4 (?) player mode: planter vs destroyers
    -   Something similar to "the game of life 2"
-   Game state

    -   Other factors like infrastructure, relationships (?)

-   Game difficulty for example:

    -   biosphere health impact on each round
    -   How many trees you begin with

-   Morning interactive ideas

    -   interactive minigames (each day has different tasks to save the planet)
        -   Osu
        -   pick up seeds, plant them in a pattern, then minecraft bone meal
        -

-   Tutorial (info boxes with small text?)
-   on show game, 'alert' player with a box element that fades out and says `welcome ${playerName}`

-   highscore page

    -   Show a timeline of every decision the player made during the game
        -   you planted x amount of trees, y amount of trees died, z[] was your timeline for this game session

-   Game balancing

    -   Maybe make the scaling stat updates based on a mathematical function - like for example:
        -   Bézier curves
        -   De Casteljau's algorithm
            -   https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm

-   A Villager is displayed on the screen when purchasing upgrades.

## Todo

### On click:

-   ✅plant tree
-   ✅track planted trees
-   update ui, show planted trees

### Todo: game state

-   Game state
    -   Tree planting ability (increase amount of planted trees)
        -   Trees to plant per click
    -   Tree resiliance (reduce evening effect on trees)
        -   Will they survive?
    -   Biosphere health

## Core game

### Upgrades (consider game balancing)

-   Player gets a permanent boost to seconds in tree planting phase

### Game loop:

-   ✅ Show start page, enter your name to begin
-   ✅ Show game container
    -   ✅ Show day 1/30, Morning
-   the game is 30 days long
-   each day consists of 3 stages
-   The player has a currency called biomass, which they can get by cutting down trees (in the afternoon phase) and then decomposing them into biomass, the biomass is used in every replicator
    1. Morning (productivity)
        - ✅roll dice/ spin wheel for productivity seconds
        - ✅User gets to choose when to start clicking
        - ✅click as much as you can for your designated seconds
    2. Afternoon (Action)
        - Choose between 2 random upgrades
    3. Evening (Summary of the game state)
        - Show trees planted
        - show trees that died (a concept like tax rate)
        - Biosphere health
-   end game (after 30 days or biosphere health reaches 0)
-   save highscore in local storage
    -   Highscore can depend on:
        -   Summarize game state
        -   How many trees survived
        -   How many trees died
-   End screen
    -   Share highscore (example: facebook games marketing)
    -   Restart game

## Bugs

-   Sanitize input (its vulnerable to XSS attacks, crossitescripting)
