# .vuepress\login\Login.vue

<template>
  <div class="login-form">
    <div class="form-header">账号</div>
    <div>
      <input type="text" class="form-control" v-model="username">
    </div>
    <div class="form-header">密码</div>
    <div>
      <input type="password" class="form-control" v-model="password">
    </div>

    <div class="btn-row">
      <button class="btn" @click="login">
        登录
      </button>
    </div>
  </div>
</template>

<script>

import { STORAGE_KEY } from './helper'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () 
    {
      if (this.username && this.password) 
      {
        var userAndWords = { 'user1': 'password1', 'user2' : 'password2'}
        var isMatchUser = false
        for(var key in userAndWords)
        {
           var tempUser = key;
           var tempPassword = userAndWords[key]
           if(this.username === tempUser && this.password === tempPassword)
           {
              isMatchUser = true
              break;
           }
        }

        if(isMatchUser)
        {
            const data = JSON.stringify({
              name: this.username,
              time: new Date().getTime()
            })
            window.localStorage.setItem(STORAGE_KEY, data)
            this.$emit('close', true)
        }
        else{
          this.$dlg.alert('抱歉，账号密码不对', {
          messageType: 'warning'
        })
        }
      } 
      else {
        this.$dlg.alert('请输入账号密码', {
          messageType: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.login-form
  padding: 1rem
  display flex
  flex-direction column
  box-sizing border-box
  .btn-row
    margin-top 1rem
  .btn
    padding 0.6rem 2rem
    outline none
    background-color #60C084
    color white
    border 0
  .form-header
    color #666
    margin-bottom 0.5rem
  .form-control
    padding 0.6rem
    border 2px solid #ddd
    width 100%
    margin-bottom 0.5rem
    box-sizing border-box
    outline none
    transition border 0.2s ease
    &:focus
      border 2px solid #aaa
</style>
