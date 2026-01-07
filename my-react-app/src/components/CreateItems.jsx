import './CreateItems.css'
import axios from "axios"

const CreateItems = () => {
 
 async function handlesubmit (e){
   e.preventDefault();
   const name = e.target["name"].value;
   const price =e.target['price'].value;
   const description = e.target['description'].value;
   const category =e.target['category'].value;
   const image = e.target['image'].value;

   try{
    await axios.post("http://localhost:3001/all/create",{
        name,
        price,
        description,
        category,
        image
    },{
        withCredentials:true
    });
    console.log(name,price,description,image,category);

   }catch(err){
     console.log(err)
   }

}

  return (
   <div className='large-screen'>
    <div className="create-items-wrap">
      <form className="create-items-form"noValidate onSubmit={handlesubmit}>
        <h2 className="form-title">Add Item</h2>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name of the Product</label>
            <input
              id="name"
              placeholder="Product Title"
              />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              placeholder="0.00"
              inputMode="decimal"
              />
          </div>

          <div className="form-group full">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              placeholder="https://..."
              />
          </div>

          <div className="form-group full">
           <label htmlFor="category">Category</label>
             <select id="category" className="form-input">
              <option value="">Select Category</option>
              <option value="mobiles">Mobiles</option>
              <option value="fasion">Fasion</option>
            </select>
          </div>


          <div className="form-group full">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows={4}
              placeholder="Short description"
              />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn primary">Add Item</button>
        </div>
      </form>
     </div>
   </div>
  )
}

export default CreateItems
