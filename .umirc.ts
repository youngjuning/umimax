import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '表单',
      path: '/form',
      routes: [
        {
          name: '基础表单',
          path: '/form/basic',
          component: './Form/BasicForm',
        },
        {
          name: '表单方法调用',
          path: '/form/method',
          component: './Form/FormMethod',
        },
        {
          name: '非阻塞校验',
          path: '/form/non-blocking-validate',
          component: './Form/NonBlockingValidate',
        },
        {
          name: '字段监听 Hooks',
          path: '/form/useWatch',
          component: './Form/UseWatch',
        },
        {
          name: '动态增减表单项',
          path: '/form/dynamically-adding-form-items',
          component: './Form/DynamicallyAddingFormItems'
        }
      ],
    },
  ],
  npmClient: 'pnpm',
});
