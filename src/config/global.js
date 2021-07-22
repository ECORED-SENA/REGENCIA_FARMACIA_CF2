export default {
  global: {
    componenteFormativo: 'Sistema General de Seguridad Social en Salud',
    descripcionCurso:
      'En este componente formativo se hace una descripción general del Sistema General de Seguridad Social en Salud en Colombia. Es importante que los conocimientos de la competencia de orientación al usuario sean apropiados para brindar asertivamente la información al usuario de acuerdo a sus necesidades y expectativas. Para ello es importante reconocer y comprender la normatividad vigente que rige las políticas institucionales y conocer las normas que rigen el Sistema de Salud en Colombia.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistema General de Seguridad Social en Salud - SGSSS ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Principios del Sistema General de Seguridad Social en Salud',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normativa del SGSSS',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Actores del SGSSS',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Aseguramiento',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Deberes y derechos en salud',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Afiliación al SGSSS ',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Prestación del servicio y planes de beneficios',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Inspección, Vigilancia y Control - IVC',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Financiación del SGSSS',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Políticas públicas de salud ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Sistema Obligatorio de Garantía de Calidad de Atención en Salud del Sistema General de Seguridad Social en Salud - SOGCS',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Componentes del SOGCS',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Calidad de datos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sistemas de información en salud',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Zlackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA: ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      referencia:
        'Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA: ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA. ',
    },
    {
      referencia:
        'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
    },
    {
      referencia:
        'Áciedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
    },
    {
      referencia:
        'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728',
    },
  ],
  glosario: [
    {
      termino: 'ADRES',
      significado:
        ' Administradora de los Recursos del Sistema General de Seguridad Social en Salud.',
    },
    {
      termino: 'ARL',
      significado: ' Administradora de Riesgos Laborales.',
    },
    {
      termino: 'Calidad',
      significado:
        'Conjunto de propiedades inherentes a una cosa que permite caracterizarla y valorarla con respecto a las restantes de su especie.',
    },
    {
      termino: 'Copagos',
      significado:
        'Aportes en dinero que deben realizar únicamente los beneficiarios, de acuerdo con el Ingreso Base de Cotización del afiliado cotizante, los cuales corresponden a una parte del valor del servicio prestado y tienen como finalidad ayudar a financiar el Sistema.',
    },
    {
      termino: 'ECAT',
      significado:
        ' Subcuenta del Seguro de Riesgos Catastróficos y Accidentes de Tránsito.',
    },
    {
      termino: 'EAPB',
      significado: ' Empresa Administradora de Plan Básico.',
    },
    {
      termino: 'Movilidad',
      significado:
        'Derecho que tiene el afiliado de cambiar del régimen subsidiado hacia el régimen contributivo y viceversa, en el momento que cambien sus condiciones socioeconómicas, sin que exista interrupción en la afiliación, ni cambio de EPS.',
    },
    {
      termino: 'Portabilidad',
      significado:
        'Garantía que da la EPS al usuario para acceder a los servicios de salud en cualquier lugar del territorio nacional, cuando el afiliado y/o su familia que se va temporalmente a un municipio diferente al que reside y se encuentra afiliado.',
    },
    {
      termino: 'PDSP',
      significado: ' Plan Decenal de Salud Pública.',
    },
    {
      termino: 'ReTHUS',
      significado: ' Registro Único Nacional del Talento Humano en Salud.',
    },
    {
      termino: 'SISBÉN',
      significado:
        ' Sistema de Identificación de Potenciales Beneficiarios de Programas Sociales, que permite clasificar a la población de acuerdo con sus condiciones de vida e ingresos. Esta clasificación se utiliza para focalizar la inversión social y garantizar que sea asignada a quienes más lo necesitan.',
    },
    {
      termino: 'SIVIGILA',
      significado: ' Sistema Nacional de Vigilancia en Salud Pública.',
    },
    {
      termino: 'SOAT',
      significado: ' Seguro Obligatorio de Accidentes de Tránsito.',
    },
    {
      termino: 'SOGCS',
      significado: ' Sistema Obligatorio Gestión Calidad en Salud.',
    },
  ],
  complementario: [
    {
      texto: 'Normativa del SGSSS',
      tipo: 'PDF',
      descarga: '/downloads/material-complemetario/Decreto 0780 de 2016.pdf',
    },
    {
      texto: 'PLAN DE CALIDAD COMPONENTE DE LA INFORMACIÓN.',
      tipo: 'PDF',
      descarga:
        '/downloads/material-complemetario/plan-calidad-componentes-informacion-minsalud-2020.pdf',
    },
    {
      texto: 'Reforma SGSSS',
      tipo: 'PDF',
      descarga: '/downloads/material-complemetario/ley1438de2011.pdf',
    },
    {
      texto:
        'Sistema Obligatorio de Garantía de Calidad de la Atención de Salud.',
      tipo: 'PDF',
      descarga: '/downloads/material-complemetario/DECRETO 1011 DE 2006.pdf',
    },
    {
      texto:
        'Prestadores de servicios de salud y de habilitación de los servicios de salud – REPS - ',
      tipo: 'PDF',
      descarga:
        '/downloads/material-complemetario/Resolución No. 3100 de 2019.pdf',
    },
    {
      texto: 'Sistema General Seguridad Social Salud',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=obE8FsL3Tvg',
    },
    {
      texto: 'ADRES',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Uxu6MU3Xu8k&t=43s',
    },
    {
      texto: 'Generalidades de la Política de Seguridad del Paciente',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bvJBtSPwcpU',
    },
    {
      texto: 'ADRES | Recursos que se convierten en salud',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CgAmHIC5QbM',
    },
    {
      texto: '¿Qué es la Base de Datos Única de Afiliados - BDUA?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Eh3Vss5ifPk',
    },
    {
      texto: 'Dimensiones del Plan Decenal de Salud Pública 2012 - 2021',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MMVi6Rdf7vI',
    },
    {
      texto: 'Sistemas de Información en Salud',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TVzcTxyp7ms',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Diseñadora Instruccional – Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Emilia Sarmiento Mora',
        cargo: 'Experta Temática',
        centro: 'Centro de Servicios de Salud Regional Antioquia',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Antonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez	',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
