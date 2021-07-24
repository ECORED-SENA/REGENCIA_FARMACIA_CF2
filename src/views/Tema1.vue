<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.mb-0
      .titulo-principal__numero
        span 1
      h1 Sistema General de Seguridad Social en Salud - SGSSS

    .row.mb-5.justify-content-center.fondo-esquina.pt-5
      .col-lg-11
        .tarjeta.color-secundario.p-4.p-md-5.mb-5(
          style='background: linear-gradient(0deg, #e3f0f7, #ebe6fb)'
        )
          .row.justify-content-around.align-items-center
            .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
              img.mx-auto(
                src='@/assets/curso/tema1/img1.svg',
                alt='Sistema de Salud Colombiano',
                style='width: 296'
              )
            .col-md.col-lg-6
              .titulo-segundo.mb-4
                h3 Sistema de Salud Colombiano
              p.mb-4 La siguiente infografía presenta cómo era el sistema de salud antes de la Ley 100 de 1993, y cómo llegó a constituirse en un modelo para contribuir y apoyar la gestión, brindando protección a toda la población.
              a.boton.color-acento-botones(
                :href='obtenerLink("/downloads/prueba.pdf")',
                target='_blank',
                type='application/pdf'
              )
                span(style='color: #12263f') Descargar
                i.fas.fa-file-download(style='color: #12263f')

    p.mb-5 Tenga en cuenta, aplicar el principio de solidaridad con los aportes estatales para subsidiar los servicios de las poblaciones más vulnerables, reorganizar los prestadores de servicios de salud para integrar un sistema de salud único, con la participación del sector privado en la prestación de servicios de salud, permite generar una sana competencia para mejorar la visión del individuo y de su entorno. Es primordial la práctica de prevención de enfermedades y mejorar el cuidado personal. La Declaración de Alma-Ata, la atención primaria en salud, fue destacada como una acción urgente por parte de todos los gobiernos y de todos los profesionales de la salud, para proteger y promover la salud en todo el mundo.

    p.mb-4 Solo hasta 1993, con la Ley 100, se concibió la Seguridad Social Integral como:

    .row.justify-content-center.mb-5
      .col-lg-9
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            span.mb-0(style='font-size: 24px; font-weight: bold') El conjunto de instituciones, normas y procedimientos, de que disponen la persona y la comunidad, para gozar de una calidad de vida, mediante el cumplimiento progresivo de los planes y programas que el Estado y la sociedad desarrollen para proporcionar la cobertura integral de las contingencias, especialmente las que menoscaban la salud y la capacidad económica de los habitantes del territorio nacional, con el fin de lograr el bienestar individual y la integración de la comunidad
            i.fas.fa-quote-right
      .col-lg-3.align-self-center.p-0
        figure
          img(
            src='@/assets/curso/tema1/img2.png',
            alt='imagen de ambiente',
            style='width: 274px'
          )

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 El sistema general de seguridad social, en el sector salud, como reza en el Título 2 de la Ley No. 100 de 1993, ha evolucionado desde sus inicios, hasta la actualidad, de acuerdo con su desarrollo y su necesidad de aseguramiento.

    .row.justify-content-center(style='margin-bottom: 65px')
      .col-lg-11
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/img3.svg',
            alt='¿Quiénes forman parte del Sistema General de Seguridad Social en Salud?'
          )

    .row.justify-content-center.centro-fondo
      .col-lg-11
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.m-auto(src='@/assets/curso/tema1/img4.png', style='width: 270px')
          .col-lg-8
            .row.px-4.mb-4
              .col-12.p-4.custom-card
                p.mb-0 El objetivo del Sistema General de Seguridad Social en Salud, es el de regular los servicios asistenciales, públicos y privados, del sector salud y facilitar el acceso a todos los residentes de Colombia.
              img.custom-img(
                src='@/assets/curso/tema1/img5.png',
                alt='Minsalud'
              )
            .cajon.color-secundario.p-4.mb-5
              p.mb-0 Con base en lo anterior, el SGSSS se compromete a garantizar servicios mejores, completos y equitativos a través del modelo de prestación de servicios de salud pública. Esto permite que el Estado, las instituciones y la sociedad, cooperen en el marco de la estrategia de atención primaria de salud.
      .col-lg-12.ps-5.pe-4
        separador
        #t_1_1.titulo-segundo
          .h2 1.1 Principios del Sistema General de Seguridad Social en Salud

        p.mb-4 Los principios son los cimientos que sostienen el sistema, sin los cuales perdería identidad y razón de ser y, por lo tanto, se consideran la base de la Seguridad Social en Salud. Los tres primeros principios apalancan el Sistema General de Seguridad Social Integral y con la modificación del artículo 153 de la Ley 100 de 1993, se adicionan los otros tres. Estos principios son:

    TabsC.color-secundario.mb-5
      .py-3.py-md-5(titulo='Universalidad')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Universalidad
            p Se refiere a la garantía de la protección para todas las personas, sin ninguna discriminación, en todas las etapas de su vida.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img1.jpg',
                alt='Universalidad',
                style='width: 487'
              )

      .py-3.py-md-5(titulo='Solidaridad')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Solidaridad
            p Se basa en la práctica de la mutua ayuda entre las personas, las generaciones, los sectores económicos, las regiones y las comunidades, bajo el principio del #[strong más fuerte hacia el más débil.]

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img2.jpg',
                alt='Solidaridad'
              )

      .py-3.py-md-5(titulo='Eficiencia')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Eficiencia
            p Se enfoca en la mejor utilización social y económica de los recursos administrativos, técnicos y financieros, disponibles para que los beneficios a que da derecho la seguridad social sean prestados de forma #[strong adecuada, oportuna y suficiente.]

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img3.jpg',
                alt='Eficiencia'
              )

      .py-3.py-md-5(titulo='Integralidad')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Integralidad
            p #[strong Se apoya en la cobertura de todas las contingencias que afectan la salud,] la capacidad económica y, en general, las condiciones de vida de toda la población. Para este efecto, cada quien contribuirá según su capacidad y recibirá lo necesario para atender sus contingencias, amparadas por la Ley 100 de 1993.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img4.jpg',
                alt='Integralidad'
              )

      .py-3.py-md-5(titulo='Unidad')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Unidad
            p Se centra en la articulación de políticas, instituciones, regímenes, procedimientos y prestaciones, para alcanzar los objetivos de la seguridad social.

          .col-md-5
            figure
              img.mx-auto(src='@/assets/curso/tema1/tema1-1/img5.jpg', alt='Unidad')

      .py-3.py-md-5(titulo='Participación')
        .row(style='justify-content: center')
          .col-md-6.mb-4.mb-md-0.align-self-center
            h2 Participación
            p Se colabora sobre la intervención de la #[strong comunidad] a través de los beneficiarios de la seguridad social, en la organización, control, gestión y fiscalización de las instituciones y del sistema en su conjunto.

          .col-md-5
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img6.jpg',
                alt='Participación'
              )

    p.mb-5 El SGSSS adiciona nuevos principios que, a su vez, se aplican como reglas, para su óptimo desarrollo; estos principios adicionales son:

    .row.mb-5(style='justify-content: space-between')
      .col-lg-4
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/tema1-1/img7.png',
            alt='imagen ambiental',
            style='width: 500px'
          )
      .col-lg-7
        LineaTiempoD.color-secundario
          p.text-medium(numero='1', titulo='Equidad ') Servicios de salud, con una calidad igual para todos los colombianos.

          p.text-medium(numero='2', titulo='Obligatoriedad') Afiliación al S.G.S.S.S. obligatoria para todos los colombianos.

          p.text-medium(numero='3', titulo='Protección integral') Atención en salud integral: educación, información, prevención de la enfermedad, diagnóstico precoz, tratamiento oportuno, rehabilitación, en cantidad, oportunidad, calidad y eficiencia.

          p.text-medium(numero='4', titulo='Libre escogencia') Participación de diferentes entidades que ofrezcan la administración y la prestación de servicios de salud, de tal manera que cada uno de los colombianos puedan seleccionar según la oferta y de acuerdo con sus preferencias.

          p.text-medium(numero='5', titulo='Autonomía de instituciones') Instituciones prestadoras de salud y Empresas Sociales del Estado, con autonomía jurídica.

          p.text-medium(numero='6', titulo='Descentralización administrativa') A través de los entes territoriales de salud: secretarías departamentales y municipales.

          p.text-medium(numero='7', titulo='Participación social') Participación de los usuarios en la organización y control: veedurías, asociaciones y comités de participación ciudadana.

          p.text-medium(numero='8', titulo='Concertación') A través de los Consejos Nacionales de Seguridad Social en Salud.

          p.text-medium(numero='9', titulo='Calidad') Atención en salud, oportuna, personalizada, humanizada, integral y continua.

    separador
    #t_1_2.titulo-segundo
      .h2 1.2 Normativa del SGSSS

    .row.justify-content-center.centro-fondo
      .col-lg-12.ps-5.pe-5
        p.mb-4 La normativa que fortalece y apalanca el S.G.S.S.S, se basa en leyes, decretos y resoluciones que durante 28 años han sido parte de la transformación y desarrollo del sistema, siempre enfocándose en la búsqueda de una mayor cobertura y mejor oportunidad de atención de las necesidades de salud que tenemos todos los colombianos; a continuación, se revisará la línea de tiempo con una parte significativa de la normativa que ha generado un cambio en la historia de todo el sistema de salud.
        p.mb-4 Estas normas son las siguientes:
        .row.justify-content-center.mb-5
          .col-lg-10
            p.mb-4 #[strong Leyes]
          .col-lg-6
            LineaTiempoD.color-secundario
              p.text-medium(numero='1', titulo='Ley 100 - 1993') Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones.

              p.text-medium(numero='2', titulo='Ley 1122 – 2007') Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones.

              p.text-medium(numero='3', titulo='Ley 1438 - 2011') Por medio de la cual se reforma el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones.

              p.text-medium(numero='4', titulo='Ley 1751 - 2015') Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.

              p.text-medium(numero='5', titulo='Decreto 1283 - 1996') Por el cual se reglamenta el funcionamiento del Fondo de Solidaridad y Garantía del Sistema General de Seguridad Social en Salud.
          .col-lg-4
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-1/img8.svg',
                alt='imagen ambiental',
                style='width: 356px'
              )

    .row.mb-5(style='justify-content: space-around')
      .col-lg-4
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/tema1-1/img9.svg',
            alt='imagen ambiental',
            style='width: 350px'
          )
      
      .col-lg-6
        p.mb-4 #[strong Leyes]
        LineaTiempoD.color-secundario
          p.text-medium(numero='6', titulo='Decreto 1013 DE 1998') Por el cual se reglamenta el funcionamiento de la subcuenta de compensación del Fondo de Solidaridad y Garantía, Fosyga, y se deroga parcialmente el Decreto 1283 de 1996.

          p.text-medium(numero='7', titulo='Decreto 1011 – 2006') Por el cual se establece el Sistema Obligatorio de Garantía de Calidad de la Atención de Salud del Sistema General de Seguridad Social en Salud.

          p.text-medium(numero='8', titulo='Decreto 780 - 2016') Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.

          p.text-medium(numero='9', titulo='Decreto 064 - 2020') Por la cual se modifican los artículos 2.1.3.11, 2.1.3.13, 2.1.5.1, 2.1.7.7, 2.1.7.8 y 2.1.3.17 y se adicionan los artículos 2.1.5.4 y 2.1.5.5 del Decreto 780 de 2016, en relación con los afiliados al régimen subsidiado, la afiliación de oficio y se dictan otras disposiciones.

          p.text-medium(numero='10', titulo='Resolución 3374 - 2000') Por la cual se reglamentan los datos básicos que deben reportar los prestadores de servicios de salud y las entidades administradoras de planes de beneficios sobre los servicios de salud prestados.
          
          p.text-medium(numero='11', titulo='Resolución 1448 – 2006') Por la cual se definen las Condiciones de Habilitación para las instituciones que prestan servicios de salud bajo la modalidad de Telemedicina.

          p.text-medium(numero='12', titulo='Resolución 4505 – 2012') Establece el reporte relacionado con el registro de actividades de Protección Específica, Detección Temprana y la aplicación de Guías de Atención Integral para las enfermedades de interés en salud pública, de obligatorio cumplimiento, las cuales estarán integradas al Sistema Integral de Información de la Protección Social (SISPRO)

          


    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-4 #[strong Resoluciones]
      .col-lg-7
        LineaTiempoD.color-secundario
          p.text-medium(numero='13', titulo='Resolución 429 – 2016') Por medio de la cual se adopta la Política de Atención Integral en Salud.
          p.text-medium(numero='14', titulo='Resolución 4622 – 2016') Por la cual se establece el reporte de los datos de afiliación al Sistema General de Seguridad Social en Salud, a planes voluntarios, Regímenes Especial y de Excepción, y de las personas privadas de la libertad, bajo la custodia y vigilancia del INPEC.
          p.text-medium(numero='15', titulo='Resolución 1441 – 2016') Por la cual se establecen los estándares, criterios y procedimientos para la habilitación de las Redes Integrales de Prestadores de Servicios de Salud y se dictan otras disposiciones.
          p.text-medium(numero='16', titulo='Resolución 3202 - 2016') Por la cual se adopta el Manual Metodológico para la elaboración e implementación de las Rutas Integrales de Atención en Salud – RIAS, se adopta un grupo de Rutas Integrales de Atención en Salud, desarrolladas por el Ministerio de Salud y Protección Social dentro de la Política de Atención Integral en Salud – PAIS y se dictan otras disposiciones.
          p.text-medium(numero='17', titulo='Resolución 768 - 2018') Por la cual se adoptan las reglas y condiciones generales para la operación del Sistema de Afiliación Transaccional – SAT.
          p.text-medium(numero='18', titulo='Resolución 3100 – 2019') Por la cual se definen procedimientos y condiciones de inscripción de los prestadores de servicios de salud y de habilitación de los servicios de salud y se adopta el manual de inscripción de Prestadores y Habilitación de servicios de salud, Ministerio de Salud y Protección Social.
          p.text-medium(numero='19', titulo='Resolución 2626 - 2019') Por la cual se modifica la Política de Atención Integral en Salud – PAIS y se adopta el Modelo de Acción Integral Territorial – MAITE.
      .col-lg-4 
        figure
          img.mx-auto(
            src='@/assets/curso/tema1/tema1-1/img10.svg',
            alt='imagen ambiental',
                style='width: 346px'
          )


    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Actores del SGSSS


    .row.justify-content-center.centro-fondo
      .col-lg-11.ps-5.pe-5
        p.mb-4 Los actores que intervienen en el Sistema General de Seguridad Social en Salud, son: 
        .row.justify-content-center
          .col-lg-4
            figure
              img.mx-auto(
                src='@/assets/curso/tema1/tema1-3/img1.png',
                alt='imagen ambiental',
                    style='width: 335px'
              )
          .col-lg-7






    separador
    #t_1_4.titulo-segundo
      .h2 1.4 Aseguramiento

    separador
    #t_1_5.titulo-segundo
      .h2 1.5 Deberes y derechos en salud

    separador
    #t_1_6.titulo-segundo
      .h2 1.6 Afiliación al SGSSS

    separador
    #t_1_7.titulo-segundo
      .h2 1.7 Prestación del servicio y planes de beneficios

    .h3.mb-4 Redes integrales de prestadores de servicio de salud - RIPSS
    .h3.mb-4 Red de prestación de servicios
    .h3.mb-4 Plan de Beneficios en Salud

    separador
    #t_1_8.titulo-segundo
      .h2 1.8 Inspección, Vigilancia y Control - IVC

    separador
    #t_1_9.titulo-segundo
      .h2 1.9 Financiación del SGSSS
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass" scoped></style>
