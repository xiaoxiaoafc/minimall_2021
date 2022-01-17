<template>
  <div>
    fdsafadsfadsfdsf
  </div>
</template>

<script>
export default {
  props : {
    iid : {
      type : String,
      default : ""
    },

  },
  created : function () {
    console.log(this.iid);
  },
  name: "Detail"
}
</script>

<style scoped>

</style>