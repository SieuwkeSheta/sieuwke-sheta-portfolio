const personAPIRespone = await fetch('https://fdnd.directus.app/items/person/276')
const personAPIResponeJSON = await personAPIRespone.json() 

export default personAPIResponeJSON.data