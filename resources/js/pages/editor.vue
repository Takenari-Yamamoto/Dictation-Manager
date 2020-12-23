<template>
    

<div
            class="editor"
            @click.selected.prevent="selected"
          >
            <quill-editor
              ref="quillEditor"
              v-model="content"
              options="editorOption"
            />
          </div>
          <v-btn
            class="ma-2"
            :loading="loading2"
            :disabled="loading2"
            color="success"
            @click="loader = 'loading2'"
          >
            Save
            <template #loader>
              <span>Loading...</span>
            </template>
          </v-btn>

          </template>