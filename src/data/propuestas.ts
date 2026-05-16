export interface Propuesta {
  slug: string;
  titulo: string;
  intro: string[];
  items: string[];
  cierre: string;
  color: string;
}

export const propuestas: Propuesta[] = [
  {
    slug: 'trabajo',
    titulo: 'Trabajo que se queda en Río Negro',
    intro: [
      'Río Negro produce fruta, petróleo, turismo. Y los jóvenes se van igual. Algo no cierra.',
      'El problema no es la falta de recursos. Es un Estado que le pisa la cabeza al que quiere crecer.',
    ],
    items: [
      'Plan de empleo joven: 2.500 puestos de formación dual',
      'Simplificación impositiva provincial — menos Ingresos Brutos',
      'Habilitaciones comerciales en días, no en meses',
      'Incentivos para clusters productivos patagónicos',
    ],
    cierre: '"El que produce tiene que quedarse con lo que genera."',
    color: '#6A287F',
  },
  {
    slug: 'economia',
    titulo: 'Menos Estado en tu bolsillo',
    intro: [
      'Trabajás doce horas. El Estado se lleva la mitad. Eso tiene que cambiar.',
    ],
    items: [
      'Reducción gradual de Ingresos Brutos para PyMEs',
      'Ventanilla única para trámites comerciales',
      'Auditoría del gasto público provincial — publicación online trimestral',
      'Fin de los subsidios que no tienen contraprestación',
    ],
    cierre: '"Menos trabas. Más trabajo."',
    color: '#6A287F',
  },
  {
    slug: 'educacion',
    titulo: 'Aulas que funcionan',
    intro: [
      'Río Negro tiene 39 escuelas rurales sin internet.',
      'Los docentes cobran poco y el sistema los trata mal. Los chicos que se reciben se van de la provincia.',
      'Eso no es un destino — es una decisión política que podemos cambiar.',
    ],
    items: [
      'Internet satelital en las 39 escuelas rurales (12 meses)',
      'Actualización salarial docente atada a inflación — sin discrecionalidad',
      'Plan de infraestructura educativa a 4 años',
      'Libertad educativa: más opciones, menos política en el aula',
    ],
    cierre: '"Estudiaste acá. Quedate acá."',
    color: '#6A287F',
  },
  {
    slug: 'instituciones',
    titulo: 'Nadie nos compró',
    intro: [
      'Independientes de verdad. Sin compromisos viejos. Sin deudas con el aparato.',
      'La independencia no es solo una postura. Es lo que nos permite decir lo que pensamos y proponer lo que creemos correcto, sin pedirle permiso a nadie.',
    ],
    items: [
      'Publicación de declaraciones juradas completas de todos los candidatos',
      'Presupuesto participativo en municipios: que los vecinos decidan una parte',
      'Mandatos con rendición de cuentas pública trimestral',
      'Fin del clientelismo: los planes sociales con contraprestación real',
    ],
    cierre: '"Nadie nos compró. Nadie nos puede pedir favores."',
    color: '#6A287F',
  },
  {
    slug: 'seguridad',
    titulo: 'Barrios donde se puede salir',
    intro: [
      'Seguridad no es mano dura de slogan. Es policía de cercanía, prevención con los adolescentes y una justicia que funciona.',
      'Salís a la calle y no estás seguro. Eso no es normal. No lo naturalicemos.',
    ],
    items: [
      'Policía de cercanía: patrullaje barrial, no solo respuesta a emergencias',
      'Programa de prevención adolescente en los 8 circuitos electorales',
      'Tolerancia cero con el delito organizado — sin negociar derechos civiles',
      'Digitalización del Poder Judicial provincial — expedientes online',
    ],
    cierre: '"La inseguridad no se administra. Se combate."',
    color: '#6A287F',
  },
  {
    slug: 'ambiente',
    titulo: 'Río Negro cuida lo que tiene',
    intro: [
      'La Patagonia es nuestro activo más valioso.',
      'Desarrollo productivo y cuidado ambiental no son opuestos si hay planificación seria.',
    ],
    items: [
      'Ordenamiento territorial para uso sustentable de recursos hídricos',
      'Incentivos fiscales para producción agrícola con certificación ambiental',
      'Programa de energías renovables para municipios del interior',
      'Protección de cuencas del Limay y Negro como patrimonio provincial',
    ],
    cierre: '"Río Negro tiene todo. Solo le falta libertad para usarlo bien."',
    color: '#6A287F',
  },
];
