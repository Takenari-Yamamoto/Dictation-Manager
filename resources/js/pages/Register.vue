<template>
  <div class="container">
    <div class="card">
      <div class="cardheader">
        Register
      </div>
      <div class="card-body">
        <div>
          <form @submit.prevent="onSubmit">
            <div class="from-group">
              <label>Name</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Name..."
              >
            </div>
            <div class="from-group">
              <label>Username</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Username..."
              >
            </div>
            <div class="from-group">
              <label>Password</label>
              <input
                v-model="password"
                type="text"
                class="form-control"
                placeholder="Password..."
              >
            </div>
            <div class="from-group">
              <label>Password Again</label>
              <input
                v-model="passwordAgain"
                type="text"
                class="form-control"
                placeholder="Password Again..."
              >
            </div>
            <button class="btn btn-sucess">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

// <script>
// export default {
//     name: 'register',
//     props: ['app'],
//     data() {
//         return {
//             name: '',
//             username: '',
//             password: '',
//             passwordAgain: '',
//             errors: []
//         };
//     },
//     methods: {
//         onSubmit()
//         {
//             this.errors = [],

//             if (!this.name)
//             {
//                 this.errors.push('Name is required.');
//             }
//             if (!this.username)
//             {
//                 this.errors.push('Username is required.');
//             }
//         }
//     }
// };
// </script>