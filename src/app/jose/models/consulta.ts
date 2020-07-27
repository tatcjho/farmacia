import { usuario } from './usuario'
import { diagnostico } from './diagnostico'

export class consulta {

    id: string
    paciente: usuario
    medico: usuario
    estado: string
    fecha: string
    diagnostico: diagnostico

}