<template>
  <div class="table-responsive">
    <table class="table table-hover table-custom spacing5">
      <thead>
        <tr>
          <th>#</th>
          <template v-for="(item, index) in fields">
            <th>{{ item.fieldPlaceHolder }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-1</td>
          <template v-for="(item, index) in fields">
            <td v-if="index === 0">
              <div class="d-flex align-items-center">
                <div class="ml-3">
                  <input :type="item.fieldType" class="form-control" :placeholder="item.fieldPlaceHolder">
                </div>
              </div>
            </td>
            <td v-else>
              <input :type="item.fieldType" :disabled="item.fieldAttribute" class="form-control" :placeholder="item.fieldPlaceHolder">
            </td>
          </template>
        </tr>
      </tbody>
    </table>
    <div style="display: flex; justify-content: flex-end;">
      <button type="button" class="btn btn-lg btn btn-warning" title="Malzemeyi Kaydet" data-toggle="tooltip" data-placement="top">{{buttonName}}</button>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'NewEntry',
  props: ["headers", "fields","buttonName"],
  methods: {
    onClick() {
      this.$emit('buttonAction');
    },
  },
};
</script>

<style scoped>
.form-control:disabled {
  background-color: rgb(0, 0, 0);
}

.form-control:read-only {
  background-color: rgb(0, 0, 0);
}
</style>