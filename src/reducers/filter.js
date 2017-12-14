const filter = ( state = [], action ) => {
    switch ( action.type ) {
      case "SET_FILTER":
      return state.map( blog => {
        if( blog.id === action.id )
          return { ...blog, filter: true }
        return blog
      })
      default:
        return state
    }
}

export default filter