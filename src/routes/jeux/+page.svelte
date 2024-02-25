<script lang="ts">
    import { format } from "date-fns";

    export let data;
    let nomRecherche = '';
    let timer:number;


    $: jeuxFiltres = data.jeux;

	const searchGames = () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
            doSearch()	
        }, 500);
	}

    async function doSearch(){
        const response = await fetch('/jeux?nomJeu='+nomRecherche);
        jeuxFiltres = await response.json();
    }

</script>


<h1>Liste des jeux</h1>

<div class="mb-2">
    <h2>Filtres</h2>
    <input bind:value={nomRecherche} on:keyup={searchGames}/>
</div>

<table class="table table-striped">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Tags</th>
            <th>Date de sortie</th>
        </tr>
    </thead>
    <tbody>
        {#each jeuxFiltres as jeu}
            <tr>
                <td>{jeu.nom}</td>
                <td>{jeu.tags}</td>
                <td>{ format(jeu.dateSortie, 'dd/MM/yyyy')}</td>
            </tr>
        {/each}
    </tbody>
</table>


