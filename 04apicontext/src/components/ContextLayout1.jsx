import UserContextProvider from "../contexts/UserContextProvider"
import { Login } from "./Login"
import {Profile} from "./Profile"

function ContextLayout1() {
  return (
      <UserContextProvider>
        <h1>Context api </h1>
        <Login />
        <Profile />
      </UserContextProvider>
  )
}

export default ContextLayout1