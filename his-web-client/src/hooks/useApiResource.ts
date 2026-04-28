import { useEffect, useState } from 'react'

type ApiResourceState<T> = {
  data: T | null
  error: string | null
  isLoading: boolean
}

export default function useApiResource<T>(loadResource: () => Promise<T>, dependencies: unknown[] = []) {
  const [state, setState] = useState<ApiResourceState<T>>({
    data: null,
    error: null,
    isLoading: true,
  })

  useEffect(() => {
    let isMounted = true

    setState((current) => ({ ...current, error: null, isLoading: true }))

    loadResource()
      .then((data) => {
        if (isMounted) {
          setState({ data, error: null, isLoading: false })
        }
      })
      .catch((error: unknown) => {
        if (isMounted) {
          setState({
            data: null,
            error: error instanceof Error ? error.message : 'Unable to load data',
            isLoading: false,
          })
        }
      })

    return () => {
      isMounted = false
    }
  }, dependencies)

  return state
}
