export default {
  global: {
    Name: 'Monitoreo y gestión de servicios tecnológicos',
    Description:
      'Este componente desarrolla los fundamentos para verificar, monitorear y gestionar los servicios tecnológicos que soportan una infraestructura de cómputo. Aborda la evaluación del funcionamiento de los servicios de red, las pruebas de rendimiento, el monitoreo mediante indicadores, las estrategias de continuidad y seguridad, así como la documentación necesaria para garantizar la disponibilidad, confiabilidad y calidad de los servicios tecnológicos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Verificación de servicios de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pruebas de funcionamiento de servicios de red',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Servicios DNS, DNSSEC y DDNS',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Servicios de correo electrónico',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Pruebas de rendimiento de servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos de pruebas de carga y de estrés',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas para pruebas de rendimiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de pruebas sobre servicios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Monitoreo y niveles de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Acuerdos de nivel de servicio (SLA)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Indicadores MTBF y MTTR',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Interpretación de resultados para la toma de decisiones',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de continuidad y seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Redundancia de servidores y tolerancia a fallas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Planes de contingencia y procedimientos operativos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Seguridad en entornos <em>cloud</em>',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Documentación y auditoría de servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Bitácoras de operación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Informes de auditoría',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Manuales de despliegue y servicio',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228122_CF09_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acuerdo de nivel de servicio (SLA)',
      significado:
        'Documento que establece los niveles de calidad, disponibilidad y desempeño que debe cumplir un servicio tecnológico entre el proveedor y el cliente.',
    },
    {
      termino: 'Auditoría de servicios',
      significado:
        'Proceso de evaluación que verifica el cumplimiento de políticas, procedimientos y controles relacionados con la gestión de los servicios tecnológicos.',
    },
    {
      termino: 'Autenticación multifactor (MFA)',
      significado:
        'Mecanismo de seguridad que requiere dos o más métodos de verificación para confirmar la identidad de un usuario antes de permitir el acceso a un sistema.',
    },
    {
      termino: 'Bitácora de operación',
      significado:
        'Registro cronológico de las actividades, eventos e incidentes relacionados con la operación de un servicio tecnológico.',
    },
    {
      termino: 'Cifrado',
      significado:
        'Técnica de seguridad que transforma la información en un formato protegido para impedir el acceso de personas no autorizadas.',
    },
    {
      termino: 'DNS (Sistema de Nombres de Dominio)',
      significado:
        'Servicio que traduce los nombres de dominio en direcciones IP para facilitar el acceso a los recursos de una red.',
    },
    {
      termino: 'DNSSEC',
      significado:
        'Extensión del servicio DNS que incorpora mecanismos de autenticación para proteger la integridad y autenticidad de la información consultada.',
    },
    {
      termino: 'DDNS (Sistema de nombres de dominio dinámico)',
      significado:
        'Servicio que actualiza automáticamente la asociación entre un nombre de dominio y una dirección IP cuando esta cambia.',
    },
    {
      termino: 'Indicador MTBF',
      significado:
        'Métrica que representa el tiempo medio de funcionamiento de un sistema entre una falla y la siguiente.',
    },
    {
      termino: 'Indicador MTTR',
      significado:
        'Métrica que mide el tiempo promedio necesario para recuperar un servicio después de presentarse una falla.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Proceso de supervisión continua del estado y desempeño de un servicio tecnológico para detectar incidentes y evaluar su funcionamiento.',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'Conjunto de acciones previamente definidas para responder y recuperar la operación de un servicio ante eventos que afectan su funcionamiento.',
    },
    {
      termino: 'Prueba de carga',
      significado:
        'Evaluación que determina el comportamiento de un servicio cuando opera bajo una cantidad esperada de usuarios o transacciones.',
    },
    {
      termino: 'Prueba de estrés',
      significado:
        'Evaluación que analiza el comportamiento de un servicio cuando es sometido a condiciones superiores a su capacidad prevista de operación.',
    },
    {
      termino: 'Redundancia',
      significado:
        'Estrategia que consiste en disponer de recursos tecnológicos adicionales para mantener la continuidad del servicio en caso de fallas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amazon Web Services. (s. f.). <em>AWS Well-Architected Tool Documentation</em>.',
      link: 'https://docs.aws.amazon.com/wellarchitected/',
    },
    {
      referencia:
        'Google Cloud. (2024). <em>Well-Architected Framework</em> de Google Cloud.',
      link: 'https://cloud.google.com/architecture/framework',
    },
    {
      referencia:
        'International Organization for Standardization. (2022). <em>ISO/IEC 27001:2022 Information security, cybersecurity and privacy protection - Information security management systems - Requirements</em>. ISO.',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). <em>ISO/IEC 20000-1:2018 Information technology - Service management - Part 1: Service management system requirements</em>. ISO.',
    },
    {
      referencia:
        'Microsoft. (s. f.). <em>Marco de buena arquitectura de Azure</em>.',
      link: 'https://learn.microsoft.com/azure/well-architected/',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2020). <em>Security and Privacy Controls for Information Systems and Organizations</em> (SP 800-53 Rev. 5).',
      link: 'https://doi.org/10.6028/NIST.SP.800-53r5',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2011). <em>The NIST Definition of Cloud Computing</em> (Special Publication 800-145).',
      link: 'https://doi.org/10.6028/NIST.SP.800-145',
    },
    {
      referencia:
        'Office of Government Commerce. (2019). <em>ITIL Foundation: ITIL 4 Edition</em>. TSO (The Stationery Office).',
    },
    {
      referencia: 'Red Hat. (2023). <em>Understanding cloud computing</em>.',
      link: 'https://www.redhat.com/en/topics/cloud-computing',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
