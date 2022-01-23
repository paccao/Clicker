<script lang="ts">
    import { playerName } from '$lib/game/stores'
    import Game from '$lib/components/Game.svelte'
    import Intro from '$lib/components/Intro.svelte'
    import Layout from '$lib/components/Layout.svelte'
</script>

<Layout>
    {#if !$playerName}
        <Intro />
    {:else}
        <Game />
    {/if}
</Layout>
