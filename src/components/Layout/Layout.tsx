import React, { useContext, useEffect } from 'react';
import '../../../App.css';
import { LoginScreen } from '../Screens/Login/LoginScreen';
import { Feed } from '../Screens/Feed';
import { AuthContext } from '../../context/AuthContext';
import { useFeed } from '../../context/FeedContext';
import { useSession } from '../../context/SessionContext';
import { Main } from '../Screens/Main';
import { Students } from '../Screens/Students/Students';


export const Layout: React.FC = () => {
    const { feed, changeFeed } = useFeed();
    const {session, changeSession}=useSession();
    const { authState } = useContext(AuthContext);

    // Verificar autenticación y ajustar feed en consecuencia
    useEffect(() => {
        if (authState.isLoggenIn) {
            changeFeed(1)
            changeSession(1); 
        }
    }, [authState.isLoggenIn]);

    // Renderizado de pantallas basado en feed
    switch (feed) {
        case 0:
            return <LoginScreen />;
        case 1:
            return <Main />;
        case 2:
            return <Students />;
        // case 3:
        //     return <Services />;
        // case 5:
        //     return <Location />;
        // case 6:
        //     return <Contact />;
        // case 7:
        //     return <Students />;
        // case 10:
        //     return <Store />;
        // case 11:
        //     return <Help />;
        default:
            return <section>Página Web No Disponible</section>;
    }
};
