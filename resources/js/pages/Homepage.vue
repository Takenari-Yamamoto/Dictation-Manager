<template>
  <v-container>
    <div
      class="work"
    >
      <v-row>
        <v-col cols="7">
          <div>
            <v-textarea
              outlined
              name="input-7-4"
              rows="20"
              label="Outlined textarea"
              value="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus "
              @click.selected.prevent="selected"
            />
          </div>
        </v-col>
        <v-col cols="1">
          <div>
            <pre id="selected">選択中の文字 : {{ selectedText }}</pre>
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
      this.selectedText = window.getSelection().toString();
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

#selected {
  font-size: 25px;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>