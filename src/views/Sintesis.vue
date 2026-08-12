<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión de aplicaciones y servicios en la nube requiere la implementación de procesos que garanticen su correcto funcionamiento, disponibilidad, seguridad y continuidad operativa. La verificación de los servicios de red, la evaluación del rendimiento, el monitoreo de indicadores, la aplicación de estrategias de continuidad y seguridad, así como la documentación de las actividades mediante bitácoras, informes y manuales, proporcionan información para la toma de decisiones y el mejoramiento continuo. La integración de estas prácticas contribuye a ofrecer servicios tecnológicos confiables, eficientes y alineados con las necesidades de las organizaciones y de sus usuarios.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presentan los aspectos relevantes del monitoreo y la gestión de aplicaciones y servicios en la nube, incluyendo la verificación de servicios de red, las pruebas de rendimiento, el monitoreo, la continuidad, la seguridad y la documentación, como procesos que contribuyen a la disponibilidad, el desempeño y la mejora continua de los servicios tecnológicos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
