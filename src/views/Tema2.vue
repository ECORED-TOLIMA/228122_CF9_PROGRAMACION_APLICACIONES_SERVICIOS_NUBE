<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Pruebas de rendimiento de servicios
    p.mb-4(data-aos="fade-down") Las organizaciones requieren que los servicios tecnológicos respondan de manera eficiente ante diferentes niveles de utilización, garantizando la disponibilidad y el desempeño de las aplicaciones, los servidores y la infraestructura de red. Para lograrlo, es necesario evaluar periódicamente el comportamiento de estos servicios mediante pruebas que permitan identificar su capacidad de respuesta, estabilidad y rendimiento en diferentes condiciones de operación.
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Las pruebas de rendimiento constituyen un conjunto de procedimientos orientados a medir el comportamiento de un servicio cuando es sometido a diferentes niveles de carga de trabajo. Su aplicación permite determinar si la infraestructura tecnológica dispone de los recursos necesarios para atender las solicitudes de los usuarios, mantener tiempos de respuesta adecuados y operar de manera estable frente a incrementos en la demanda.
    p.mb-4(data-aos="fade-down") La ejecución de estas pruebas facilita la identificación de cuellos de botella, limitaciones en el procesamiento, problemas de configuración y posibles fallas que podrían afectar la continuidad del servicio. Asimismo, proporciona información útil para optimizar el uso de los recursos tecnológicos, planificar el crecimiento de la infraestructura y respaldar la toma de decisiones relacionadas con el mantenimiento y la mejora de los servicios.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img02.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Las pruebas de rendimiento pueden aplicarse a diferentes componentes de una infraestructura tecnológica, como servidores, aplicaciones, bases de datos, servicios <em>web</em> o plataformas alojadas en entornos de computación en la nube. Dependiendo del objetivo de la evaluación, es posible analizar aspectos como la capacidad de procesamiento, el consumo de recursos, la estabilidad del servicio y los tiempos de respuesta frente a distintos escenarios de utilización.
        p.mb-0(data-aos="fade-down") Con el propósito de comprender el alcance de las pruebas de rendimiento, a continuación, se presenta la relación entre los principales elementos que intervienen en este proceso.
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t2/img03.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Usuarios o aplicaciones
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t2/img04.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Solicitudes al servicio
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t2/img05.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Procesamiento del servicio
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t2/img06.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Medición del rendimiento
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t2/img07.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Análisis de resultados
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t2/img08.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Acciones de optimización
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Las pruebas de rendimiento no se limitan a medir la velocidad de respuesta de un servicio. También permiten analizar la forma en que la infraestructura procesa las solicitudes, identificar posibles limitaciones en el uso de los recursos y establecer acciones orientadas a mejorar el desempeño y la estabilidad de los servicios tecnológicos.
    p.mb-0(data-aos="fade-down") La aplicación periódica de estas pruebas contribuye al cumplimiento de los acuerdos de nivel de servicio (SLA), fortalece la continuidad operativa y favorece la implementación de estrategias de mejora continua, permitiendo que la infraestructura tecnológica responda de manera eficiente a las necesidades de la organización.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Conceptos de pruebas de carga y de estrés
    p.mb-4(data-aos="fade-down") Las pruebas de carga y las pruebas de estrés forman parte de las pruebas de rendimiento utilizadas para evaluar el comportamiento de los servicios tecnológicos ante diferentes condiciones de operación. Su aplicación permite conocer la capacidad de respuesta de la infraestructura, identificar posibles limitaciones y establecer acciones de mejora que contribuyan a garantizar la disponibilidad y la continuidad del servicio.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") Aunque ambas pruebas buscan evaluar el desempeño de un sistema, su propósito y las condiciones bajo las cuales se ejecutan son diferentes. Mientras las pruebas de carga verifican el comportamiento del servicio bajo condiciones normales o esperadas de utilización, las pruebas de estrés analizan la respuesta del sistema cuando es sometido a condiciones superiores a su capacidad de operación.
      .col-lg-6.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img09.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Las principales diferencias entre estos dos tipos de pruebas son:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Comparación entre pruebas de carga y pruebas de estrés
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Aspecto
                th(data-aos="fade-down")(style= "width: 40%") Pruebas de carga
                th(data-aos="fade-down")(style= "width: 40%") Pruebas de estrés
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Objetivo
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Evaluar el comportamiento del servicio bajo una carga de trabajo esperada.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Determinar el comportamiento del servicio cuando supera su capacidad de operación.
              tr
                td(data-aos="fade-down") Condiciones de ejecución
                td(data-aos="fade-down") Simulan el número habitual de usuarios o solicitudes.
                td(data-aos="fade-down") Incrementan progresivamente la carga hasta provocar degradación o fallas.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Información obtenida
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Tiempos de respuesta, estabilidad y utilización de recursos.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Punto de saturación, capacidad de recuperación y comportamiento ante fallas.
              tr
                td(data-aos="fade-down") Aplicación
                td(data-aos="fade-down") Validar el desempeño antes de la puesta en producción o durante el monitoreo del servicio.
                td(data-aos="fade-down") Identificar límites operativos y fortalecer la planificación de la infraestructura.
    p.mb-4(data-aos="fade-down") Ambos tipos de pruebas son complementarios dentro de la gestión del rendimiento. Las pruebas de carga permiten validar que los servicios funcionen adecuadamente bajo condiciones normales de operación, mientras que las pruebas de estrés facilitan la identificación de los límites de la infraestructura y la evaluación de su capacidad para recuperarse ante escenarios de alta demanda.
    TabsC.color-acento-botones.mb-4
      .py-3.py-md-4(titulo="Pruebas de carga")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t2/img10.jpg', alt='Imagen decorativa')
            .col-lg-7.mb-4.mb-md-0
              p.mb-4 Consisten en someter un servicio, aplicación o infraestructura tecnológica a un volumen de trabajo similar al esperado durante su operación habitual. Su propósito es verificar que el sistema mantenga un desempeño estable cuando atiende la cantidad de usuarios, transacciones o solicitudes para la cual fue diseñado.
              p.mb-0 Durante su ejecución es posible medir indicadores como el tiempo de respuesta, el consumo de recursos, el número de solicitudes procesadas y la estabilidad del servicio. Los resultados obtenidos permiten identificar oportunidades de optimización antes de que la solución sea puesta en producción o cuando se realizan modificaciones en la infraestructura. 
      .py-3.py-md-4(titulo="Pruebas de estrés")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t2/img11.jpg', alt='Imagen decorativa')
            .col-lg-7.mb-4.mb-md-0
              p.mb-4 Buscan evaluar el comportamiento de un servicio cuando la carga supera las condiciones normales de operación. Para ello, incrementan progresivamente el número de usuarios o solicitudes hasta alcanzar un punto en el que el sistema presenta degradación en su rendimiento o deja de responder correctamente.
              p.mb-0 Estas pruebas permiten identificar el límite de capacidad de la infraestructura, evaluar los mecanismos de recuperación ante fallas y determinar si el servicio mantiene condiciones mínimas de funcionamiento durante situaciones críticas. La información obtenida resulta útil para fortalecer la planificación de la capacidad, implementar estrategias de continuidad y reducir el impacto de posibles interrupciones en la prestación de los servicios tecnológicos.
    p.mb-0(data-aos="fade-down") La aplicación conjunta de pruebas de carga y de estrés proporciona información valiosa sobre el comportamiento de la infraestructura tecnológica en diferentes escenarios de operación. Estos resultados facilitan la toma de decisiones relacionadas con la optimización de recursos, la planificación del crecimiento de la plataforma y la implementación de acciones orientadas a garantizar un servicio confiable y de calidad.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Herramientas para pruebas de rendimiento
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img12.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") Las pruebas de rendimiento requieren herramientas especializadas que permitan simular diferentes condiciones de operación y recopilar información sobre el comportamiento de los servicios tecnológicos. Estas herramientas facilitan la generación de múltiples solicitudes de manera controlada, el monitoreo del desempeño y el análisis de indicadores relacionados con la capacidad de respuesta, el uso de recursos y la estabilidad de la infraestructura.
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Su utilización contribuye a identificar posibles limitaciones antes de que los servicios sean puestos en funcionamiento o cuando se realizan cambios en la infraestructura tecnológica. De esta manera, las organizaciones pueden anticipar problemas de rendimiento, optimizar la configuración de sus plataformas y fortalecer la continuidad de los servicios.
        p.mb-0(data-aos="fade-down") Existen diversas herramientas para realizar pruebas de rendimiento, cada una con características particulares según el tipo de servicio que se desea evaluar y los objetivos de la prueba. A continuación, se presentan algunas de las herramientas más utilizadas.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5
          span Herramientas utilizadas para pruebas de rendimiento
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Herramienta
                th(data-aos="fade-down")(style= "width: 70%") Características principales
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Apache JMeter
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Herramienta de código abierto que permite realizar pruebas de carga, estrés y rendimiento sobre aplicaciones <em>web</em>, servicios <em>web</em>, bases de datos y otros servicios de red.
              tr
                td(data-aos="fade-down") LoadRunner
                td(data-aos="fade-down") Plataforma comercial utilizada para evaluar el rendimiento y la escalabilidad de aplicaciones empresariales mediante la simulación de múltiples usuarios.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Gatling
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Herramienta orientada a pruebas de carga sobre aplicaciones <em>web</em> y API, reconocida por su alto rendimiento y generación de reportes.
              tr
                td(data-aos="fade-down") k6
                td(data-aos="fade-down") Herramienta de código abierto para automatizar pruebas de rendimiento mediante <em>scripts</em> e integrarse con procesos de integración y entrega continua (CI/CD).
    p.mb-4(data-aos="fade-down") Existen diferentes herramientas para evaluar el rendimiento de los servicios tecnológicos. Aunque todas buscan analizar el comportamiento de la infraestructura bajo distintas condiciones de operación, se diferencian por sus características, funcionalidades y escenarios de aplicación. Entre ellas, Apache JMeter se destaca por ser una herramienta de código abierto, ampliamente utilizada y compatible con diferentes tipos de servicios, razón por la cual se toma como referencia en este componente.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Apache JMeter es una herramienta desarrollada para evaluar el rendimiento de aplicaciones y servicios mediante la simulación de múltiples usuarios que realizan solicitudes de manera simultánea. Su principal propósito es medir el comportamiento de la infraestructura tecnológica frente a diferentes niveles de demanda, permitiendo identificar tiempos de respuesta, capacidad de procesamiento y posibles limitaciones en el desempeño de los servicios.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-3.col-6.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img14.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.text-bold.mb-4 Entre las principales capacidades de JMeter se encuentran:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Simular múltiples usuarios concurrentes.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Ejecutar pruebas de carga y de estrés.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Evaluar aplicaciones <em>web</em>, servicios <em>web</em>, bases de datos y otros servicios de red.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Registrar métricas relacionadas con el rendimiento de los servicios.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Generar reportes que facilitan el análisis de los resultados obtenidos.
    p(data-aos="fade-down") Aunque Apache JMeter ofrece diversas funcionalidades para evaluar el rendimiento de los servicios tecnológicos, la obtención de resultados confiables depende de una adecuada planificación y ejecución de las pruebas. Para ello, es necesario seguir un proceso organizado que permita definir el objetivo de la evaluación, configurar el escenario de prueba, recopilar la información generada y analizar los resultados obtenidos.
    p.mb-4(data-aos="fade-down") El proceso general para realizar una prueba de rendimiento utilizando Apache JMeter comprende las siguientes etapas:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img15.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img16.svg", alt="Imagen decorativa").img100.m-auto
                  p Definición del objetivo de la prueba.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img17.svg", alt="Imagen decorativa").img100.m-auto
                  p Configuración del escenario (usuarios, solicitudes y duración).
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img25.svg", alt="Imagen decorativa").img100.m-auto
                  p Ejecución de la prueba.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img18.svg", alt="Imagen decorativa").img100.m-auto
                  p Recolección de métricas e indicadores.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img19.svg", alt="Imagen decorativa").img100.m-auto
                  p Análisis de los resultados.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img20.svg", alt="Imagen decorativa").img100.m-auto
                  p Implementación de acciones de mejora.
    p.mb-0(data-aos="fade-down") La ejecución de una prueba de rendimiento no finaliza con la obtención de los resultados. La información recopilada debe analizarse para determinar si el servicio cumple con los niveles de desempeño esperados o si requiere ajustes en la configuración, la infraestructura o la asignación de recursos. Este proceso constituye un insumo para la toma de decisiones orientadas a la optimización y mejora continua de los servicios tecnológicos.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Tipos de pruebas sobre servicios
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img21.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") La evaluación del rendimiento de los servicios tecnológicos comprende diferentes tipos de pruebas, cada una diseñada para analizar el comportamiento de la infraestructura bajo condiciones específicas de operación. La selección del tipo de prueba depende de los objetivos de la evaluación, las características del servicio y los aspectos del desempeño que se desean verificar.
        .cajon.cajon.C08.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Estas pruebas permiten identificar oportunidades de mejora relacionadas con la capacidad de procesamiento, la estabilidad, la disponibilidad y la confiabilidad de los servicios, facilitando la toma de decisiones para optimizar la infraestructura tecnológica.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6
          span Herramientas utilizadas para pruebas de rendimiento
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de prueba
                th(data-aos="fade-down")(style= "width: 70%") Propósito
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Prueba de carga
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Evalúa el comportamiento del servicio bajo condiciones normales o esperadas de utilización.
              tr
                td(data-aos="fade-down") Prueba de estrés
                td(data-aos="fade-down") Determina la respuesta del servicio cuando la carga supera su capacidad de operación.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Prueba de volumen
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Analiza el comportamiento del servicio al procesar grandes cantidades de información o datos.
              tr
                td(data-aos="fade-down") Prueba de resistencia (<em>endurance</em> o <em>soak</em>)
                td(data-aos="fade-down") Verifica la estabilidad del servicio durante períodos prolongados de operación continua.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Prueba de escalabilidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Evalúa la capacidad del servicio para adaptarse al incremento de usuarios, solicitudes o recursos sin afectar significativamente su desempeño.
    p.mb-4(data-aos="fade-down") Cada tipo de prueba cumple una función específica dentro de la evaluación del rendimiento de los servicios tecnológicos. Mientras las pruebas de carga y de estrés, descritas anteriormente, permiten analizar el comportamiento del servicio ante diferentes niveles de demanda, las pruebas de volumen, resistencia y escalabilidad amplían la evaluación al verificar el procesamiento de grandes cantidades de información, la estabilidad durante la operación continua y la capacidad de crecimiento de la infraestructura.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C12.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img22.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Prueba de volumen
            p Las pruebas de volumen consisten en evaluar el comportamiento de un servicio cuando procesa grandes cantidades de datos. Su propósito es verificar que la infraestructura mantenga un desempeño adecuado durante operaciones que implican altos niveles de almacenamiento, consulta o transferencia de información.
          .col-xl.col-lg-6.tarjeta.tarjeta--C13.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img23.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Prueba de resistencia
            p Las pruebas de resistencia, también conocidas como <em>endurance</em> o <em>soak</em> testing, permiten verificar la estabilidad del servicio durante períodos prolongados de funcionamiento continuo. Estas pruebas facilitan la identificación de problemas relacionados con el consumo de recursos, degradación del rendimiento o fallas que pueden presentarse con el paso del tiempo.
          .col-xl.col-lg-6.tarjeta.tarjeta--C14.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t2/img24.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Prueba de escalabilidad
            p Las pruebas de escalabilidad evalúan la capacidad de un servicio para responder adecuadamente al incremento gradual de usuarios, transacciones o recursos tecnológicos. Su aplicación permite determinar si la infraestructura puede crecer de manera eficiente sin afectar la disponibilidad ni el rendimiento del servicio.
    p.mb-0(data-aos="fade-down") La aplicación de diferentes tipos de pruebas proporciona una visión integral del comportamiento de los servicios tecnológicos. La información obtenida facilita la identificación de fortalezas y oportunidades de mejora, contribuyendo a la optimización de la infraestructura y al cumplimiento de los niveles de servicio establecidos.
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
