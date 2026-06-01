<template>
  <div class="admin-layout">
    <header class="admin-header">
      <h1>智能宠物航空箱 — 后台管理系统</h1>
    </header>
    <main class="admin-main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.admin-layout {
  min-height: 100vh;
  background: #f5f7fa;
}
.admin-header {
  background: #fff;
  padding: 16px 24px;
  border-bottom: 1px solid #e4e7ed;
}
.admin-header h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #303133;
}
.admin-main {
  padding: 24px;
}
</style>