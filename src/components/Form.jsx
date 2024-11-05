import {useState,useEffect} from 'react';

function Form({searchMovie}){

  const [formData,setFormData] = useState({
    searchTerm:"",
  })

function handleChange(e){

  setFormData({...formData,[e.target.name]:e.target.value})
 
}
function handleSubmit(e){
  e.preventDefault();
  searchMovie(formData.searchTerm);
 
}

  return(<div>

    <form action="" onSubmit={handleSubmit}>
      <input type="text"
      name='searchTerm'  
      value={formData.searchTerm}
      onChange={handleChange}
      />
      <input type="submit" value="submit" />
    </form>
  </div>)
}

export default Form;