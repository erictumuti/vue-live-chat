<template>
  <form @submit.prevent="handleSubmit">
	  <input type="email" required placeholder="your email" v-model="email">
	  <input type="password" required placeholder="password" v-model="password">
	  <button>Sign in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
setup() {
	// refs
	const email = ref('')
	const password = ref('')

	const handleSubmit = () => {
		console.log( email.value, password.value )
	}

	return { email, password, handleSubmit }
}
}
</script>

<style>
/* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
</style>