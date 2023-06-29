import {useSelector} from "react-redux";

function CreateCarPage(){
    const auth = useSelector(state => state.auth)
    const {userInfo} = auth
}

export default CreateCarPage