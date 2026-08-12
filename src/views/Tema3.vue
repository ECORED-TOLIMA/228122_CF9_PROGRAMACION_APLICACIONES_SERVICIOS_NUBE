<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Monitoreo y niveles de servicio
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El monitoreo de los servicios tecnológicos es un proceso continuo que permite supervisar el estado y el desempeño de los recursos que conforman una infraestructura tecnológica. Su propósito es verificar que los servicios operen de acuerdo con los niveles de calidad establecidos, identificar oportunamente posibles incidentes y generar información que facilite la toma de decisiones para garantizar la continuidad y disponibilidad de los servicios.
    p.mb-4(data-aos="fade-down") Este proceso implica la recolección y el análisis permanente de información relacionada con el funcionamiento de servidores, redes, aplicaciones, bases de datos y demás componentes tecnológicos. A partir de estos datos es posible detectar comportamientos anómalos, anticipar fallas y evaluar el cumplimiento de los objetivos definidos para la prestación de los servicios.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img02.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.px-4.py-1
          p.mb-0(data-aos="fade-down") El monitoreo también constituye una herramienta fundamental para la gestión de la calidad de los servicios tecnológicos, ya que proporciona evidencia objetiva sobre su desempeño. La información obtenida permite evaluar tendencias, identificar oportunidades de mejora y establecer acciones preventivas o correctivas orientadas a mantener la estabilidad de la infraestructura.
    p.mb-4(data-aos="fade-down") El ciclo general del monitoreo de servicios tecnológicos es:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t3/img03.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img04.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Servicios tecnológicos
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img05.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Monitoreo continuo
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img06.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Recolección de datos
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img07.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Análisis de indicadores
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img08.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Detección de incidentes
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img09.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Implementación de acciones de mejora
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img10.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Verificación del desempeño
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img11.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Monitoreo continuo
    p.mb-4(data-aos="fade-down") El monitoreo inicia con la supervisión de los servicios tecnológicos y continúa con la recolección y el análisis de información sobre su funcionamiento. Los resultados obtenidos permiten detectar incidentes, implementar acciones de mejora y verificar nuevamente el desempeño de los servicios, favoreciendo un ciclo permanente de evaluación y optimización.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") El monitoreo permanente facilita el cumplimiento de los niveles de servicio establecidos entre los proveedores y los usuarios, ya que permite verificar el desempeño de la infraestructura mediante indicadores objetivos. De esta manera, las organizaciones fortalecen la disponibilidad, confiabilidad y calidad de los servicios tecnológicos, reduciendo el impacto de posibles fallas y apoyando la mejora continua de la operación.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Acuerdos de nivel de servicio (SLA)
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-5(data-aos="fade-down") Los acuerdos de nivel de servicio, conocidos como Service Level Agreement (SLA), constituyen un compromiso formal entre un proveedor de servicios y sus usuarios o clientes, en el cual se establecen las condiciones bajo las cuales será prestado un servicio tecnológico. Estos acuerdos definen aspectos relacionados con la disponibilidad, el desempeño, los tiempos de respuesta y las responsabilidades de las partes involucradas, permitiendo establecer expectativas claras sobre la calidad del servicio.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t3/img13.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Los SLA desempeñan un papel fundamental en la gestión de servicios tecnológicos, ya que proporcionan criterios objetivos para evaluar el cumplimiento de los niveles de servicio establecidos. Asimismo, facilitan el seguimiento del desempeño de la infraestructura tecnológica, la identificación de desviaciones y la implementación de acciones de mejora orientadas a garantizar la continuidad operativa.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img12.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Los acuerdos de nivel de servicio contemplan diferentes elementos que permiten definir las condiciones bajo las cuales se prestará un servicio tecnológico. Entre los principales componentes se encuentran:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t3/img14.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Servicio
            h5.t2.mb-2 Servicio
            p.mb-0 Especifica el alcance y las características del servicio tecnológico que será suministrado.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t3/img15.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Disponibilidad
            h5.t2.mb-2 Disponibilidad
            p.mb-0 Establece el tiempo durante el cual el servicio debe permanecer operativo.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t3/img16.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Tiempos de respuesta
            h5.t2.mb-2 Tiempos de respuesta
            p.mb-0 Definen el tiempo esperado para atender incidentes o solicitudes.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t3/img17.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Tiempos de solución
            h5.t2.mb-2 Tiempos de solución
            p.mb-0 Determinan el tiempo previsto para resolver los incidentes de acuerdo con su nivel de prioridad.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t3/img18.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Indicadores de desempeño
            h5.t2.mb-2 Indicadores de desempeño
            p.mb-0 Establecen las métricas que permiten evaluar el cumplimiento de los niveles de servicio establecidos.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t3/img19.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Responsabilidades
            h5.t2.mb-2 Responsabilidades
            p.mb-0 Describen los compromisos y obligaciones tanto del proveedor del servicio como de los usuarios.
    p.mb-4(data-aos="fade-down") Estos componentes permiten establecer criterios claros para la prestación del servicio y facilitan el seguimiento de su desempeño. Asimismo, proporcionan una base objetiva para verificar el cumplimiento de los compromisos establecidos e identificar oportunidades de mejora durante la operación de los servicios tecnológicos.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img20.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Los acuerdos de nivel de servicio también contribuyen a fortalecer la comunicación entre el proveedor y los usuarios, ya que establecen criterios comunes para medir la calidad del servicio y gestionar los incidentes que puedan presentarse durante su operación. De esta manera, se reducen las diferencias de interpretación sobre el nivel de servicio esperado y se promueve una gestión orientada al cumplimiento de los objetivos organizacionales.
        p.mb-0(data-aos="fade-down") El seguimiento periódico de los SLA permite identificar tendencias en el comportamiento de los servicios tecnológicos, evaluar el cumplimiento de los indicadores establecidos y definir acciones de mejora cuando se presentan desviaciones respecto a los niveles de servicio acordados. La información obtenida mediante este seguimiento constituye un insumo para la toma de decisiones orientadas a optimizar la infraestructura tecnológica y fortalecer la mejora continua de los servicios.
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.C08.p-4.h-100.w-100
          .col-lg-2.d-none.d-lg-block.mb-2
            figure
              img(src='@/assets/curso/temas/t3/img22.svg', alt='Imagen decorativa')
          p.mb-0(data-aos="fade-down") Por ejemplo, una empresa que ofrece un servicio de almacenamiento en la nube acuerda con sus clientes una disponibilidad del 99,9 % y un tiempo máximo de respuesta para incidentes críticos de 30 minutos. El monitoreo permanente permite comprobar si estos compromisos se cumplen y facilita la implementación de acciones correctivas cuando se detectan incumplimientos.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img21.jpg', alt='Imagen decorativa')
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Indicadores MTBF y MTTR
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img23.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") El monitoreo de los servicios tecnológicos requiere indicadores que permitan evaluar el comportamiento de la infraestructura y medir aspectos relacionados con la confiabilidad, la disponibilidad y la capacidad de recuperación ante fallas. Estos indicadores proporcionan información objetiva para analizar el desempeño de los servicios y verificar el cumplimiento de los niveles de servicio establecidos.
        .cajon.cajon.C08.color-primario.p-3.mb-3
          p.mb-0(data-aos="fade-down") Entre los indicadores más utilizados en la gestión de servicios tecnológicos se encuentran el <b>Mean Time Between Failures (MTBF) y el Mean Time To Repair (MTTR)</b>, los cuales permiten conocer la frecuencia con la que se presentan las fallas y el tiempo requerido para restablecer el funcionamiento de un servicio después de una interrupción.
        p.mb-0(data-aos="fade-down") Cada uno de estos indicadores cumple una función específica dentro del proceso de monitoreo:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C12.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img24.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center MTBF (Mean Time Between Failures)
            p.mb-0(data-aos="fade-down") Mide el tiempo promedio de funcionamiento de un servicio o equipo entre una falla y la siguiente. Un valor elevado de este indicador refleja una mayor confiabilidad, ya que indica que las interrupciones ocurren con menor frecuencia.
          .col-xl.col-lg-6.tarjeta.tarjeta--C14.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img25.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center MTTR (Mean Time To Repair)
            p.mb-0(data-aos="fade-down") Mide el tiempo promedio necesario para restaurar un servicio después de presentarse una falla. Un valor reducido evidencia una mayor capacidad de respuesta y recuperación, favoreciendo la continuidad operativa.
    p.mb-4(data-aos="fade-down") Aunque ambos indicadores analizan aspectos diferentes del desempeño, su interpretación conjunta proporciona una visión más completa sobre el estado de los servicios tecnológicos. Mientras el MTBF permite evaluar la confiabilidad de la infraestructura, el MTTR facilita el análisis de la eficiencia de los procesos de atención y recuperación ante incidentes.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.C08.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") Por ejemplo, una empresa monitorea el servicio de almacenamiento en la nube y detecta que, durante los últimos meses, las interrupciones se presentan con poca frecuencia y los tiempos de recuperación son cada vez menores. Estos resultados indican una mejora en la confiabilidad de la infraestructura y una mayor capacidad para restablecer el servicio cuando ocurre una falla, contribuyendo al cumplimiento de los acuerdos de nivel de servicio establecidos.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img26.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") El seguimiento periódico de indicadores como el MTBF y el MTTR facilita la identificación de tendencias, la evaluación del desempeño de la infraestructura tecnológica y la implementación de acciones orientadas a fortalecer la disponibilidad y continuidad de los servicios. Asimismo, proporciona información relevante para apoyar la toma de decisiones y promover la mejora continua en la gestión de los servicios tecnológicos.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Interpretación de resultados para la toma de decisiones
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img27.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El monitoreo de los servicios tecnológicos genera información que permite conocer el comportamiento de la infraestructura y evaluar el cumplimiento de los niveles de servicio establecidos. Sin embargo, la recopilación de datos por sí sola no garantiza una adecuada gestión de los servicios; es necesario interpretar los resultados obtenidos para identificar tendencias, reconocer oportunidades de mejora y definir acciones que contribuyan a fortalecer el desempeño de la infraestructura tecnológica.
    p(data-aos="fade-down") La interpretación de los resultados consiste en analizar la información proporcionada por los indicadores de desempeño, los acuerdos de nivel de servicio y las pruebas realizadas sobre los servicios tecnológicos. Este análisis facilita la identificación de posibles desviaciones respecto a las condiciones esperadas de operación y permite establecer medidas preventivas o correctivas que favorezcan la continuidad y disponibilidad de los servicios.
    p.mb-4(data-aos="fade-down") Durante este proceso es posible identificar diferentes situaciones que requieren la toma de decisiones, entre ellas:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C08.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Cumplimiento o incumplimiento de los acuerdos de nivel de servicio (SLA).
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Incremento en la frecuencia de fallas de un servicio.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 Aumento en los tiempos de recuperación después de una interrupción.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Disminución del rendimiento durante periodos de alta demanda.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              p.mb-0 Necesidad de ampliar la capacidad de la infraestructura tecnológica.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              p.mb-0 Implementación de acciones preventivas para reducir riesgos operativos.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img28.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") La interpretación de estos resultados permite priorizar las acciones de mejora de acuerdo con el impacto que tienen sobre la operación de los servicios tecnológicos. Asimismo, facilita la planificación de actividades relacionadas con la optimización de recursos, la actualización de la infraestructura, el fortalecimiento de los procesos de monitoreo y la mejora de la disponibilidad de los servicios.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C08.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") Por ejemplo, una organización identifica mediante el monitoreo de su plataforma en la nube, que el tiempo promedio de recuperación de los servicios ha aumentado durante las últimas semanas. Después de analizar esta información, decide revisar los procedimientos de atención de incidentes, fortalecer los mecanismos de recuperación y actualizar algunos componentes de la infraestructura. Estas acciones contribuyen a reducir los tiempos de restablecimiento del servicio y mejorar el cumplimiento de los acuerdos de nivel de servicio.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img29.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La interpretación adecuada de la información obtenida mediante el monitoreo constituye un elemento fundamental para la gestión de los servicios tecnológicos. El análisis permanente de los resultados favorece la toma de decisiones basada en evidencia, fortalece la mejora continua y contribuye a garantizar servicios más confiables, disponibles y alineados con las necesidades de las organizaciones y sus usuarios.
</template>
<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
