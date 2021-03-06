import React, {useState, useEffect} from 'react'
const defaultImageSrc="/img/product.png"

const initialFieldValues ={
    title:"",
    price:"",
    description:"",
    inStock:"",
    categoryId: "",
    imageName:"",
    imageSrc:defaultImageSrc,
    imageFile:null


}



export default function AddProduct (props) {

    const {addOrEdit} = props
    const [values,setValues] = useState(initialFieldValues)

    const [errors,setErrors] = useState({})

    

    const handleInputChange = e=>{
        const{name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const showPreview = e =>{
        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x=>{
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else{
            setValues({
                ...values,
                imageFile:null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate =()=>{
        let temp={}
        temp.title = values.title === ""?false:true;
        temp.price = values.price === "" ?false:true;
        temp.inStock = values.inStock === ""  ?false:true;
        temp.categoryId = values.categoryId === "" ?false:true;
        temp.imageSrc = values.imageSrc === defaultImageSrc?false:true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)

    }

    const resetForm =() =>{
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e=>{
        e.preventDefault()
        if(validate()){
            const formData = new FormData()
            formData.append('title',values.title)
            formData.append('price',values.price)
            formData.append('description',values.description)
            formData.append('inStock',values.inStock)
            formData.append('categoryId',values.categoryId)
            formData.append('imageName',values.imageName)
            formData.append('imageFile',values.imageFile)
            addOrEdit(formData,resetForm)

        }
    }


    const applyErrorClass = field =>((field in errors && errors[field]===false)?'invalid-field':'')
    

    //fetch categories list
    
    const [catList,setCatList]= useState([]);
    useEffect(()=>{
        async function fetchCatList(){
            const requesUrl = "http://localhost:44374/api/Category";
            const reponse = await fetch(requesUrl);
            const reponseJson= await reponse.json();
            console.log(reponseJson);
            setCatList(reponseJson);
        }
        fetchCatList();
    },[]);
        
    


    return (
        
        <>
            <div className="container text-center">
                <p className="lead">New Product</p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card form">
                    <img alt="category" src={values.imageSrc} className="card-img-top"/>
                    <div className="form-group m-auto">
                        <input type="file" 
                        accept="image/*" 
                        className={"form-control-file"+ applyErrorClass('imageSrc')}
                        onChange={showPreview}
                        id="image-uploader"
                        />

                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <input className={"form-control"+ applyErrorClass('title')} 
                            placeholder="Title..." 
                            name="title" 
                            type="text"
                            value={values.title}
                            onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <input className={"form-control"+ applyErrorClass('price')} 
                            placeholder="Price... ($)" 
                            name="price" 
                            type="number"
                            min="0"
                            value={values.price}
                            onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className={"form-control"+ applyErrorClass('inStock')} 
                            placeholder="Quantity in Stock..." 
                            name="inStock" 
                            type="number"
                            min="0"
                            value={values.inStock}
                            onChange={handleInputChange}/>
                            
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" 
                            placeholder="Description..." 
                            name="description" 
                            value={values.description}
                            onChange={handleInputChange}/>
                        </div>
                        <div className="form-group ">
                            <select name="categoryId" value={values.categoryId} onChange={handleInputChange} className={"form-control"+ applyErrorClass('categoryId')} >
                                <option>Category...</option>
                                {catList.map((cat) => (
                                    
                                <option  key ={cat.id} value={cat.id}  >{cat.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-light" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
