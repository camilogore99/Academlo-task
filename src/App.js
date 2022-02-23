import { Route, Routes } from 'react-router-dom'
import { Tasks } from 'Feature/Tasks'
import { Login } from 'Feature/Auth/Login'
import './App.css'
function App() {
	return (
		<Routes>
			<Route index element={<Login />} />
			<Route path='/task' element={<Tasks />} />
		</Routes>
	)
}

export default App
