<template>
  <v-list>
    <v-toolbar>
      <template #extension>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab>
            Beginners
          </v-tab>
          <v-tab>
            Intermediate
          </v-tab>
          <v-tab>
            Advanced
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card
          class="mx-auto"
          max-width="90%"
          height="30vh"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                Headline 5
              </v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              <youtube
                ref="youtube"
                width="30%"
                :video-id="videoId"
                @playing="playingVideo()"
              />
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        テスト２
      </v-tab-item>
      <v-tab-item>
        テスト３
      </v-tab-item>
    </v-tabs-items>
  </v-list>
</template>

<script>
import Vue from 'vue';
import VueYoutube from 'vue-youtube';
Vue.use(VueYoutube);

  export default {
    data () {
      return {
        tabs: null,
        videoId: 'mL2_zXCgbXI',
      };
    },
  };
</script>