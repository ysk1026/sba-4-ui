import React from 'react'
import {MovieRatingMenu as Menu} from '../components/cmm'
import './table.style.css'

const MovieRating = ({children}) => (<>
    <h1>Movie</h1>
    <Menu/>
    {children}
</>)

export default MovieRating


