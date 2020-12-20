# Clicker

Onclick plant tree

## Theme

Post apocalyptic: Survival Horror
The earth was in bad shape, your mission is to replant the earth

## Future ideas

-   Multiplayer
    -   2-4 (?) player mode: planter vs destroyers
    -   Something similar to "the game of life 2"
-   Game state

    -   Other factors like infrastructure, relationships (?)

-   Game difficulty for example:

    -   biosphere health impact on each round
    -   How many trees you begin with

-   Tutorial (info boxes with small text?)
-   on show game, 'alert' player with a box element that fades out and says `welcome ${playerName}`

## Todo

### On click:

-   plant tree
-   track planted trees
-   update ui, show planted trees

### Todo:game state

-   Game state
    -   Tree planting ability (increase amount of planted trees)
        -   Trees to plant per click
    -   Tree resiliance (reduce evening effect on trees)
        -   Will they survive?
    -   Biosphere health

## Core game

### Game loop:

-   ✅ Show start page, enter your name to begin
-   ✅ Show game container
    -   Show day 1/30, Morning
-   the game is 30 days long
-   each day consists of 3 stages
    1. Morning (productivity)
        - roll dice/ spin wheel for productivity seconds
        - User gets to choose when to start clicking
        - click as much as you can for your designated seconds
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
