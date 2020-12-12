import SearchMovie from './components/SearchMovie'
import Movie from './components/Movie'

export default [
    { path: '/', component: SearchMovie },
    { path: '/movie/:idMovie/:movie', component: Movie }
]