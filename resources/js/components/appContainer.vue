<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
        <v-list-dence>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-contact-mail</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Contact</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="logout">
                <v-list-item-action>
                    <v-icon>mdi-power</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Log out</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-dence>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    props: {
        source: String,
    },
    data: () => ({ 
        drawer: null 
    }),
    methods: {
        logout() {
            axios.post('logout')
            .then( resorce => {
                window.location.href = "login"
            })
        }
    }
  }
</script>