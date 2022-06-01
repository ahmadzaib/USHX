import Home from '../views/home';
import Listing from '../views/listing';
import Detail from '../views/detail';
import SocialMedia from '../views/socialMedia';


import {
    home,
    listing,
    detail,
    socialMedia,
} from './routePath'

const AuthRouter = [
    { path: home, component: Home },
    { path: listing, component: Listing },
    { path: detail, component: Detail },
    { path: socialMedia, component: SocialMedia }

]

export default AuthRouter;