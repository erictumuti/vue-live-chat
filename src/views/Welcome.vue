<template>
  <div class="welcome container">
	  <div v-if="showLogin">
       <LoginForm />
	   <p>Dont have an account? <span @click="showLogin = false">Signup</span> Here</p>
	  </div>
	  <div v-else>
       <SignupForm />
	   <p>Already have an account? <span @click="showLogin = true">Login</span> Here</p>

	  </div>

  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import { ref } from 'vue'
export default{
	components: { SignupForm, LoginForm },

	setup() {
		const showLogin = ref(true)

		return { showLogin }
	}
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
  }
  span {
	  font-weight: bold;
	  color: rgb(34, 212, 212);
	  cursor: pointer;
  }
  .welcome button {
   margin: 10px 10px;
  }
</style>