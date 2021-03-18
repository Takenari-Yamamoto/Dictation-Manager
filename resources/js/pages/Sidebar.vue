<template>
  <v-list
    id="side_list"
    rounded
  >
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'My Page', icon: 'mdi-account' },
        { text: 'Create', icon: 'mdi-pencil' },
        { text: 'List', icon: 'mdi-book-open-variant', link: '/list'},
        { text: 'Support', icon: 'mdi-help-circle-outline', link: '/support' },
      ],
    }),
  };
</script>

<style >
#side_list {
    padding-right: 10px;
}
</style>