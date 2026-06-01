<template>
  <el-card class="stat-card" shadow="hover">
    <div v-if="loading" class="stat-loading">
      <el-skeleton :rows="1" animated />
    </div>
    <div v-else-if="error || data === null" class="stat-empty">
      <el-empty description="暂无数据" :image-size="60" />
    </div>
    <div v-else class="stat-content">
      <div class="stat-icon">
        <el-icon :size="32">
          <component :is="iconComponent" />
        </el-icon>
      </div>
      <div class="stat-value">{{ data.value }}{{ data.unit }}</div>
      <div class="stat-label">{{ data.label }}</div>
    </div>
  </el-card>
</template>

<script setup>
import { computed } from 'vue'
import { Box, User, Warning, CloseBold } from '@element-plus/icons-vue'

const props = defineProps({
  data: {
    type: Object,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: 'Box'
  }
})

const iconMap = {
  Box,
  User,
  Warning,
  CloseBold
}

const iconComponent = computed(() => iconMap[props.icon] || Box)
</script>

<style scoped>
.stat-card {
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.stat-icon {
  color: #409eff;
}
.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #303133;
}
.stat-label {
  font-size: 14px;
  color: #909399;
}
.stat-loading,
.stat-empty {
  width: 100%;
}
</style>