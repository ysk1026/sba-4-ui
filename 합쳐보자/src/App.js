import React, {useState} from 'react'
import { Nav } from './components/cmm'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, User, Actor, RecoMovie, MovieRating } from './templates'
import {UserLogin, UserRegister, UserList, UserSearch, UserProfile} from './containers/usr'
import {ActorHome, ActorQuiz, ActorList,ActorQuizSingle} from './containers/act'
import {MovieRatingDetail, MovieRatingList, MovieRatingModify, MovieRatingRegister, MovieRatingRemove} from './containers/rat'
import {RecoMovieDetail, RecoMovieList, RecoMovieModify, RecoMovieRegister, RecoMovieRemove} from './containers/mov'
import {ReviewContainer, ReviewListContainer, MyReview, ReviewWrite, ReviewEdit} from './containers/rev'
import {Chatbot} from './containers/cht'

// react -> redux -> thunk -> saga -> Mobx
export default function App(){
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
  return (<>
  <Router>
    <Nav isAuth = {loggedIn}/>
    <Switch>
      <Route exact path='/'component= {Home}/>
      <Route path='/user'component= {User}/>
      <Route path='/actor'component= {Actor}/>
      <Route path ='/userlogin' component={UserLogin}/>
      <Route path ='/userregister' component={UserRegister}/>
      <Route path='/userlist' component={UserList}/>
      <Route path='/usersearch' component={UserSearch}/>
      <Route path='/actorlist' component={ActorList}/>
      <Route path ='/actorhome' component={ActorHome}/>
      <Route path ='/actorquiz' component={ActorQuiz}/>
      <Route path ='/actorquizsingle' component={ActorQuizSingle}/>
      <Route path ='/userprofile' component={UserProfile}/>
      <Route path ='/chatbot' component={Chatbot}/>
      <Route path='/movie-rating' component={MovieRating}/>
      <Route path='/movie-rating-detail' component={MovieRatingDetail}/>
      <Route path='/movie-rating-register' component={MovieRatingRegister}/>
      <Route path='/movie-rating-list' component={MovieRatingList}/>
      <Route path='/movie-rating-modify' component={MovieRatingModify}/>
      <Route path='/movie-rating-remove' component={MovieRatingRemove}/>                
      <Route path='/recomovie' component={RecoMovie}/>
      <Route path='/recomovie-detail' component={RecoMovieDetail}/>
      <Route path='/recomovie-register' component={RecoMovieRegister}/>
      <Route path='/recomovie-list' component={RecoMovieList}/>
      <Route path='/recomovie-modify' component={RecoMovieModify}/>
      <Route path='/recomovie-remove' component={RecoMovieRemove}/>
      <Route path='/review-container' component={ReviewContainer}/>
      <Route path ='/review-list' component={ReviewListContainer}/>
      <Route path ='/my-review' component={MyReview}/>
      <Route path ='/write-review' component={ReviewWrite}/>
      <Route path ='/edit-review' component={ReviewEdit}/>
    </Switch>

  </Router>

</>)}