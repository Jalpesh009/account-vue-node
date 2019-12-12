<template>
  <div class="account-pages mb-5">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="text-center mt-4 mb-4">
                  <span class=""><img src="assets/images/logo-dark.png" alt="CallAnswering logo" height="66"></span>
                </div>
                  <div class="card">
                      <div class="card-body p-4">
                          <div class="text-center mb-4">
                              <h4 class="text-uppercase mt-0">Log in</h4>
                          </div>
                          <form>
                              <div class="form-group mb-3">
                                  <input id="emailaddress" v-model="email" class="form-control" type="email" required="" placeholder="Enter your email">
                              </div>
                              <div class="form-group mb-3">
                                  <input id="password" v-model="password" class="form-control" type="password" required="" placeholder="Enter your password">
                              </div>
                              <div class="form-group mb-3">
                                  <div class="custom-control custom-checkbox">
                                      <input id="checkbox-signin" type="checkbox" class="custom-control-input" checked>
                                      <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                  </div>
                              </div>
                              <div class="form-group mb-0 text-center">
                                  <button class="btn btn-primary btn-block" type="button" @click="login"> Log In </button>
                              </div>
                          </form>
                      </div> <!-- end card-body -->
                  </div>
                  <!-- end card -->

                  <div class="row mt-3">
                      <div class="col-12 text-center">
                          <p> <a href="recoverpw.html" class="text-muted ml-1"><i class="fa fa-lock mr-1"/>Forgot your password?</a></p>
                          <p class="text-muted">Don't have an account?<a href="#" class="text-dark ml-1" @click.prevent="handleSignup($event)"><b>Sign up</b></a></p>
                      </div> <!-- end col -->
                  </div>
                  <!-- end row -->

              </div> <!-- end col -->
          </div>
          <!-- end row -->
      </div>
      <!-- end container -->
  </div>
  <!-- end page -->
</template>

<script>
export default {
    data: () => ({
        password: '',
        email: '',
        errorMsg: ''
    }),
    methods: {
        login () {
            const {
                email,
                password
            } = this
            let that = this
            this.$store.dispatch('auth/login', { email, password })
                   .then(() => {
                     that.$router.push('/dashboard')
                   })
                   .catch(err => console.log(err))
        },
        handleSignup (event) {
          this.$router.push('/signup')
        }
    }
}
</script>
