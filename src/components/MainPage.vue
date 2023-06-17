<template>
    <h1>Ali Çağan</h1>
</template>


<script>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

export default {
  name: "Home",
  setup() {
    const message = ref('');

    onMounted(async () => {
      try {
        const {data} = await axios.get('/tenant-estate/animals?limit=10&offset=0');
        message.value = data;
      } catch (e) {
        console.log(e);
      }
    });


    return {
      message,
    }
  }
}
</script>