import * as dao  from "$lib/dao/jeux.dao.server"


export async function getJeux(nomRecherche?:string|null){
    return dao.getJeux(nomRecherche);
}
