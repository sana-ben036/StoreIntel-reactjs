import { SignalCellularNullOutlined } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'

const defaultImageSrc="/img/category.png"

const initialFieldValues ={
    //categoryID:,
    title:"",
    description:"",
    imageName:"",
    imageSrc:defaultImageSrc,
    imageFile:null


}
export default function Category (props) {

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
        temp.title = values.title == ""?false:true;
        temp.imageSrc = values.imageSrc == defaultImageSrc?false:true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)

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
            //formData.append('categoryID',values.categoryID)
            formData.append('title',values.title)
            formData.append('description',values.description)
            formData.append('imageName',values.imageName)
            formData.append('imageFile',values.imageFile)
            addOrEdit(formData,resetForm)

        }
    }


    const applyErrorClass = field =>((field in errors && errors[field]==false)?'invalid-field':'')




    return (
        <>
            <div className="container text-center">
                <p className="lead">New Category</p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
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
                            placeholder="Enter title" 
                            name="title" 
                            value={values.title}
                            onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" 
                            placeholder="Enter description" 
                            name="description" 
                            value={values.description}
                            onChange={handleInputChange}/>
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
