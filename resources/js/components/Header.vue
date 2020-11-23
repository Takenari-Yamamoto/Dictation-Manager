<template>
  <v-app>
    <v-app-bar
      color="primary"
      app
      dark
    >
      <v-toolbar-title>Dictation Manager</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text>
          <router-link to="/HomePage" class="white">
            Home
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/mypage" class="white">
            My Page
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/bulleten_board" class="white">
            Bulletin Borad
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/list" class="white">
            List
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/support" class="white">
            Support
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/logout" class="white">
            Logout
          </router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-app>
</template>

