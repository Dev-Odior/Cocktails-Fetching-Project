import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { state } = useGlobalContext()
  const { cockTailData, loading } = state

  console.log(cockTailData.length)

  if (loading) {
    return <Loading />
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      {cockTailData.length === 0 ? (
        <h1 className="center">No such cocktail exists</h1>
      ) : (
        <div className="cocktails-center">
          {cockTailData.map((item) => {
            return <Cocktail key={item.id} {...item} />
          })}
        </div>
      )}
    </section>
  )
}

export default CocktailList
