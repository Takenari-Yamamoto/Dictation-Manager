<template>
  <div class="for_smartphone_modal">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>
      <v-card>
        <div
          class="upload_material"
        >
          <v-row>
            <!-- Youtube用 -->
            <v-col>
              <Video :dictation="dictation" />
            </v-col>
            <!-- MP3 -->
            <v-col>
              <MP3 />
            </v-col>
          </v-row>
        </div>

        <div 
          class="word_add"
        >
          <v-row>
            <!-- Youtube用 -->
            <v-col>
              <v-text-field
                v-model="selectedText"
                label="Selected Word"
                :rules="[rules.max_30]"
                :error="errors.word"
                :error-messages="messages.word" 
                counter="30"
                @keydown="clearError('word')"	
              />
            </v-col>
            <v-col>
              <v-btn
                color="success"
                @click="addToList();"
              >
                Add to List
              </v-btn>
              <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
                class="text-center"
              >
                {{ text }}

                <template #action="{ attrs }">
                  <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>