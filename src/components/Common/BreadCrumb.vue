<template>
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">MALDAVAR</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{ text }}</li>
    </ol>
    </nav>
</template>


<script>
export default {
  name: 'BreadCrumb',
  props: {
    text: String,
  },
}
</script>