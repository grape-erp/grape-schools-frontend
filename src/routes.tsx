import { Routes as RoutesDOM, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default function Routes() {
    return (
        <RoutesDOM>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </RoutesDOM>
    );
}
