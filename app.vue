<script lang="ts" setup>
const { $http } = useNuxtApp() // unknown type if i18n in modules array
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
