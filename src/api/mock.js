const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchDeviceCount() {
  await delay(800)
  return { value: 128, label: '在途设备数', unit: '台' }
}

export async function fetchActiveUserCount() {
  await delay(1000)
  return { value: 342, label: '活跃用户数', unit: '人' }
}

export async function fetchTodayAlarmCount() {
  await delay(1200)
  return { value: 7, label: '今日告警数', unit: '次' }
}

export async function fetchDashboardStats() {
  await delay(1500)
  return [
    { value: 128, label: '在途设备数', unit: '台', icon: 'Box' },
    { value: 342, label: '活跃用户数', unit: '人', icon: 'User' },
    { value: 7, label: '今日告警数', unit: '次', icon: 'Warning' }
  ]
}