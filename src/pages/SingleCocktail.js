import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [loading, setLoading] = useState(true)
  const [details, setDetail] = useState({})
  const { id } = useParams()

  const fetchData = async () => {
    try {
      const { data } = await axios(`${url}${id}`)
      const { drinks } = data

      setDetail(drinks[0])
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = details
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ]
  const newCocktail = {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  }

  return (
    <>
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>

        {loading ? (
          <Loading />
        ) : (
          <>
            {' '}
            <h2 className="section-title">{name}</h2>
            <div className="drink">
              <img src={image} alt={name}></img>
              <div className="drink-info">
                <p>
                  <span className="drink-data">name :</span> {name}
                </p>
                <p>
                  <span className="drink-data">category :</span> {category}
                </p>
                <p>
                  <span className="drink-data">info :</span> {info}
                </p>
                <p>
                  <span className="drink-data">glass :</span> {glass}
                </p>
                <p>
                  <span className="drink-data">instructons :</span> {instructions}
                </p>
                <p>
                  <span className="drink-data">ingredients :</span>
                  {ingredients.map((item, index) => {
                    return item ? <span key={index}> {item}</span> : null
                  })}
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default SingleCocktail
