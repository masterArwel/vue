<template>
    <div class="container">
        <label>账号:</label>
        <input v-model="username" type="text">
        </br>
        <label>密码:</label>
        <input v-model="password" type="text">
        <button v-on:click="login_button">登录</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                username: null,
                password: null,
            }
        },
        methods: {
            login_button(){
                alert('登录成功');
            }
        }
    }
</script>
