const reducer = (state, action) => {
  const { type, payLoad } = action

  if (type === 'DATA') {
    let trimed

    if (payLoad) {
      trimed = payLoad.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        }
      })
    } else {
      trimed = []
    }

    console.log(trimed, 'trimed')
    return { ...state, cockTailData: trimed, loading: false }
  }

  if (type === 'ON_CHANGE') {
    return { ...state, formInput: payLoad }
  }

  return { ...state }
}

export default reducer
