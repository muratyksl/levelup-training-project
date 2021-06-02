<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Email Adresiniz">
      <a-input v-model:value="formState.email" />
    </a-form-item>
    <a-form-item label="Adınız">
      <a-input v-model:value="formState.firstName" />
    </a-form-item>
    <a-form-item label="Soyadınız">
      <a-input v-model:value="formState.lastName" />
    </a-form-item>
    <a-form-item label="Boyunuz">
      <a-input-number v-model:value="formState.height" />
    </a-form-item>
    <a-form-item label="Kilonuz">
      <a-input-number v-model:value="formState.weight" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Güncelle</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">İptal</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Form, Button, Input, InputNumber } from "ant-design-vue";
export default {
  name: "Profile",
  components: {
    aForm: Form,
    aFormItem: Form.Item,
    aInput: Input,
    aInputNumber: InputNumber,
    aButton: Button,
  },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState: {
        firstName: "",
        lastName: "",
        email: "",
        height: 0,
        weight: 0,
      },
    };
  },
  methods: {
    ...mapActions({
      updateCustomer: "updateCustomer",
    }),
    async onSubmit() {
      console.log("on submit ", { ...this.formState });
      await this.updateCustomer({
        id: this.authCustomer.id,
        payload: this.formState,
      });
      await this.resetFields();
      await this.$toast("Güncelleme başarılı 👍");
    },
    resetFields() {
      for (const key in this.authCustomer) {
        if (key in this.formState) {
          this.formState[key] = this.authCustomer[key];
        }
      }
      console.log("profile auth customer ", this.formState);
    },
  },
  computed: {
    ...mapState({
      authCustomer: "authCustomer",
    }),
  },
  created() {
    this.resetFields();
  },
};
</script>

<style scoped></style>
