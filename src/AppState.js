import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  posts: [],
  subMessageBanner: {},
  subMessageTall: {},
  results: [],
  pages: 0,
  currentPage: 0
})
