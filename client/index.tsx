import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import TagManager from 'react-gtm-module'

// Google Tag Manager
const gtag = import.meta.env.VITE_GTAG
const tagManagerArgs = {
  gtmId: gtag,
}
if (gtag) {
  TagManager.initialize(tagManagerArgs)
}

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>,
  )
})
