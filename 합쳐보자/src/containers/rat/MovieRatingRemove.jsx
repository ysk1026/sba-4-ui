import React, {useState} from 'react'
import axios from 'axios'
import { MovieRating } from '../../templates'

const MovieRatingRemove = () => {
    const [ratingid, setRatingid] = useState('')

    const del = () => {
        alert(`DELETE MOVIE ID : ${ratingid}`)
        axios.post(`http://127.0.0.1:8080/api/movie-rating-del`,{'ratingid':ratingid})
        .then(res => {
            alert(`DELETE SUCCESS`)
        })
        .catch(e => {
            alert(`DELETE FAIL ${e}`)
        })

    }

    
    return (<MovieRating>
        <h1>MovieRatingRemove</h1>
        <form>
            <table className='tab_layer'>
                <tr>
                    <td>RATINGID</td>
                    <td><input type="text" onChange={e => setRatingid(e.target.value)}/></td>
                </tr>
                <tr>
                    <td colspan={2}>
                        <button type="button" class="btn btn-sm btn-primary" id="btnDelete" onClick={del}>DELETE</button>
                        <button>CANCEL</button>
                    </td>
                </tr>
            </table>
        </form>
    </MovieRating>)
}

export default MovieRatingRemove