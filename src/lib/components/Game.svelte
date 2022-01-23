<script lang="ts">
    import { TimeOfDay } from '$lib/constants'
    import { timeOfDay } from '$lib/game/stores'
    import Morning from './Morning.svelte'
    import Afternoon from './Afternoon.svelte'
    import Evening from './Evening.svelte'
</script>

<!-- TODO: Handle endgame state -->

{#if $timeOfDay === TimeOfDay.Morning}
    <Morning />
{:else if $timeOfDay === TimeOfDay.Afternoon}
    <Afternoon />
{:else if $timeOfDay === TimeOfDay.Evening}
    <Evening />
{/if}
