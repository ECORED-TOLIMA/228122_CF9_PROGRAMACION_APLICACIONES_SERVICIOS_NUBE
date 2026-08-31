<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Documentación y auditoría de servicios
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img01.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t5/img02.svg', alt='')
          .col-lg-10.col-12
            p.mb-4(data-aos="fade-down") La gestión de los servicios tecnológicos no finaliza con su implementación y monitoreo. Es necesario documentar las actividades realizadas, registrar los eventos ocurridos durante la operación y verificar el cumplimiento de los procedimientos establecidos. La documentación facilita el seguimiento de los servicios, contribuye a la resolución de incidentes y proporciona información útil para la toma de decisiones y la mejora continua.
        .cajon.cajon.C08.color-primario.p-3.mb-4
          p.mb-0(data-aos="fade-down") La auditoría de servicios, por su parte, permite evaluar si las actividades relacionadas con la operación, el mantenimiento y el despliegue de los servicios tecnológicos se ejecutan de acuerdo con las políticas, procedimientos y buenas prácticas definidas por la organización. Este proceso fortalece la confiabilidad de los servicios y favorece la identificación de oportunidades de mejora.
        p.mb-0(data-aos="fade-down") Entre los principales documentos utilizados en la gestión de los servicios tecnológicos se encuentran las bitácoras de operación, los informes de auditoría y los manuales de despliegue y servicio. Cada uno cumple una función específica dentro del ciclo de vida del servicio y facilita la estandarización de los procesos, la trazabilidad de las actividades y la continuidad operativa.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Documentación para la gestión y auditoría de servicios tecnológicos
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t5/img03.svg', alt='En la figura 3 se presenta un esquema general de la documentación utilizada en la gestión y auditoría de servicios tecnológicos, relacionando las bitácoras de operación, los informes de auditoría y los manuales de despliegue y servicio con la trazabilidad, la mejora continua y la continuidad del servicio.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t5/img04.svg', alt='En la figura 3 se presenta un esquema general de la documentación utilizada en la gestión y auditoría de servicios tecnológicos, relacionando las bitácoras de operación, los informes de auditoría y los manuales de despliegue y servicio con la trazabilidad, la mejora continua y la continuidad del servicio.')
    p.mb-0(data-aos="fade-down") La figura presenta los principales documentos utilizados durante la gestión y auditoría de los servicios tecnológicos. Las bitácoras de operación registran los eventos y actividades realizadas durante la prestación del servicio; los informes de auditoría permiten evaluar el cumplimiento de los procedimientos establecidos; y los manuales de despliegue y servicio orientan la instalación, configuración, operación y mantenimiento de las aplicaciones y los servicios. En conjunto, estos documentos favorecen la trazabilidad de la información, la mejora continua y la continuidad operativa.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Bitácoras de operación
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img05.jpg', alt='')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Las bitácoras de operación son documentos utilizados para registrar de manera cronológica las actividades realizadas durante la administración y funcionamiento de los servicios tecnológicos. Estos registros permiten documentar eventos relevantes, facilitar el seguimiento de incidentes y conservar evidencia de las acciones ejecutadas sobre la infraestructura, las aplicaciones y los servicios.
        p.mb-0(data-aos="fade-down") El registro sistemático de la información favorece la trazabilidad de las operaciones, ya que permite conocer cuándo ocurrió un evento, quién realizó la actividad, cuál fue la acción ejecutada y cuál fue el resultado obtenido. Esta información resulta útil para la resolución de incidentes, la identificación de causas de fallas y la verificación del cumplimiento de los procedimientos establecidos.
    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        .tarjeta.tarjeta--C18.p-2
          p.mb-0.text-center(data-aos="fade-down") Una bitácora de operación puede incluir información como:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C08.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Fecha y hora del evento.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Servicio o aplicación intervenida.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 Descripción de la actividad realizada.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Responsable de la ejecución.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              p.mb-0 Resultado de la actividad.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              p.mb-0 Observaciones o acciones de seguimiento.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img06.svg', alt='')
    p.mb-4(data-aos="fade-down") Para comprender la información que puede registrarse en este tipo de documento, en la siguiente tabla se presenta un ejemplo simplificado de una bitácora de operación.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7
          span Ejemplo de bitácora de operación
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Fecha y hora
                th(data-aos="fade-down")(style= "width: 20%") Servicio
                th(data-aos="fade-down")(style= "width: 20%") Actividad realizada
                th(data-aos="fade-down")(style= "width: 20%") Responsable
                th(data-aos="fade-down")(style= "width: 20%") Resultado
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") 15/05/2026 – 08:30
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Aplicación <em>web</em> institucional.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Actualización de la aplicación.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Administrador del servicio.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Actualización completada correctamente.
              tr
                td(data-aos="fade-down") 15/05/2026 – 10:15
                td(data-aos="fade-down") Base de datos.
                td(data-aos="fade-down") Ejecución de copia de seguridad.
                td(data-aos="fade-down") Administrador de bases de datos.
                td(data-aos="fade-down") Respaldo realizado exitosamente.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") 15/05/2026 – 14:20
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servicio de autenticación.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Reinicio del servicio por mantenimiento.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Administrador del sistema.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servicio restablecido sin incidentes.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img07.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") La información consignada permite identificar las actividades realizadas, los responsables de su ejecución y los resultados obtenidos, facilitando el seguimiento de la operación y el análisis de los eventos ocurridos durante la prestación del servicio.
    p.mb-0(data-aos="fade-down") Las bitácoras de operación constituyen una herramienta fundamental para la administración de los servicios tecnológicos, ya que proporcionan información confiable para la toma de decisiones, apoyan los procesos de auditoría y contribuyen al mejoramiento continuo de la operación.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Informes de auditoría
    p.mb-4(data-aos="fade-down") Los informes de auditoría son documentos que presentan los resultados obtenidos durante la evaluación de los servicios tecnológicos, con el propósito de verificar el cumplimiento de las políticas, procedimientos, normas y controles establecidos por la organización. Estos informes constituyen un medio para documentar las evidencias recopiladas, comunicar los hallazgos identificados y apoyar la toma de decisiones orientadas al mejoramiento continuo.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img08.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La elaboración de un informe de auditoría requiere recopilar y analizar información proveniente de diferentes fuentes, como las bitácoras de operación, los registros de monitoreo, los procedimientos documentados y las evidencias de las actividades realizadas. A partir de este análisis, es posible determinar fortalezas, identificar oportunidades de mejora y establecer recomendaciones para optimizar la operación de los servicios tecnológicos.
    p.mb-4(data-aos="fade-down") Un informe de auditoría puede incluir los siguientes elementos:
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img09.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Evidencias recopiladas
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img10.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Alcance de la evaluación
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img11.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Recomendaciones de mejora
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img12.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Objetivo de la auditoría
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img13.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Hallazgos identificados
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img14.svg' alt="")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Conclusiones de la auditoría
    p.mb-4(data-aos="fade-down") Para comprender la información que puede registrarse en este tipo de documento, en la siguiente tabla se presenta un ejemplo simplificado de un informe de auditoría.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8
          span Ejemplo simplificado de un informe de auditoría
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Elemento
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Objetivo
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Verificar el cumplimiento de los procedimientos para el despliegue y monitoreo de una aplicación en la nube.
              tr
                td(data-aos="fade-down") Evidencia
                td(data-aos="fade-down") Revisión de bitácoras de operación, registros de monitoreo y manuales de despliegue.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Hallazgo
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Se identificó que algunas actualizaciones no fueron registradas en la bitácora de operación.
              tr
                td(data-aos="fade-down") Recomendación
                td(data-aos="fade-down") Fortalecer el registro de las actividades realizadas y actualizar los procedimientos internos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Conclusión
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Se evidenció cumplimiento parcial de los procedimientos documentados, con oportunidades de mejora en la trazabilidad de las actividades.
    p.mb-4(data-aos="fade-down") Los elementos registrados permiten documentar los resultados de la evaluación, comunicar los hallazgos identificados y formular recomendaciones que contribuyan al fortalecimiento de la gestión de los servicios tecnológicos.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C08.color-primario.p-4
          p.mb-0(data-aos="fade-down") Los informes de auditoría favorecen el seguimiento de las acciones de mejora, fortalecen la trazabilidad de los procesos y proporcionan información confiable para la toma de decisiones. Asimismo, constituyen un insumo para verificar el cumplimiento de los procedimientos establecidos y promover la mejora continua en la administración de las aplicaciones y los servicios tecnológicos.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Manuales de despliegue y servicio
    p.mb-4(data-aos="fade-down") Los manuales de despliegue y servicio son documentos técnicos que describen los procedimientos necesarios para instalar, configurar, poner en funcionamiento, administrar y mantener una aplicación o un servicio tecnológico. Su propósito es estandarizar las actividades operativas, facilitar la transferencia de conocimiento y garantizar que los procesos se ejecuten de manera uniforme por parte de los responsables de la operación.
    .col.col-12.mb-4
      figure
        img(src='@/assets/curso/temas/t5/img15.png', alt='')
    p.mb-4(data-aos="fade-down") Estos manuales constituyen una fuente de consulta durante las diferentes etapas del ciclo de vida de las aplicaciones y los servicios, ya que reúnen la información necesaria para realizar tareas de despliegue, actualización, mantenimiento y recuperación ante incidentes. Además, favorecen la continuidad operativa al reducir la dependencia del conocimiento individual de los integrantes del equipo.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-3.col-6.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img16.svg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.text-bold.mb-4 Un manual de despliegue y servicio puede incluir la siguiente información
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Objetivo y alcance del documento.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Requisitos de <em>hardware</em> y <em>software</em>.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Procedimiento de instalación y configuración.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Procedimiento de despliegue de la aplicación o servicio.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Actividades de operación y mantenimiento.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Procedimientos de respaldo y recuperación.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Registro de versiones y actualizaciones.
    p.mb-4(data-aos="fade-down") Para comprender la información que puede contener este tipo de documento, en la siguiente tabla se presenta un ejemplo simplificado de la estructura de un manual de despliegue y servicio.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9
          span  Ejemplo simplificado de un manual de despliegue y servicio
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Sección
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Objetivo
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Describe el propósito del manual y el servicio al que aplica.
              tr
                td(data-aos="fade-down") Requisitos
                td(data-aos="fade-down") Especifica el <em>hardware</em>, <em>software</em> y las dependencias necesarias para el despliegue.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Instalación y configuración
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Presenta los pasos para preparar el entorno e instalar la aplicación o el servicio.
              tr
                td(data-aos="fade-down") Despliegue
                td(data-aos="fade-down") Describe el procedimiento para publicar la aplicación o el servicio en el entorno de nube y verificar su correcto funcionamiento.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Operación y mantenimiento
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Incluye actividades de monitoreo, actualización y mantenimiento del servicio.
              tr
                td(data-aos="fade-down") Respaldo y recuperación
                td(data-aos="fade-down") Define las acciones para realizar copias de seguridad y recuperar el servicio en caso de incidentes.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img17.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") La organización de la información facilita la ejecución de los procedimientos técnicos, promueve la estandarización de las actividades y contribuye a la correcta administración de las aplicaciones y los servicios tecnológicos.
    p.mb-0(data-aos="fade-down") Los manuales de despliegue y servicio constituyen un recurso fundamental para la gestión de los servicios tecnológicos, ya que facilitan la implementación, operación y mantenimiento de las aplicaciones, apoyan los procesos de auditoría y favorecen la continuidad operativa mediante la documentación de procedimientos estandarizados.
</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
