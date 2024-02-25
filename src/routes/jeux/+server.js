import { json } from '@sveltejs/kit';
import * as dao  from "../../dao/jeux.dao.server"


export async function GET({params, url}) {
    let nomRecherche = url.searchParams.get('nomJeu');

    const jeux = await dao.getJeux(nomRecherche);
    return json(jeux);
}


