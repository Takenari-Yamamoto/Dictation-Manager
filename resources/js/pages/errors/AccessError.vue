<template>
  <v-main>
    <v-alert
      id="alert"
      text
      prominent
      type="error"
      icon="mdi-cloud-alert"
    >
      This action is unauthorized.
    </v-alert>
  </v-main>
</template>

<style>
#alert {
    text-align: center;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
}
</style>