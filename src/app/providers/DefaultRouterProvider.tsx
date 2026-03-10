import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import DefaultLayout from '../../shared/ui/DefaultLayout';
import SignIn from '../../pages/SignIn';
import HomePage from '../../pages/HomePage';
import { useUserStore } from '../../entities/user/model/userStore';

export function ProtectedLayout(){
    const user = useUserStore((state) => state.user);    
    console.log('user: ', user);
    // if(!user){
    //     return <Navigate to='/login' replace state={{ from: `${location.pathname}${location.search}` }}/>
    // }

    return <Outlet/>;
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>, // 건물의 외벽과 복도
        children: [
            {
                path: 'login',
                element: <SignIn />,
            },
            {
                element: <ProtectedLayout/>,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                ]
            },
            

        ],
    },
])

export default function DefaultRouterProvider(){
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    )
}