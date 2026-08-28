<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Verificación de servicios de red
    p.mb-4(data-aos="fade-down") Las organizaciones dependen de servicios de red que permiten la comunicación entre usuarios, aplicaciones, dispositivos y sistemas de información. Estos servicios soportan procesos esenciales como el acceso a aplicaciones, la navegación por Internet, el intercambio de información, la autenticación de usuarios y la comunicación mediante correo electrónico. Debido a su importancia, es necesario verificar periódicamente su funcionamiento para garantizar que operen de forma continua, segura y conforme a los requerimientos establecidos por la organización.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") La verificación de servicios de red consiste en evaluar el estado y el desempeño de los diferentes servicios que hacen posible la comunicación dentro de una infraestructura tecnológica. Este proceso permite identificar fallas, detectar configuraciones inadecuadas, validar la disponibilidad de los recursos y comprobar que los servicios respondan correctamente a las solicitudes de los usuarios y las aplicaciones.
        p.mb-0(data-aos="fade-down") Más que una actividad correctiva, la verificación constituye una práctica preventiva que facilita la detección temprana de incidentes antes de que afecten la continuidad de la operación. A través de procedimientos de monitoreo, pruebas de funcionamiento y análisis de resultados, es posible determinar si los servicios cumplen con los niveles de disponibilidad, estabilidad y rendimiento esperados, permitiendo implementar acciones oportunas para minimizar riesgos y reducir el impacto de posibles interrupciones.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En la actualidad, los entornos tecnológicos combinan infraestructuras locales, centros de datos y plataformas de computación en la nube, lo que incrementa la necesidad de realizar procesos de verificación de manera permanente. La diversidad de servicios, protocolos y dispositivos requiere mecanismos de seguimiento que permitan obtener información sobre el comportamiento de la infraestructura, identificar tendencias y apoyar la toma de decisiones relacionadas con la administración de los servicios tecnológicos.
    p.mb-4(data-aos="fade-down") Dentro de este proceso intervienen diferentes tipos de verificaciones, entre ellas la comprobación de servicios de resolución de nombres, servicios de correo electrónico, servicios <em>web</em>, autenticación, transferencia de archivos y bases de datos. Cada uno cumple una función específica dentro de la infraestructura tecnológica y requiere mecanismos particulares para validar su disponibilidad, funcionamiento y capacidad de respuesta.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Proceso general de verificación de servicios de red
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t1/img03.svg', alt=' En la figura 1 se presenta el proceso general de verificación de servicios de red, desde el monitoreo de la infraestructura hasta la implementación de acciones de mejora para garantizar la continuidad del servicio.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img04.svg', alt=' En la figura 1 se presenta el proceso general de verificación de servicios de red, desde el monitoreo de la infraestructura hasta la implementación de acciones de mejora para garantizar la continuidad del servicio.')
    p.mb-0(data-aos="fade-down") La verificación de los servicios de red también contribuye al cumplimiento de los acuerdos de nivel de servicio (SLA), ya que proporciona información objetiva sobre el desempeño de la infraestructura y facilita la medición de indicadores relacionados con la disponibilidad, el tiempo de respuesta y la continuidad del servicio. De esta manera, las organizaciones pueden establecer planes de mejora, optimizar el uso de los recursos tecnológicos, fortalecer la confiabilidad de las plataformas y garantizar una prestación eficiente de los servicios tecnológicos.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Pruebas de funcionamiento de servicios de red
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img05.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Las pruebas de funcionamiento de servicios de red son procedimientos técnicos que permiten comprobar si los diferentes servicios que conforman una infraestructura tecnológica operan de acuerdo con las condiciones establecidas por la organización. Estas pruebas verifican la disponibilidad, accesibilidad y capacidad de respuesta de los servicios, con el propósito de identificar fallas, prevenir interrupciones y garantizar que los usuarios puedan acceder a los recursos de manera oportuna y segura.
        p.mb-0(data-aos="fade-down") La ejecución de estas pruebas constituye una actividad fundamental dentro de la administración de redes, ya que permite evaluar el comportamiento de los servicios antes, durante y después de su puesta en funcionamiento. Asimismo, facilita la detección temprana de incidentes, la validación de cambios realizados en la infraestructura y la verificación de que los servicios continúan operando correctamente después de procesos de actualización, mantenimiento o recuperación ante fallas.
    p(data-aos="fade-down") Las pruebas de funcionamiento pueden realizarse de forma manual o mediante herramientas especializadas de monitoreo y diagnóstico. En ambos casos, el objetivo es obtener información confiable sobre el estado de los servicios y determinar si cumplen con los criterios de operación definidos por la organización.
    p.mb-4(data-aos="fade-down") Entre los aspectos que normalmente se verifican durante estas pruebas se encuentran:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t1/img06.png", alt="")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img07.svg", alt="").img100.m-auto
                  p Disponibilidad del servicio.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img08.svg", alt="").img100.m-auto
                  p Accesibilidad desde la red.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img09.svg", alt="").img100.m-auto
                  p Tiempo de respuesta.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img10.svg", alt="").img100.m-auto
                  p Correcta resolución de solicitudes.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img11.svg", alt="").img100.m-auto
                  p Estado de los puertos asociados al servicio.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img12.svg", alt="").img100.m-auto
                  p Capacidad para atender múltiples solicitudes sin afectar su funcionamiento.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img13.svg", alt="").img100.m-auto
                  p Registro adecuado de eventos y errores.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img14.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") La información obtenida durante las pruebas permite determinar si un servicio presenta un funcionamiento normal o si requiere actividades de mantenimiento, ajustes de configuración o acciones correctivas para restablecer su operación.
    p.mb-4(data-aos="fade-down") Dependiendo del objetivo de la verificación, las organizaciones pueden aplicar diferentes tipos de pruebas sobre los servicios de red. Cada una permite evaluar aspectos específicos relacionados con el comportamiento, la disponibilidad y la estabilidad de la infraestructura.
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t1/img15.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.justify-content-center.align-items-start
            h4 Pruebas de conectividad
            p.mb-0 Verifican que exista comunicación entre los diferentes dispositivos y servicios de la red. Permiten identificar problemas relacionados con enlaces, direccionamiento IP, enrutamiento o disponibilidad de equipos.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t1/img16.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.justify-content-center.align-items-start
            h4 Pruebas de disponibilidad
            p.mb-0 Comprueban que un servicio permanezca activo y accesible para los usuarios durante el tiempo esperado. Estas pruebas son fundamentales para medir el cumplimiento de los acuerdos de nivel de servicio (SLA).
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t1/img17.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.justify-content-center.align-items-start
            h4 Pruebas de respuesta
            p.mb-0 Evalúan el tiempo que tarda un servicio en responder a una solicitud. Un incremento en los tiempos de respuesta puede indicar sobrecarga, problemas de configuración o limitaciones en los recursos tecnológicos.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t1/img18.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.justify-content-center.align-items-start
            h4 Pruebas funcionales
            p.mb-0 Validan que el servicio ejecute correctamente las funciones para las cuales fue implementado. Por ejemplo, verificar que un servidor DNS resuelva nombres de dominio correctamente o que un servidor de correo procese el envío y la recepción de mensajes.
    p.mb-4(data-aos="fade-down") Antes de presentar la clasificación de las pruebas de funcionamiento, es conveniente identificar su propósito dentro del proceso de verificación de servicios de red. A continuación, se presentan los principales tipos de pruebas y el aspecto que permiten evaluar.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12.col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Tipos de pruebas de funcionamiento de servicios de red
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de prueba
                th(data-aos="fade-down")(style= "width: 70%") Aspecto evaluado
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Conectividad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Comunicación entre dispositivos y servicios.
              tr
                td(data-aos="fade-down") Disponibilidad
                td(data-aos="fade-down") Acceso continuo al servicio.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Respuesta
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Tiempo de atención de las solicitudes.
              tr
                td(data-aos="fade-down") Funcional
                td(data-aos="fade-down") Correcta ejecución de las funciones del servicio.
      .col.col-12.col-lg-5
        .row.justify-content-center.align-items-center.mb-0
          .col.col-12.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block.mb-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img19.svg', alt='Imagen decorativa')
          .col.col-12.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") Las pruebas de funcionamiento no constituyen una actividad aislada, sino que forman parte de un proceso continuo de monitoreo y gestión de los servicios tecnológicos. Su aplicación periódica permite identificar desviaciones en el desempeño de la infraestructura, facilitar la toma de decisiones basada en evidencia y contribuir a la continuidad operativa de la organización.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Servicios DNS, DNSSEC y DDNS
    p.mb-4(data-aos="fade-down") Los servicios de resolución de nombres constituyen un componente esencial de las redes de datos, ya que permiten traducir los nombres de dominio utilizados por las personas en direcciones IP que pueden ser interpretadas por los dispositivos de red. Gracias a este mecanismo, los usuarios pueden acceder a sitios <em>web</em>, aplicaciones y otros servicios mediante nombres fáciles de recordar, evitando el uso de direcciones numéricas.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-5(data-aos="fade-down") El principal servicio encargado de esta función es el Sistema de Nombres de Dominio <b>(Domain Name System - DNS)</b>, una arquitectura distribuida y jerárquica que almacena y administra la relación entre nombres de dominio y direcciones IP. Cada vez que un usuario escribe una dirección <em>web</em> en el navegador o una aplicación intenta establecer comunicación con un servidor, se realiza una consulta al servicio DNS para obtener la dirección IP correspondiente y establecer la conexión.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img21.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") El funcionamiento del DNS se basa en servidores especializados que responden las consultas realizadas por clientes y otros servidores de nombres. Esta organización distribuida permite que la resolución de nombres sea rápida, escalable y tolerante a fallos, características indispensables para el funcionamiento de Internet y de las redes corporativas.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img20.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Antes de describir las características de los principales servicios de resolución de nombres, resulta conveniente revisar la relación entre ellos y el propósito que cumplen dentro de una infraestructura tecnológica. A continuación, se presentan los servicios DNS, DNSSEC y DDNS, junto con su función principal.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span Servicios de resolución de nombres en una infraestructura de red
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Servicio
                th(data-aos="fade-down")(style= "width: 70%") Función principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") DNS
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Traduce nombres de dominio en direcciones IP para facilitar el acceso a los recursos de la red.
              tr
                td(data-aos="fade-down") DNSSEC
                td(data-aos="fade-down") Protege la integridad y autenticidad de las respuestas DNS mediante mecanismos criptográficos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") DDNS
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Actualiza automáticamente los registros DNS cuando cambia la dirección IP de un dispositivo.
    p.mb-4(data-aos="fade-down") La información presentada permite identificar que, aunque DNS, DNSSEC y DDNS hacen parte del sistema de resolución de nombres, cada uno cumple una función específica dentro de la infraestructura de red. DNS facilita la localización de recursos mediante nombres de dominio, DNSSEC incorpora mecanismos que fortalecen la seguridad de las consultas y DDNS mantiene actualizados los registros cuando cambian las direcciones IP. En conjunto, estos servicios contribuyen a mejorar la disponibilidad, la confiabilidad y la seguridad de la infraestructura tecnológica.
    .bg05.p-5.px-5.mb-4
      .tarjeta.tarjeta--blanca.p-4
        SlyderA(tipo="b")
          .row.align-items-center
            .col-lg-6.order-2.order-lg-1.mb-4.mb-md-0
              h4 Sistema de Nombres de Dominio (DNS)
              p Es uno de los servicios más utilizados en las infraestructuras tecnológicas, ya que facilita la comunicación entre usuarios, aplicaciones y servidores. Su implementación evita que los usuarios memoricen direcciones IP y contribuye a una administración más eficiente de los recursos de red. Entre sus principales ventajas se encuentran:
              .tarjeta.tarjeta--C12.px-1.py-2
                ul.lista-ul--color.mb-0(data-aos="fade-down")
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Facilitar el acceso a los servicios mediante nombres de dominio.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Reducir errores asociados al uso de direcciones IP.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Favorecer la administración centralizada de los registros de nombres.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Permitir la escalabilidad de la infraestructura tecnológica.
            .col-lg-6.order-1.order-lg-2.mb-4.mb-md-4
              figure
                img(src='@/assets/curso/temas/t1/img22.jpg', alt='Imagen decorativa')
          .row.align-items-center
            .col-lg-6.order-2.order-lg-1.mb-4.mb-md-0
              h4 Extensiones de Seguridad para DNS (DNSSEC)
              p Aunque el DNS ofrece un mecanismo eficiente para la resolución de nombres, originalmente no fue diseñado con mecanismos de autenticación o protección frente a la alteración de la información. Para fortalecer su seguridad surgió DNSSEC (Domain Name System Security Extensions), un conjunto de extensiones que incorpora firmas digitales para verificar que las respuestas obtenidas provienen de servidores autorizados y que la información no ha sido modificada durante la transmisión.
              p La implementación de DNSSEC contribuye a prevenir ataques como la suplantación de respuestas (DNS Spoofing) o el envenenamiento de la memoria caché (Cache Poisoning), fortaleciendo la confianza en la resolución de nombres y reduciendo los riesgos asociados a la manipulación de registros DNS.
            .col-lg-6.order-1.order-lg-2.mb-4.mb-md-4
              figure
                img(src='@/assets/curso/temas/t1/img23.jpg', alt='Imagen decorativa')
          .row.align-items-center
            .col-lg-6.order-2.order-lg-1.mb-4.mb-md-0
              h4 Sistema de nombres de dominio dinámico (DDNS)
              p En algunos entornos tecnológicos, especialmente aquellos donde las direcciones IP cambian con frecuencia, resulta necesario actualizar automáticamente la relación entre el nombre de dominio y la dirección IP asignada al dispositivo. Para ello se utiliza el Sistema de Nombres de Dominio Dinámico (Dynamic Domain Name System - DDNS).
              p El DDNS permite que estas actualizaciones se realicen de manera automática cada vez que cambia la dirección IP, evitando interrupciones en el acceso a los servicios publicados. Esta funcionalidad es ampliamente utilizada en redes domésticas, pequeñas organizaciones y entornos donde los proveedores de Internet asignan direcciones IP dinámicas.
            .col-lg-6.order-1.order-lg-2.mb-4.mb-md-4
              figure
                img(src='@/assets/curso/temas/t1/img24.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En conjunto, DNS, DNSSEC y DDNS permiten garantizar la localización, protección y actualización de los recursos de red, contribuyendo a la disponibilidad, la seguridad y la continuidad de los servicios tecnológicos que soportan las operaciones de una organización.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Servicios de correo electrónico
    p.mb-4(data-aos="fade-down") El correo electrónico es uno de los servicios de comunicación más utilizados en las organizaciones, ya que facilita el intercambio de información entre usuarios, aplicaciones y sistemas ubicados dentro o fuera de la red corporativa. Su funcionamiento depende de un conjunto de protocolos que permiten enviar, recibir y administrar los mensajes de forma eficiente, garantizando la comunicación entre diferentes plataformas y dispositivos.
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img25.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Dentro de una infraestructura tecnológica, los servicios de correo electrónico no solo soportan la comunicación entre las personas, sino que también intervienen en procesos automáticos como el envío de notificaciones, la autenticación de usuarios, la recuperación de contraseñas, la generación de alertas y el intercambio de información entre aplicaciones. Debido a ello, es indispensable verificar periódicamente su disponibilidad y correcto funcionamiento para garantizar la continuidad de los servicios.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img26.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") El funcionamiento del correo electrónico se basa en la interacción de protocolos especializados. Algunos se encargan del envío de mensajes, mientras que otros permiten a los usuarios acceder al correo almacenado en el servidor. Asimismo, existen versiones que incorporan mecanismos de cifrado para proteger la información durante su transmisión.
    p.mb-4(data-aos="fade-down") Con el propósito de identificar la función de los principales protocolos utilizados en los servicios de correo electrónico, a continuación, se presentan sus características generales.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Comparación de los protocolos utilizados en los servicios de correo electrónico
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Protocolo
                th(data-aos="fade-down")(style= "width: 40%") Función principal
                th(data-aos="fade-down")(style= "width: 40%") Seguridad
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") SMTP
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Envía mensajes de correo electrónico entre clientes y servidores o entre servidores de correo.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") No incorpora cifrado de forma nativa.
              tr
                td(data-aos="fade-down") SMTPS
                td(data-aos="fade-down") Realiza el envío de mensajes mediante una conexión cifrada utilizando protocolos de seguridad.
                td(data-aos="fade-down") Sí, protege la transmisión de la información.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") POP3
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite descargar los mensajes almacenados en el servidor para consultarlos desde un cliente de correo.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") No incorpora cifrado de forma nativa.
              tr
                td(data-aos="fade-down") POP3S
                td(data-aos="fade-down") Permite acceder al correo electrónico mediante una conexión cifrada.
                td(data-aos="fade-down") Sí, protege la confidencialidad de la comunicación.
    p(data-aos="fade-down") La información presentada anteriormente, permite identificar que los protocolos utilizados en los servicios de correo electrónico cumplen funciones complementarias. Mientras SMTP y SMTPS gestionan el envío de mensajes, POP3 y POP3S permiten su recepción desde el servidor. Asimismo, las versiones seguras incorporan mecanismos de cifrado que fortalecen la protección de la información durante la comunicación.
    p.mb-4(data-aos="fade-down") Las principales características de estos protocolos son las siguientes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="SMTP (Simple Mail Transfer Protocol)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Protocolo estándar utilizado para el envío de mensajes entre clientes de correo y servidores, así como entre servidores de correo electrónico. Su función principal consiste en transferir los mensajes hacia el servidor de destino para que posteriormente puedan ser recuperados por el destinatario.
          .row(numero="2" titulo="SMTPS (Simple Mail Transfer Protocol Secure)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Versión segura de SMTP que incorpora mecanismos de cifrado para proteger la información durante el envío de los mensajes, reduciendo el riesgo de interceptación de los datos.
          .row(numero="3" titulo="POP3 (Post Office Protocol version 3)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Protocolo que permite descargar los mensajes almacenados en el servidor hacia un cliente de correo electrónico. Dependiendo de la configuración, los mensajes pueden eliminarse del servidor una vez finalizada la descarga.
          .row(numero="4" titulo="POP3S (Post Office Protocol Secure)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Versión segura de POP3 que utiliza conexiones cifradas para garantizar la confidencialidad e integridad de la información durante la recepción de los mensajes.
      .col-lg-6.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img27.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C08.color-primario.p-4
          p.mb-0(data-aos="fade-down") La utilización de protocolos seguros como SMTPS y POP3S constituye una práctica recomendada dentro de la administración de servicios tecnológicos, ya que fortalece la protección de la información, contribuye a la seguridad de las comunicaciones y disminuye los riesgos asociados a la interceptación o alteración de los mensajes electrónicos.
    p.mb-4(data-aos="fade-down") Para comprender cómo opera un servicio de correo electrónico dentro de una red, se puede identificar el siguiente proceso general de comunicación:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img28.svg' alt='AvatarTop')
          h4.text-center Redacción del mensaje
          p El usuario crea el correo electrónico desde un cliente de correo o una plataforma <em>web</em>, incluyendo destinatario, asunto y contenido del mensaje.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img29.svg' alt='AvatarTop')
          h4.text-center Envío del mensaje al servidor de correo
          p El cliente de correo envía el mensaje al servidor utilizando el protocolo SMTP, encargado de gestionar la transmisión inicial del correo.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img30.svg' alt='AvatarTop')
          h4.text-center Transferencia entre servidores de correo
          p El servidor del remitente identifica el servidor del destinatario mediante registros del sistema DNS y transfiere el mensaje hacia dicho servidor.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img31.svg' alt='AvatarTop')
          h4.text-center Almacenamiento del mensaje en el servidor del destinatario
          p Una vez recibido, el servidor almacena el mensaje en el buzón correspondiente al usuario destinatario.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img32.svg' alt='AvatarTop')
          h4.text-center Acceso y lectura del mensaje
          p El destinatario accede a su correo mediante protocolos como POP3 o IMAP, permitiendo visualizar el mensaje desde su equipo o dispositivo móvil.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img33.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") En las organizaciones, una adecuada gestión del correo electrónico permite mejorar la comunicación interna y externa, garantizar la seguridad de la información y asegurar la disponibilidad de uno de los servicios más importantes dentro de la infraestructura tecnológica.
</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
