<script setup>
</script>

<template>

  <div class="layout bg-white">
    <div>
      <nav>
        <div dir="ltr">
          <router-link to="/"></router-link>
          <router-link to="/product"></router-link>
          <router-link to="/new"></router-link>
          <router-link to="/order"></router-link>
          <router-view/>
        </div>
      </nav>
    </div>
    <main>

    </main>
  </div>
</template>

<style scoped>

</style>