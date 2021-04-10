<template>
  <v-main>
    <div id="alert">
      <v-alert
        text
        prominent
        type="error"
        icon="mdi-cloud-alert"
      >
        Page Not Found
      </v-alert>
    </div>
  </v-main>
</template>

<style>
#alert {
    text-align: center;
    justify-content: center;
    width: 70%;
    margin: 30px auto
}
</style>