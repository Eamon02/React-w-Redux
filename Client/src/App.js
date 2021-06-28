import './App.css';
import CommentDetail from './CommentDetail';
import faker from 'faker';
function App() {
	return (
		<div className='ui container comments'>
			<CommentDetail image={faker.image.avatar()} author = 'sam' time="Today at 4:45PM"/>
			<CommentDetail image={faker.image.avatar()} author = '420' time="Today at 2:45PM"/>
			<CommentDetail image={faker.image.avatar()} author = 'beans' time="Yesterday at 1:45PM"/>
		</div>
	)
}

export default App;
