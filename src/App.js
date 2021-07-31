import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
	const user = useSelector(selectUser);

	return (
		<div className="App">
			<Header />

			<div className="app_body">
				<Sidebar />
				<Feed />
				<Widgets />
			</div>
		</div>
	);
}

export default App;
