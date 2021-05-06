import {createContext} from "react"

const testContext = createContext()

const { Provider, Consumer } = testContext

export {
  Provider,
  Consumer,
  testContext
}