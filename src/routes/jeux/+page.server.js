import * as jeuService  from "$lib/service/jeux.service.server"

export async function load({params, url}){
    let nomRecherche = url.searchParams.get('nomJeu');

    const mesJeux = await jeuService.getJeux(nomRecherche);

    return {
        jeux: mesJeux
    }
}

