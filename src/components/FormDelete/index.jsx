import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeleteDataRequest } from "../../redux/action/actionDelete"


const FormDelete = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.user);
    const handleDelete = () => {
        dispatch(DeleteDataRequest(inputValue))
    }
    return (
        <div style={{ margin: '30px 0' }}>
            <h3>Delete Form</h3>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleDelete}>{loading ? "loading" : 'Delete'}</button>
        </div>
    )
}

export default FormDelete
