<script setup>
import {onMounted, ref} from "vue"
import {useSchoolStore} from "../stores/schoolStore.js";

defineProps({
  msg: String,
})

const count = ref(0)
const useSchool = useSchoolStore()
const onCount = () => {
  useSchool.getSchools()
}

onMounted(()=>{
  useSchool.getSchools()
})
</script>

<template>
  <div>
    <h1>loading: {{ useSchool.isLoading }}</h1>

    <div class="card">
      <button type="button" @click="onCount">Ambil data Sekolah</button>
    </div>
    <pre>{{ useSchool.items }}</pre>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
