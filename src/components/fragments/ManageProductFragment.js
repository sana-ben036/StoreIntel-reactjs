import { Container} from '@material-ui/core'
import Product from "./Product"
import axios from 'axios';

export default function ManageProductFragment() {

    const API = (url='http://localhost:44374/api/Product') =>{
        return{
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url,newRecord),
            update: (id, updateRecord) =>axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }

    const addOrEdit = (formData, onSuccess) =>{
        API().create(formData)
        .then(res =>{
            onSuccess();
        })
        .catch(err => console.log(err))
    }
    return (
        <Container>
            <div className="row">
                <div className="col-md-4">
                    <Product addOrEdit={addOrEdit}/>
                </div>
                <div className="col-md-8">
                    
                </div>
            </div>
        </Container>
    )
        
    
}

