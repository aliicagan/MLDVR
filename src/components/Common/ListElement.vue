<template>
    <div class="row clearfix">
        <div class="col-lg-12 col-md-12">
            <div class="table-responsive">
                <table class="table table-hover table-custom spacing5">
                    <thead>
                        <tr> 
                            <th>#</th>
                            <template v-for="(item, index) in headers">
                                <th>{{ item }}</th>
                            </template>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span>01</span>
                            </td>
                            <template v-for="(value, key, index) in data">
                            <td v-if="index === 0">
                                <div class="d-flex align-items-center">
                                    <div class="avtar-pic w35 bg-red" data-toggle="tooltip" data-placement="top" title="Avatar Name"><span>SS</span></div>
                                    <div class="ml-3">
                                        <p class="mb-0"> {{ value }}</p>
                                    </div>
                                </div>
                            </td>
                            <td v-else>
                                {{ value }}
                            </td>
                            </template>
                            
                            <td>
                                <button type="button" class="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i class="icon-info"></i></button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    fields: {
        type: Array,
    },
    editEnabled: {
        type: Boolean,
    },
    showEmail: {
        type: Boolean,
    },
    data: {
      type: Array,
      required: true,
    },
    deleteElement: {
      type: Function,
      required: true,
    },
    enableEdit: {
      type: Function,
      required: true,
    },
    enableEdit: {
      type: Function,
      required: true,
    },
  },
};
</script>