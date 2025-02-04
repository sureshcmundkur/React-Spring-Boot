import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListTodoComponent from './components/ListTodoComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import TodoComponent from './components/TodoComponent.jsx';
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<ListTodoComponent />} />
                    <Route path='/todos' element={<ListTodoComponent />} />
                    <Route path='/add-todo' element={<TodoComponent />} />
                    <Route path='/update-todo/:id' element={<TodoComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    );
}

export default App;