import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { state, dispatch } = useGlobalContext()
  const { formInput } = state

  const onChangeHandler = (event) => {
    const { value } = event.target

    dispatch({ type: 'ON_CHANGE', payLoad: value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter CockTail Name...."
            value={formInput}
            onChange={onChangeHandler}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
