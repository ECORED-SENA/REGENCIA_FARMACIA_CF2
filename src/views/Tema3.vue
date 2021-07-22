<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Sistema Obligatorio de Garantía de Calidad de Atención en Salud del Sistema General de Seguridad Social en Salud -SOGCS-


    separador
    #t_3_1.titulo-segundo
      .h2 3.1 Componentes del SOGCS
    


    separador
    #t_3_2.titulo-segundo
      .h2 3.2 Calidad de datos 


    separador
    #t_3_3.titulo-segundo
      .h2 3.3 Sistemas de información en salud





</template>

<script>
export default {
  name: 'Tema3',
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
