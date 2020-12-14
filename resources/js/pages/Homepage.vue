<template>
  <v-container>
    <div class="work">
      <v-row>
        <v-col cols="7">
          <v-textarea
            outlined
            class="textarea"
            name="input-7-4"
            rows="20"
            label="Outlined textarea"
            value="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus "
          />
        </v-col>
        <v-col cols="2">
          <div id="App">
            <p>選択中の文字:<span>{{ selectedText }}</span></p>
            <textarea 
              @select="selected"
              @blur="selected"
              @keyup="selected"
              @click="selected"
            />
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- <List /> -->
  </v-container>
</template>

<script type="text/javascript">

export default {
  name: 'App',
  data() {
    return {
      selectedText:""
    };
  },
  methods: {
    selected: function() {
      this.selectedText = window,getSelection().toString();
    }
  }
};
</script>

<style>
.work {
  padding-top: 100px;
}
.v-textarea textarea {
  line-height: 70px !important;
}
</style>