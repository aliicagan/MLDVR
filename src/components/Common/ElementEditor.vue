<template>
  <div class="table-responsive">
    <table class="table table-hover table-custom spacing5">
      <thead>
        <tr>
          <th>#</th>
          <template v-for="item in fields">
            <th>{{ item.header }}</th>
          </template>
          <th>İşlem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-1</td>
          <template v-for="item in fields">
            <td>
              <input v-model="formData[item.fieldName]" required :type="item.fieldType" :disabled="item.fieldAttribute" class="form-control" :placeholder="item.fieldPlaceHolder">
            </td>
          </template>
          <td>
            <button type="button" class="btn btn-sm btn btn-primary" title="Send Invoice" data-toggle="tooltip" data-placement="top" @click="handleSubmit">Güncelle</button>
            |
            <button type="button" class="btn btn-sm btn btn-secondary" title="Send Invoice" data-toggle="tooltip" data-placement="top" @click="handleCancel">İptal</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    fields: {
        type: Array,
    },
    formData: {
      type: Object,
      required: true,
    },
    editElement: {
      type: Function,
      required: true,
    },
    disableEdit: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleCancel (){
      this.disableEdit();
    },
    handleSubmit() {
      const json = {
      };
      for (const field of this.fields) {
        var value = document.querySelector(`input[placeholder="${field.fieldPlaceHolder}"]`).value;
        if (field.fieldType === "checkbox"){
          const checkbox = document.querySelector(`input[placeholder="${field.fieldPlaceHolder}"]`);
          value = checkbox.checked;

        }

            json[field.fieldName] = value;
          
      }
      this.editElement(json, this.formData.id);
    }
  }

}
</script>

<style scoped>
.form-control:disabled {
  background-color: rgb(0, 0, 0);
}

.form-control:read-only {
  background-color: rgb(0, 0, 0);
}
</style>
