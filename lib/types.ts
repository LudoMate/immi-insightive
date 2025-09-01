import type { ReactElement } from 'react'

export type NextPageWithLayout = {
  getLayout?: (page: ReactElement) => ReactElement
}
