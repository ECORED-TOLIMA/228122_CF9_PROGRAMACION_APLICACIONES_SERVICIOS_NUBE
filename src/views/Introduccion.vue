<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") En la actualidad, las organizaciones dependen de servicios tecnológicos que deben mantenerse disponibles, seguros y con un desempeño adecuado para garantizar la continuidad de los procesos de negocio. En este contexto, la verificación del funcionamiento de la infraestructura tecnológica, el monitoreo permanente de los servicios y la implementación de estrategias de gestión constituyen actividades esenciales para identificar incidentes, prevenir interrupciones y asegurar el cumplimiento de los niveles de servicio establecidos.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El monitoreo y la gestión de servicios tecnológicos permiten evaluar el comportamiento de los componentes que integran una plataforma de cómputo, mediante la aplicación de pruebas de funcionamiento y rendimiento, el seguimiento de indicadores de disponibilidad y confiabilidad, así como la implementación de mecanismos de continuidad, seguridad y documentación operativa. Estas actividades facilitan la toma de decisiones orientadas a optimizar el desempeño de la infraestructura y garantizar la prestación continua de los servicios tecnológicos.
        p.mb-0(data-aos="fade-down") En este componente se desarrollan los fundamentos relacionados con la verificación de servicios de red, la ejecución de pruebas de rendimiento, el monitoreo mediante indicadores de desempeño, la gestión de la continuidad del servicio y la aplicación de controles de seguridad en entornos de computación en la nube. Asimismo, se abordan los elementos documentales que respaldan la operación, el mantenimiento y la mejora continua de la infraestructura tecnológica.
    p.mb-4(data-aos="fade-down") El desarrollo de estos conocimientos permitirá fortalecer las competencias necesarias para verificar el funcionamiento de los servicios tecnológicos y gestionar los recursos computacionales de acuerdo con las políticas organizacionales y los acuerdos de nivel de servicio (SLA), contribuyendo a la disponibilidad, confiabilidad y seguridad de las plataformas tecnológicas.
    p.mb-4(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Oa6SHv_YJaI?si=0fv9CklpzORZDLNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
