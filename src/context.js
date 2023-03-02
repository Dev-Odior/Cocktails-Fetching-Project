import React, {
  useState,
  useContext,
  useEffect,
  useReducer,
  createContext,
} from 'react'
import { useCallback } from 'react'
import reducer from './reducer/reducer'
import { defaultData } from './data/data'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext({
  dispatch: () => null,
  state: {},
})

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultData)
  const value = { state, dispatch }
  const { searchTerm, formInput } = state

  const fetchData = async () => {
    try {
      const { data } = await axios(`${url}${formInput}`)
      const { drinks } = data
      dispatch({ type: 'DATA', payLoad: drinks })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [formInput])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
