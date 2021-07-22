<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Sistema General de Seguridad Social en Salud - SGSSS
    
    separador
    #t_1_1.titulo-segundo
      .h2 1.1  Principios del Sistema General de Seguridad Social en Salud
    
    
    separador
    #t_1_2.titulo-segundo
      .h2 1.2 Normativa del SGSSS  

    
    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Actores del SGSSS

    
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
