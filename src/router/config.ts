const routes = [
  {
    path: "/heatmap",
    exact: true,
    component: "Heatmap/page", // ✅ your main page
  },
  {
    path: "/home",
    exact: true,
    component: "Home", // ✅ your secondary page
  },
];

export default routes;
