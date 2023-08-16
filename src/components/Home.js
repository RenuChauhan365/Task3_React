import React,{useEffect, useState} from 'react'
import axios from 'axios'
import  {Link, useNavigate} from 'react-router-dom'

function Home() {




const [data, setData] = useState([])
const navigate = useNavigate();
	useEffect(() => {
		axios.get('http://localhost:3000/users')
			.then(result => setData(result.data))
			.catch(err => console.log(err))

	},[])



	// handleDelete


	const handleDelete = (id) =>{

const confirm   = window.confirm('Are you sure you want to delete')
if(confirm) {
	axios.delete('http://localhost:3000/users/'+ id)
	.then(result => {

	window.location.reload();
    // navigate('/')




})
.catch(err =>{
	console.log(err);
})



	}


}


	return (
		<div className='d-flex flex-column justify-content-center align-items-center bg-light '>
			<h1> User's Details</h1>


			<div className='w-75 rounded bg-white border shadow p-4'>
				<div className='d-flex justify-content-end'>
					<Link to= '/add' className='btn btn-success'>  Add +</Link></div>

     <table className='table table-striped'>

	  <thead>
			<tr>
				<td>ID</td>
				<td>Name</td>
				<td>Email</td>
				<td>Phone</td>
				<td>Action</td>



			</tr>
		</thead>


		{/*  this is an table body  */}

		<tbody>

			 {
 data.map(( data, index) => (

 <tr key={index}>
	 <td> {data.id}</td>
	 <td> {data.name}</td>
	 <td> {data.email}</td>
	  <td> {data.phone}</td>
		 <td>

	<Link   to={`/view/${data.id}`}  className='btn btn-sm btn-info me-2 ms-2 px-3'> View </Link>
  <Link  to= {`/edit/${data.id}`}  className='btn btn-sm btn-primary me-2 ms-2 px-3'> Edit </Link>
	<button   onClick={ e => handleDelete(data.id)} className='btn btn-sm btn-danger  me-1'> Delete</button>
		 </td>
 </tr>

 ))
			 }
		</tbody>
 </table>

			</div>
		</div>
	)
}


export default Home