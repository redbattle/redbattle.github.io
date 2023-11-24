export default [
  {
    path: "/home",
    name: "home.index",
    compnent: () => import("@/views/home"),
    meta: {
      title: "首页",
      menuCode: "home",
      breadcrumb: [],
    },
  },
  {
    path: "/user",
    name: "user.index",
    compnent: () => import("@/views/user"),
    meta: {
      title: "用户",
      menuCode: "user",
      breadcrumb: [],
    },
  },
  {
    path: "/home/page1",
    name: "home.page1",
    compnent: () => import("@/views/page1"),
    meta: {
      title: "页面1",
      menuCode: "home",
      breadcrumb: [
        {
          path: "/home",
          title: "首页",
          query: [],
        },
      ],
    },
  },
  {
    path: "/home/page2",
    name: "home.page2",
    compnent: () => import("@/views/page2"),
    meta: {
      title: "页面2",
      menuCode: "home",
      breadcrumb: [
        {
          path: "/home",
          title: "首页",
          query: [],
        },
        {
          path: "/home/page2",
          title: "页面1",
          query: [a, b],
        },
      ],
    },
  },
];
