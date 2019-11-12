<template>
  <div class="animated fadeInLeft myPage  ">
    <v-btn class="closeBtn" @click="closeMe">X</v-btn>
    <h1>Describe Your Property</h1>
             <v-textarea
            v-model="model"
            :auto-grow="autoGrow"
            :clearable="clearable"
            :counter="counter ? counter : false"
            :filled="filled"
            :flat="flat"
            :hint="hint"
            :label="label"
            :loading="loading"
            :no-resize="noResize"
            :outlined="outlined"
            :persistent-hint="persistentHint"
            :placeholder="placeholder"
            :rounded="rounded"
            :row-height="rowHeight"
            :rows="rows"
            :shaped="shaped"
            :single-line="singleLine"
            :solo="solo"
          ></v-textarea>

  </div>
</template>
<script>
export default {
  methods: {
    closeMe(){
      this.$router.push('/');
    }
  }
}//export
</script>
<style scoped>
.myPage {
  background: #ccc;
  padding: 0 0 0 0;
}

</style>
