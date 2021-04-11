<template>
  <main id="auth-page-main">
    <div class="admin-btn">
      <button><router-link to="/auth/admin" style="color: white; text-decoration: none;">Eğitmen Girişi</router-link></button>
    </div>
    <div class="section">
      <div class="section-logo">
        <div class="logo">
          <img src="../../assets/img/unnamed.png" alt="">
        </div>
      </div>
      <div class="section-inputs">
        <div class="secenekler">
          <h3 class="login"><router-link to="/auth/login" style="color: white; text-decoration: none;">Login</router-link></h3>
          <h3 class="register"><router-link style="color: white; text-decoration: none;" to="/auth/register">Register</router-link></h3>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
name: "AuthPage"
}
</script>

<style scoped>
#auth-page-main{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-image: url("../../assets/img/1244788.jpeg");
  background-position: center;
  background-size: cover;
}
.admin-btn{
  position:absolute;
  top: 15px;
  left: 10px;

}
.admin-btn>button{
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: green;
  color: white;
  font-size: 1.3rem;
  border-radius: 14px;
  cursor: pointer;
}
.section{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
}
.logo>img{
  width: 150px;
  height: 130px;
  border-radius: 100%;
}
.secenekler{
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.7rem;
  font-weight: bolder;
  margin-top: 70px;
}
.secenekler>h3{
  cursor: pointer;
}
.register{
  background-color: rgba(39, 39, 146, 0.5);
  border:2px solid #272792;
  padding: 10px 10px;
  border-radius: 10px;
}
.login{
  background-color: rgba(0, 128, 0, 0.5);
  padding: 10px 10px;
  border-radius: 10px;
  border: 2px solid green;
}
.login:hover{
  background-color: rgb(0, 94, 0);
}
.register:hover{
  background-color: rgb(26, 26, 117);
}
</style>