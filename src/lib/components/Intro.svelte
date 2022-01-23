<script lang="ts">
    import { playerName } from '$lib/game/stores'

    let name = ''
</script>

<img src="./images/wasteland.jpg" alt="Wasteland" />
<h1>SURVIVAL HORROR, year unknown</h1>
<p>
    The world isn't as it once was. It turns out life isn't all rainbows and
    sunshines. All life on the surface of the earth has died out. Humans had to
    take the measures needed to survive and are now POST-HUMAN, a state beyond
    what we know as "human", made possible through genetic manipulation and
    other biointerventionist measures. People lived underground for decades. Now
    the few survivors that pushed through has to rebuild what was once a lush
    and beautiful planet.
</p>
<form
    on:submit={() => {
        $playerName = name
    }}
>
    <!-- svelte-ignore a11y-autofocus -->
    <input
        type="text"
        bind:value={name}
        placeholder="Enter your name"
        autofocus
    />
</form>
