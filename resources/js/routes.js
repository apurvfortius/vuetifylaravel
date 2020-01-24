import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Posts from './views/post/index.vue';
import Post from './views/post/post.vue';

export const routes = [
    {
        path : '/login',
        component : Login,
       
    },
    {
        path : '/home',
        component : Home,
        meta:{
            requireAuth : true
        }
    },
    {
        path : '/posts',
        component : Posts,
        meta:{
            requireAuth : true
        }
    },
    {
        path : '/post/:id?',
        component : Post,
        meta:{
            requireAuth : true
        }
    },

]