<template>
  <div id="container">
    <!-- 切り替えタブ -->
    <ul class="tab">
      <li
        class="tab__item"
        :class="{'tab__item--active': tab === 1 }"
        @click="tab = 1"
      >
        Login
      </li>
      <li
        class="tab__item"
        :class="{'tab__item--active': tab === 2 }"
        @click="tab = 2"
      >
        Register
      </li>
    </ul>
    <!-- ログイン -->
    <div
      v-show="tab === 1"
      class="panel"
    >
      <v-form
        ref="form"
        lazy-validation
        class="form"
        @submit.prevent="login"
      >
        <!-- ログインエラー時 -->
        <div
          v-if="loginErrors"
          class="errors"
        >
          <ul v-if="loginErrors.email">
            <li
              v-for="msg in loginErrors.email"
              :key="msg"
            >
              {{ msg }}
            </li>
          </ul>
          <ul v-if="loginErrors.password">
            <li
              v-for="msg in loginErrors.password"
              :key="msg"
            >
              {{ msg }}
            </li>
          </ul>
        </div>
        <!-- 入力フォーム -->
        <v-text-field
          v-model="loginForm.email"
          label="Email"
          :rules="[rules.required, rules.string, rules.max_20,]"
          :error="errors.email"
          :error-messages="messages.email"
          required
          @keydown="ErrorClear('email')"
        />

        <v-text-field
          v-model="loginForm.password"
          :type="'password'"
          label="Password"
          :rules="[rules.required, rules.string, rules.min_8,]"
          :error="errors.password"
          :error-messages="messages.password"
          required
          @keydown="ErrorClear('password')"
        />
        <v-row>
          <v-col
            md="2"
            offset-md="10"
          >
            <v-btn
              id="login_button"
              type="submit"
              class="button button--inverse"
              color="primary"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <!-- 登録 -->
    <div
      v-show="tab === 2"
      class="panel"
    >
      <v-form
        ref="form"
        lazy-validation
        class="form"
        @submit.prevent="register"
      >
        <!-- エラー時 -->
        <div
          v-if="registerErrors"
          class="errors"
        >
          <ul v-if="registerErrors.name">
            <li
              v-for="msg in registerErrors.name"
              :key="msg"
            >
              {{ msg }}
            </li>
          </ul>
          <ul v-if="registerErrors.email">
            <li
              v-for="msg in registerErrors.email"
              :key="msg"
            >
              {{ msg }}
            </li>
          </ul>
          <ul v-if="registerErrors.password">
            <li
              v-for="msg in registerErrors.password"
              :key="msg"
            >
              {{ msg }}
            </li>
          </ul>
        </div>
        <!-- 入力フォーム -->
        <v-text-field
          id="username"
          v-model="registerForm.name"
          label="Name"
          :rules="[rules.required, rules.max_20]"
          :error="errors.name"
          :error-message="messages.name"
          @keydown="clearError('name')"
        />

        <v-text-field
          id="email"
          v-model="registerForm.email"
          label="E-mail"
          :rules="[rules.required, rules.max_255]"
          :error="errors.email"
          :error-message="messages.email"
          @keydown="clearError('email')"
        />

        <v-text-field
          id="password"
          v-model="registerForm.password"
          :type="'password'"
          label="Passsword"
          :rules="[rules.required, rules.max_20]"
          :error="errors.password"
          :error-message="messages.password"
          @keydown="clearError('password')"
        />

        <v-text-field
          id="password-confirmation"
          v-model="registerForm.password_confirmation"
          :type="'password'"
          label="Password (confirm)"
          :rules="[rules.required, rules.max_20]"
          :error="errors.password"
          :error-message="messages.password"
          @keydown="clearError('password')"
        />

        <v-col
          md="2"
          offset-md="10"
        >
          <v-btn
            color="primary"
            type="submit"
            class="button button--inverse"
          >
            Register
          </v-btn>
        </v-col>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
      tab: 1,
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      // メッセージ
      messages: {
        name: null,
        email: null,
        password: null,
      },
      // エラー
      errors: {
        name: false,
        email: false,
        password: false,
      },
      // validation rule
      rules: {
        required: true,
        max_255: true,
        string: true,
        min_8: true,
      },
    };
  },
  computed: mapState({
    apiStatus: state => state.auth.apiStatus,
    loginErrors: state => state.auth.loginErrorMessages,
    registerErrors: state => state.auth.registerErrorMessages
  }),
  created () {
    this.clearError();
  },
  methods: {
    async login () {
      // 全てのエラーをリセット
      Object.keys(this.errors).forEach((key) => {
        this.errors[key] = false;
        this.messages[key] = null;
      });
      // 送信処理
      // authストアのloginアクションを呼び出す
      await this.$store.dispatch('auth/login', this.loginForm)
      .then((res) => {
          let response = res.data;
          if (response.status == 400) {
            // バリデーションエラー
            Object.keys(response.errors).forEach((key) => {
              this.errors[key] = true;
              this.messages[key] = response.errors[key];
            });
          } else {
            // 成功したらUserItemコンポーネントを表示
            this.$router.push('/user/item');
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
      if (this.apiStatus) {
        // トップページに移動する
        this.$router.push('/');
      } else {
        // alert ("ERROR!");
      }
    },
    // 登録処理
    async register () {
      // 全てのエラーをリセット
        Object.keys(this.errors).forEach((key) => {
          this.errors[key] = false;
          this.messages[key] = null;
        });
      // authストアのresigterアクションを呼び出す
      await this.$store.dispatch('auth/register', this.registerForm)
      .then((res) => {
          let response = res.data;
          if (response.status == 400) {
            // バリデーションエラー
            Object.keys(response.errors).forEach((key) => {
              this.errors[key] = true;
              this.messages[key] = response.errors[key];
            });
          } else {
            // 成功したらUserItemコンポーネントを表示
            this.$router.push('/user/item');
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
      if (this.apiStatus) {
        // トップページに移動する
        this.$router.push('/');
      } else {
        // alert ("ERROR!");
      }
    },
    clearError () {
      this.$store.commit('auth/setLoginErrorMessages', null);
      this.$store.commit('auth/setRegisterErrorMessages', null);
    },
    // 各エラーのリセット
    ErrorClear(item) {
      this.errors[item] = false;
      this.messages[item] = null;
    },
  }
};
</script>

<style>
 #container {
   padding-top: 100px;
   width: 70%;
   margin: 0 auto;
 }

</style>