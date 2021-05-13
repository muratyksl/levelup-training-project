<template>
  <form>
    <div class="inputlar">
      <div class="uyelik">
        <label class="lbl-user" for="isim"><i class="fas fa-user-circle"></i></label>
        <input class="inputs" id="isim" type="text" name="isim" placeholder="İsminizi Giriniz" v-model="firstName">
        <label class="lbl-user" for="soyisim"><i class="fas fa-user-circle"></i></label>
        <input class="inputs" id="soyisim" type="text" name="soyisim" placeholder="Soyisminizi Giriniz"
               v-model="lastName">
      </div>

      <div class="uyelik">
        <label class="lbl-user" for="userEmail"><i class="fas fa-envelope"></i></label>
        <input class="inputs" id="userEmail" type="email" name="userEmail" placeholder="E-Mail Giriniz" v-model="email">
        <label class="lbl-password" for="password"><i class="fas fa-lock"></i></label>
        <input class="inputs" id="password" type="password" name="password" placeholder="Şifrenizi Giriniz"
               v-model="password">
      </div>
    </div>
    <div class="btns">
      <button class="giris-btn" @click.prevent="register()">Kayıt Ol</button>
    </div>
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  },
  methods: {
    ...mapActions({
      registerCustomer: 'registerCustomer'
    }),
    register(){
      const payload= {
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password
      }
      this.registerCustomer(payload).catch(err=>{
        console.error("Error message ",{error:err})
      })
    }
  }
}
</script>

<style scoped>
.inputs {
  outline: none;
  border: 2px solid white;
  padding: 15px 20px 15px 60px;
  border-radius: 15px;
  margin: 10px 6px;
  font-size: 1.4rem;
  font-weight: bold;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.15);
  color: darkred;
  position: relative;

}

.inputs:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.lbl-user, .lbl-password {
  color: white;
  font-size: 1.5rem;
  position: absolute;
  margin-top: 25px;
  margin-left: 25px;
}

.giris-btn {
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

.giris-btn:active {
  background-color: rgba(255, 255, 255, 0.7);
  color: darkred;
}

input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: rgba(255, 255, 255, 0.747);
}

.uyelik {
  margin-right: 6px;
}
</style>