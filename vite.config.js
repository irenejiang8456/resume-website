import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
  // 设置项目根目录
  base:'./',
  server:{
    port:666
  },
  plugins: [vue(
      {
        // 开启响应式语法糖，用来支持$ref()
        reactivityTransform:true
      }
  ),
      AutoImport({
          // 自动导入 Vue 相关函数，如：reactive，toRef
          imports:['vue'],
          resolvers: [ElementPlusResolver(),
              IconsResolver({
                  prefix: 'Icon', //用法参考 www.jianshu.com/p/23229850bb08
              })
          ],
      }),
      Components({
          resolvers: [ElementPlusResolver(),
              IconsResolver({
                  enabledCollections: ['ep'],
              })
          ],
      }),
      Icons({
          autoInstall: true,
      }),
  ],
})
