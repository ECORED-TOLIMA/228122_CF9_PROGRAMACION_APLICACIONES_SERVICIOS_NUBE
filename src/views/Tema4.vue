<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión de continuidad y seguridad
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") La gestión de continuidad y seguridad comprende el conjunto de estrategias, procedimientos y controles orientados a garantizar que los servicios tecnológicos permanezcan disponibles y protegidos frente a incidentes que puedan afectar su funcionamiento. Su propósito es reducir el impacto de fallas, minimizar los tiempos de interrupción y asegurar la recuperación de los servicios cuando se presentan situaciones que comprometen la operación de la infraestructura tecnológica.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En los entornos tecnológicos actuales, la continuidad de los servicios depende tanto de la disponibilidad de los recursos como de la implementación de medidas de seguridad que permitan prevenir, detectar y responder oportunamente ante diferentes tipos de riesgos. Para ello, las organizaciones adoptan mecanismos que fortalecen la resiliencia de la infraestructura y favorecen la prestación continua de los servicios.
    p.mb-4(data-aos="fade-down") La gestión de continuidad integra diferentes acciones que abarcan la implementación de infraestructuras redundantes, la elaboración de planes de contingencia, la definición de procedimientos operativos y la aplicación de controles de seguridad, especialmente en entornos de computación en la nube. Estas acciones contribuyen a mantener la estabilidad de los servicios y a disminuir el impacto de eventos inesperados sobre la operación.
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img02.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img03.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Servicios tecnológicos
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img04.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Monitoreo continuo
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img05.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Recolección de datos
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img06.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Análisis de indicadores
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img07.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Detección de incidentes
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img08.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Implementación de acciones de mejora
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img09.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Verificación del desempeño
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img10.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-2(data-aos="fade-down") La gestión de continuidad y seguridad, inicia con la identificación de los riesgos que pueden afectar la operación de los servicios tecnológicos. Posteriormente, se implementan controles orientados a reducir la probabilidad de interrupciones, fortalecer la disponibilidad mediante mecanismos de redundancia y establecer planes que permitan recuperar los servicios cuando ocurre un incidente. Finalmente, el monitoreo continuo facilita la evaluación de las acciones implementadas y la mejora permanente de la infraestructura tecnológica.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") La aplicación de estrategias de continuidad y seguridad fortalece la capacidad de las organizaciones para mantener la disponibilidad de sus servicios tecnológicos, responder de manera oportuna ante incidentes y proteger la información que soporta los procesos institucionales. Estos elementos constituyen la base para implementar mecanismos de redundancia, planes de contingencia y controles de seguridad.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Redundancia de servidores y tolerancia a fallas
    p.mb-4(data-aos="fade-down") La disponibilidad de los servicios tecnológicos depende de la capacidad de la infraestructura para continuar operando aun cuando alguno de sus componentes presente fallas. Para lograrlo, las organizaciones implementan estrategias de redundancia y tolerancia a fallas que permiten reducir el riesgo de interrupciones y garantizar la continuidad de los servicios.
    figure.mb-4
      img(src='@/assets/curso/temas/t4/img11.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") La redundancia de servidores consiste en disponer de recursos tecnológicos adicionales que respaldan el funcionamiento de un servicio cuando el servidor principal presenta una falla o requiere mantenimiento. Estos recursos pueden mantenerse disponibles de manera permanente o activarse únicamente cuando ocurre una interrupción, permitiendo que los usuarios continúen accediendo al servicio con una afectación mínima.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img12.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-3.mb-4
          p.mb-0(data-aos="fade-down") Por su parte, la tolerancia a fallas corresponde a la capacidad de un sistema para continuar prestando un servicio aun cuando uno o varios de sus componentes presenten fallas. Esta capacidad se logra mediante la implementación de mecanismos que permiten detectar los incidentes y transferir automáticamente la operación hacia los recursos disponibles, reduciendo los tiempos de indisponibilidad.
        p.mb-0(data-aos="fade-down") Con el propósito de comprender la relación entre la redundancia de servidores y la tolerancia a fallas, en la siguiente figura, se presenta un esquema general del funcionamiento de estos mecanismos.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Esquema general de redundancia de servidores y tolerancia a fallas
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t4/img13.svg', alt='En la figura 2 se presenta un esquema general de redundancia de servidores y tolerancia a fallas, en el que un servicio tecnológico es soportado por un servidor principal y un servidor redundante para garantizar la continuidad del servicio ante posibles fallas.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t4/img14.svg', alt='En la figura 2 se presenta un esquema general de redundancia de servidores y tolerancia a fallas, en el que un servicio tecnológico es soportado por un servidor principal y un servidor redundante para garantizar la continuidad del servicio ante posibles fallas.')
    p.mb-4(data-aos="fade-down") Un servicio tecnológico puede mantenerse disponible mediante la utilización de un servidor principal y un servidor redundante. Cuando ocurre una falla en el servidor principal, el servidor de respaldo permite mantener la operación del servicio, favoreciendo la continuidad y reduciendo el impacto para los usuarios.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-3.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img15.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.text-bold.mb-4 La implementación de mecanismos de redundancia y tolerancia a fallas aporta diferentes beneficios para la gestión de los servicios tecnológicos, entre ellos:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Incrementar la disponibilidad de los servicios.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Reducir los tiempos de interrupción ante incidentes.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Favorecer la continuidad operativa de la infraestructura.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Disminuir el impacto de las fallas sobre los usuarios.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Fortalecer el cumplimiento de los acuerdos de nivel de servicio (SLA).
    p.mb-0(data-aos="fade-down") Estas estrategias constituyen un elemento fundamental dentro de la gestión de continuidad, ya que permiten mantener la operación de los servicios tecnológicos frente a diferentes escenarios de falla. Su implementación, complementada con planes de contingencia y procedimientos operativos, fortalece la resiliencia de la infraestructura y contribuye a garantizar la prestación continua de los servicios.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Planes de contingencia y procedimientos operativos
    p.mb-4(data-aos="fade-down") Los servicios tecnológicos pueden verse afectados por eventos inesperados como fallas en los equipos, interrupciones del suministro eléctrico, errores humanos, incidentes de ciberseguridad o desastres naturales. Para reducir el impacto de estas situaciones, las organizaciones diseñan planes de contingencia y establecen procedimientos operativos que orientan las acciones necesarias para mantener la continuidad de los servicios y recuperar la operación en el menor tiempo posible.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img16.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.px-4.py-1
          p.mb-0(data-aos="fade-down") Un <b>plan de contingencia</b> es un conjunto de estrategias y acciones previamente definidas que permiten responder de manera organizada ante eventos que afectan el funcionamiento de la infraestructura tecnológica. Su propósito es minimizar las consecuencias de los incidentes, proteger los recursos críticos y restablecer los servicios de forma segura y eficiente.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img16.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-1
          p.mb-0(data-aos="fade-down") Por su parte, los <b>procedimientos operativos</b> describen las actividades que deben ejecutarse para prevenir, atender y recuperar la operación de los servicios tecnológicos. Estos procedimientos establecen responsabilidades, definen las acciones que deben realizarse en cada etapa y favorecen una respuesta coordinada frente a los diferentes escenarios de contingencia.
    p.mb-4(data-aos="fade-down") Con el propósito de comprender el proceso general de actuación ante un incidente, a continuación, se presentan las principales etapas de un plan de contingencia:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img17.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img18.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Incidente detectado
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img19.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Evaluación de la situación
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img20.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Activación del plan de contingencia
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img21.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Aplicación de procedimientos operativos
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img22.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Recuperación del servicio
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img23.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Verificación del funcionamiento
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img24.svg", alt="Imagen decorativa").img100.m-auto
                  h5 Mejora continua
    p(data-aos="fade-down") El proceso inicia con la detección y evaluación de la situación, continúa con la activación del plan de contingencia y la ejecución de los procedimientos operativos, y finaliza con la recuperación y verificación del funcionamiento del servicio. La información obtenida durante este proceso permite fortalecer las acciones de mejora continua y preparar a la organización para futuros eventos.
    p.mb-4(data-aos="fade-down") La implementación de planes de contingencia y procedimientos operativos favorece la continuidad de los servicios tecnológicos, reduce los tiempos de recuperación y fortalece la capacidad de respuesta de las organizaciones frente a situaciones que puedan comprometer la disponibilidad de la infraestructura. Asimismo, contribuye al cumplimiento de los acuerdos de nivel de servicio y al fortalecimiento de la gestión de continuidad y seguridad.
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.C08.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") Por ejemplo, durante una interrupción del servicio ocasionada por una falla en un servidor, la organización activa su plan de contingencia y ejecuta los procedimientos definidos para restaurar la operación utilizando la infraestructura de respaldo. Una vez recuperado el servicio, se verifica su funcionamiento y se analizan las causas del incidente para implementar acciones que reduzcan la probabilidad de que vuelva a presentarse.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img25.jpg', alt='Imagen decorativa')
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Seguridad en entornos #[em cloud]
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img26.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") La computación en la nube ofrece múltiples beneficios relacionados con la disponibilidad, la escalabilidad y el acceso a los servicios tecnológicos. Sin embargo, también requiere la implementación de medidas de seguridad que permitan proteger la información, garantizar la continuidad de los servicios y reducir los riesgos asociados al acceso, almacenamiento y procesamiento de los datos.
        .cajon.cajon.C08.color-primario.px-4.py-4.mb-4
          p.mb-0(data-aos="fade-down") La seguridad en entornos <em>cloud</em> comprende el conjunto de políticas, controles y mecanismos orientados a preservar la confidencialidad, la integridad y la disponibilidad de la información. Estas medidas permiten prevenir accesos no autorizados, proteger los recursos tecnológicos y fortalecer la confiabilidad de los servicios ofrecidos a los usuarios.
        p.mb-0(data-aos="fade-down") Entre las principales medidas de seguridad implementadas en entornos <em>cloud</em> se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Control de acceso")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite restringir el acceso a los recursos tecnológicos mediante la asignación de permisos de acuerdo con los roles y responsabilidades de los usuarios.
          .row(numero="2" titulo="Autenticación multifactor (MFA)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Incorpora uno o más mecanismos adicionales de verificación de identidad para fortalecer la protección del acceso a los servicios.
          .row(numero="3" titulo="Cifrado de la información")
            .col-12.mb-4.mb-md-0
              p.mb-0 Protege los datos durante su almacenamiento y transmisión, reduciendo el riesgo de accesos no autorizados.
          .row(numero="4" titulo="Copias de seguridad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Garantizan la disponibilidad de la información mediante la creación de respaldos que facilitan la recuperación de los datos en caso de incidentes.
          .row(numero="5" titulo="Monitoreo de la seguridad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite identificar eventos inusuales, detectar posibles amenazas y generar alertas que facilitan una respuesta oportuna.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img27.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img28.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") Un <b>plan de contingencia</b> es un conjunto de estrategias y acciones previamente definidas que permiten responder de manera organizada ante eventos que afectan el funcionamiento de la infraestructura tecnológica. Su propósito es minimizar las consecuencias de los incidentes, proteger los recursos críticos y restablecer los servicios de forma segura y eficiente.
    p.mb-4(data-aos="fade-down") Los principales proveedores de servicios de computación en la nube incorporan herramientas especializadas que facilitan la gestión de la seguridad. Entre ellas se encuentran Microsoft Defender for <em>Cloud</em>, AWS Security Hub y Google Security Command Center, las cuales permiten supervisar el estado de seguridad de los recursos, identificar vulnerabilidades, generar recomendaciones y apoyar la implementación de buenas prácticas para la protección de la infraestructura y las aplicaciones.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C08.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") Por ejemplo, una empresa desarrolla y despliega una aplicación en la nube para la gestión de sus procesos internos. Para fortalecer su seguridad, configura autenticación multifactor para los usuarios administradores, cifra la información almacenada, programa copias de seguridad periódicas y utiliza una herramienta de monitoreo, como Microsoft Defender for <em>Cloud</em>, AWS Security Hub o Google Security Command Center, para identificar vulnerabilidades y recibir recomendaciones que contribuyan a proteger la infraestructura y garantizar la continuidad del servicio.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img29.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La implementación de medidas de seguridad en entornos <em>cloud</em> contribuye a proteger la infraestructura, las aplicaciones y la información frente a diferentes amenazas. Además, complementa estrategias como la redundancia, los planes de contingencia y el monitoreo de los servicios tecnológicos, fortaleciendo la disponibilidad y la confiabilidad de los servicios desplegados en la nube.
</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
