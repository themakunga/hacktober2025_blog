export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"Guide\":{\"path\":\"/category/guide/\",\"indexes\":[0,1,2,3,4,5]},\"blog\":{\"path\":\"/category/blog/\",\"indexes\":[6,7]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"disable\":{\"path\":\"/tag/disable/\",\"indexes\":[2]},\"encryption\":{\"path\":\"/tag/encryption/\",\"indexes\":[3]},\"Layout\":{\"path\":\"/tag/layout/\",\"indexes\":[4]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[5]},\"Page config\":{\"path\":\"/tag/page-config/\",\"indexes\":[0]},\"Guide\":{\"path\":\"/tag/guide/\",\"indexes\":[0]},\"Hacktober 2025\":{\"path\":\"/tag/hacktober-2025/\",\"indexes\":[6,7]},\"Post\":{\"path\":\"/tag/post/\",\"indexes\":[6,7]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

