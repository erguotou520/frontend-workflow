const defaultConfig = {

  // 开机自启动
  autoLaunch: false,
  enable: true
}

export default defaultConfig

// 合并默认配置，做好配置升级
export function mergeConfig (appConfig) {
  Object.keys(defaultConfig).forEach(key => {
    if (appConfig[key] === undefined) {
      appConfig[key] = defaultConfig[key]
    }
  })
}
