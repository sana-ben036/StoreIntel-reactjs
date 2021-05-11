import { Container} from '@material-ui/core'
//import React,{useState,useEffect} from 'react'

import AddCategory from "./AddCategory"
import ListCategory from "./ListCategory"
import axios from 'axios';


export default function ManageCategoryFragment() {

    //const [categoryList,setCategoryList]= useState([])

    /*useEffect(()=>{
        refreshList();

    },[])*/

    //const [recordForEdit, setRecordForEdit] = useState(null)

    const API = (url='http://localhost:44374/api/Category') =>{
        return{
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url,newRecord),
            update: (id, updateRecord) =>axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }

    /*function refreshCategoryList(){
        API().fetchAll()
        .then(res=> setCategoryList(res.data))
        .catch(err=> console.log(err))
    }*/

    

    

    const addOrEdit = (formData, onSuccess) =>{
        API().create(formData)
        .then(res =>{
            onSuccess();
        })
        .catch(err => console.log(err))
    }
    

    /*const addOrEdit = (formData, onSuccess) => {
        if (formData.get('id') == null)
            API().create(formData)
                .then(res =>{
                    onSuccess();
                })
            .catch(err => console.log(err))
        else
            API().update(formData.get('id'),formData)
                .then(res => {
                    onSuccess();
                })
            .catch(err => console.log(err))
}*/






    return (
        <Container>
            <div className="row">
                <div className="col-md-4">
                    <AddCategory 
                    addOrEdit={addOrEdit}
                    />
                </div>
                <div className="col-md-8">
                    <ListCategory/>    
                </div>
            </div>
        </Container>
    )
}


