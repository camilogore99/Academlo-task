import { Route, Routes } from 'react-router-dom'
import { Tasks } from 'components/Tasks'
import { Login } from 'components/Auth/Login'
import './App.css'
function App() {
	return (
		<Routes>
			<Route index element={<Login />} />
			<Route path='/task/:token' element={<Tasks />} />
		</Routes>
	)
}

export default App
