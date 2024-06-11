import Krypto from "../Pages/Krypto";
import Layout from "../Component/Layout";

export const ROUTES = [
    {
        path: "/",
        element:<Layout/>,
        children: [
            {
                path: "",
                element:<Krypto/>
            },
            {
                path: "krypto",
                element:<Krypto/>
            }
        ]
    }
]