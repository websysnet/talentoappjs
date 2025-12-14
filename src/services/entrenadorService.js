import entrenadores from '../data/entrenadores';


export function getEntrenadores(){
    return Promise.resolve(entrenadores)
}

export function getEntrenadoresID(id){
      const e = entrenadores.find(item => String(item.id) === String(id)) || null
  return Promise.resolve(e)
}

export default {getEntrenadores,getEntrenadoresID}