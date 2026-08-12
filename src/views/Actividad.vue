<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos relacionados con la verificación, el monitoreo, la evaluación del rendimiento, la continuidad, la seguridad y la documentación de aplicaciones y servicios en la nube, mediante la identificación de las prácticas y herramientas utilizadas para garantizar su disponibilidad, confiabilidad y correcto funcionamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de verificar los servicios de red antes de ponerlos en operación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el consumo de recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Confirmar su correcto funcionamiento y disponibilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el monitoreo permanente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de documentar el servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué función cumple el servicio DNS?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar copias de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar usuarios del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cifrar la información transmitida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Traducir nombres de dominio en direcciones IP.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál es el objetivo principal de DNSSEC?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proteger la integridad y autenticidad de las respuestas del DNS.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la velocidad de acceso a Internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el servicio DNS tradicional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar servidores de correo electrónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué característica distingue al servicio DDNS?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina la necesidad de direcciones IP.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actualiza automáticamente los cambios de dirección IP asociados a un dominio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituye los servicios de correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementa la capacidad de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál es el propósito de las pruebas de carga?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Simular fallas eléctricas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir únicamente el consumo de memoria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evaluar el comportamiento del servicio bajo una carga esperada de usuarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Verificar la instalación del sistema operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué buscan identificar las pruebas de estrés?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diseño de la interfaz gráfica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El comportamiento del servicio cuando supera su capacidad prevista.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los cambios en la dirección IP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los errores de programación únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes herramientas puede utilizarse para realizar pruebas de rendimiento?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Visual Studio Code',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Git',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Docker',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Apache JMeter',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es el propósito del monitoreo de servicios?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Supervisar continuamente el funcionamiento para detectar incidentes y evaluar el desempeño.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir las auditorías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la documentación técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar las copias de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Un acuerdo de nivel de servicio (SLA) permite:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar cuentas de usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Configurar servidores DNS.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir los niveles de servicio esperados entre proveedor y cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Crear aplicaciones en la nube.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'El indicador MTBF hace referencia a:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tiempo requerido para restaurar un servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tiempo medio entre fallas de un sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de usuarios conectados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de auditorías realizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'El indicador MTTR permite conocer:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de incidentes registrados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La disponibilidad contractual del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El tiempo promedio requerido para recuperar un servicio después de una falla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El consumo de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué permite la interpretación de los resultados del monitoreo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tomar decisiones para mejorar el desempeño y la continuidad del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar los procedimientos operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir los planes de contingencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál es el propósito de la redundancia de servidores?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el consumo energético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la capacidad de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener la continuidad del servicio ante posibles fallas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir las copias de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'Un plan de contingencia tiene como finalidad:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar aplicaciones móviles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer acciones para responder y recuperar la operación ante incidentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar los acuerdos de nivel de servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes acciones fortalece la seguridad en entornos cloud?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desactivar el monitoreo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar las copias de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar autenticación multifactor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Compartir credenciales entre usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el propósito principal de una bitácora de operación?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar contratos de servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Configurar servidores DNS.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar aplicaciones <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar cronológicamente las actividades e incidentes relacionados con el servicio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué información presenta un informe de auditoría?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el código fuente de una aplicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La configuración del servidor DNS.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los resultados de la evaluación, los hallazgos y las recomendaciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las cuentas de usuario del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la función principal de un manual de despliegue y servicio?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documentar los procedimientos para instalar, configurar, operar y mantener una aplicación o servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar únicamente incidentes de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir las bitácoras de operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el tráfico de red.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de los siguientes documentos facilita la trazabilidad de las actividades realizadas durante la operación del servicio?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acuerdo de nivel de servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bitácora de operación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dirección IP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dominio de Internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué beneficio aporta la documentación en la gestión de aplicaciones y servicios en la nube?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce la capacidad de procesamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elimina la necesidad de monitorear los servicios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituye los mecanismos de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilita la continuidad operativa, la mejora continua y la toma de decisiones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los procesos relacionados con el monitoreo y la gestión de servicios tecnológicos. Continúe aplicando estos conocimientos para favorecer la continuidad, la seguridad y la mejora continua de los servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
