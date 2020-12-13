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
      </v-row>
    </div>
    <!-- <List /> -->
  </v-container>
</template>

<script>
import List from '../pages/List.vue';

export default {
  components: {
    List
  }
//   created: {
//     vm = this
//     document.onselectionchange = function() {
//       var value = getSelection() ;
//       console.log( value ) ;
//       document.getElementById( "result" ).textContent = value ;
//     }
//   },
//   data: function() {
//     return {
//       selectedText: ""
//     };
//   },
//   methods: {
//     selected: function() {
//       this.selectedText = window.getSelection().toString();
//     }
//   }
// }
};
</script>

<style>
  .work {
    padding-top: 100px;
  }
  ::deep/ .v-textarea textarea {
line-height: 40px;
}
</style>