<template>
  <form>

    <div class="inputlar">
      <div class="uyelik">
        <label class="lbl-user" for="userName"><i class="fas fa-user-circle"></i></label>
        <input class="inputs" type="text" name="userName" id="userName" placeholder="Admin Kullanıcı Adınızı Giriniz">
      </div>

      <div class="pass">
        <label class="lbl-password" for="password"><i class="fas fa-lock"></i></label>
        <input id="password" class="inputs" type="password" name="password" placeholder="Admin Şifrenizi Giriniz">
      </div>
    </div>
    <div class="btns">
      <button class="giris-btn">Giriş Yap</button>
    </div>
  </form>
  <br><br><br>
  <p>Do you forgot your password? <b><a style="color:white" href="">Click Here</a></b></p>
</template>

<script>
export default {
  name: "AdminLogin"
}
</script>

<style scoped>
.inputs{
  outline: none;
  border: 2px solid white;
  padding: 15px 20px 15px 60px;
  border-radius: 15px;
  margin: 10px 0;
  font-size: 1.4rem;
  font-weight: bold;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.15);
  color: darkred;
  position: relative;

}
.inputs:hover{
  background-color: rgba(255, 255, 255, 0.25);
}

.lbl-user,.lbl-password,.lbl-kod{
  color: white;
  font-size: 1.5rem;
  position: absolute;
  margin-top: 25px;
  margin-left: 25px;
}

.giris-btn{
  width: 400px;
  padding: 20px 20px;
  border-radius: 10px;
  border: 2px solid white;
  outline: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
}
.giris-btn:active{
  background-color: rgba(255, 255, 255, 0.7);
  color: darkred;
}
input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: rgba(255, 255, 255, 0.747);
}
</style>