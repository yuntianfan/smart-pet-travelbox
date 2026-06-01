<template>
  <div class="dashboard">
    <div class="dashboard-title">运营看板</div>
    <div class="stat-grid">
      <StatCard
        v-for="stat in stats"
        :key="stat.label"
        :data="stat.data"
        :loading="stat.loading"
        :error="stat.error"
        :icon="stat.icon"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StatCard from '../../components/StatCard.vue'
import { fetchDashboardStats } from '../../api/mock'

const stats = ref([
  { label: '在途设备数', icon: 'Box', data: null, loading: true, error: false },
  { label: '活跃用户数', icon: 'User', data: null, loading: true, error: false },
  { label: '今日告警数', icon: 'Warning', data: null, loading: true, error: false }
])

onMounted(async () => {
  try {
    const data = await fetchDashboardStats()
    data.forEach((item, index) => {
      if (stats.value[index]) {
        stats.value[index].data = item
        stats.value[index].loading = false
      }
    })
  } catch (e) {
    stats.value.forEach(s => { s.loading = false; s.error = true })
  }
})
</script>

<style scoped>
.dashboard {
  width: 100%;
}
.dashboard-title {
  font-size: 18px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 24px;
}
.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stat-grid {
    grid-template-columns: 1fr;
  }
}
</style>