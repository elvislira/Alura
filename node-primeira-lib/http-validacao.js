import fetch from "node-fetch"
 
async function checaStatus(arrayURLs) {
    const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return res.status
            }))
 
    return arrayStatus
}
 
function geraArrayDeURLs(arrayLinks) {
    return arrayLinks.map(objLink => Object.values(objLink).join())
}
 
export default async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks)
    const statusLinks = await checaStatus(links)
 
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto, 
        status: statusLinks[indice]
    }))
 
    return resultados
}
