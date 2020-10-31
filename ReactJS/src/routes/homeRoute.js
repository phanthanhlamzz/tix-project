import Home from './../containers/Home';
import HomePage from './../containers/Home/HomePage'

const homeRoutes =[
    {
        path: "/",
        component: HomePage,
        exact: true,
    }
];
const homeRoutesRender = ()=>{
    return homeRoutes.map((item,index)=>{
        return(<Home
            key={index}
            path={item.path}
            component={item.component}
            exact={item.exact}
        />)
    });
};

export default homeRoutesRender;