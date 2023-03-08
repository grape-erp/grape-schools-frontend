import { Routes as RoutesDOM, Route } from 'react-router-dom';
import Class from './pages/Class';
import ClassForm from './pages/Class/form';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default function Routes() {
    return (
        <RoutesDOM>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/class" element={<Class />} />
            <Route path="/class/form/:id" element={<ClassForm />} />
        </RoutesDOM>
    );
}
