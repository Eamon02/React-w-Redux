import './App.css';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard	from "./ApprovalCard";

function App() {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
			<CommentDetail image={faker.image.avatar()} author = 'sam' time="Today at 4:45PM"/>
			</ApprovalCard>
			<CommentDetail image={faker.image.avatar()} author = '420' time="Today at 2:45PM"/>
			<CommentDetail image={faker.image.avatar()} author = 'beans' time="Yesterday at 1:45PM"/>
		</div>
	)
}

export default App;
