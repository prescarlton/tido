import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"

interface IHeaderContext {
  setHeaderContent: Dispatch<SetStateAction<ReactNode>>
  headerContent: ReactNode
}

const HeaderContext = createContext<IHeaderContext>({} as IHeaderContext)

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [headerContent, setHeaderContent] = useState<ReactNode>()

  return (
    <HeaderContext.Provider value={{ headerContent, setHeaderContent }}>
      {children}
    </HeaderContext.Provider>
  )
}

const useHeaderContext = () => {
  const ctx = useContext(HeaderContext)
  if (!ctx)
    throw new Error("useHeaderContext must be used within a HeaderProvider")

  return ctx
}

export default useHeaderContext
