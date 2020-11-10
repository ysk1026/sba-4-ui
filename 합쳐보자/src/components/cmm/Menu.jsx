import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => <nav>
    <ol>
        <li><Link to ='/userlogin'>User Login</Link></li>
        <li><Link to ='/userregister'>User register</Link></li>
        <li><Link to ='/userremove'>User remove</Link></li>
        <li><Link to ='/userupdate'>User update</Link></li>
        <li><Link to ='/userlist'>User List</Link></li>
        <li><Link to ='/usersearch'>User Search</Link></li>
        <li><Link to ='/userprofile'>User Profile</Link></li>

    </ol>
    
</nav>

export const MovieRatingMenu = () => (<nav>
    <ol>
        <li><Link to='/movie-rating-detail'>Movie Rating</Link></li>
        <li><Link to='/movie-rating-register'>Movie Rating Register</Link></li>
        <li><Link to='/movie-rating-list'>Movie Rating List</Link></li>
        <li><Link to='/movie-rating-modify'>Movie Rating Modify</Link></li>
        <li><Link to='/movie-rating-remove'>Movie Rating Remove</Link></li>
    </ol>
</nav>)

export const ActorMenu = () => <nav>
    <ol>
        <li><Link to = '/actorhome'>Actor Home</Link></li>
        <li><Link to = '/actorquiz'>Actor Quiz</Link></li>
        <li><Link to = '/actorquizsingle'>Actor Quiz Single</Link></li>
        <li><Link to = '/actorlist'>Actor List</Link></li>

    </ol>

</nav>

export const RecoMovieMenu = () => (<nav>
    <ol>
        <li><Link to='/recomovie-detail'>RecoMovie</Link></li>
        <li><Link to='/recomovie-register'>RecoMovie Register</Link></li>
        <li><Link to='/recomovie-list'>RecoMovie List</Link></li>
        <li><Link to='/recomovie-modify'>RecoMovie Modify</Link></li>
        <li><Link to='/recomovie-remove'>RecoMovie Remove</Link></li>
    </ol>
</nav>)

export const ArticleMenu = () =>(<nav>
    <ol>
        <li><Link to='/article-write-form'>Writing Article Form</Link></li> 
        <li><Link to='/article-list'>Article List</Link></li> 
        <li><Link to='/edit-article'>Update Article Form</Link></li> 
        <li><Link to='/delete-article'>Delete Article Form</Link></li> 
    </ol>
</nav>)

export const ItemMenu = () => (<nav>
    <ol>
        <li><Link to='/item-list'>Item List</Link></li>
        <li><Link to='/register-item'>Register Item</Link></li>
        <li><Link to='/modify-item'>Modify Item</Link></li>
        <li><Link to='/remove-item'>Remove Item</Link></li>
    </ol>
</nav>)

export const AuthMenu = () => (<nav>
    <ol>
        <li><Link to='/signup-form'>Siginup Form</Link></li>
        <li><Link to='/signin-form'>Signin Form</Link></li>
    </ol>
</nav>)



