import {SearchIcon} from '../DesktopHeader/SearchBox/searchIcon';
import Modal from 'react-bootstrap/Modal';
import SearchBox from '../DesktopHeader/SearchBox/SearchBox';
import styled from 'styled-components';

type Props = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    className: string;
}

const StyledModalNavBar = styled(Modal)`
.modal-content{
    background: transparent;
     border: none;
}
.modal-header{
    border: none;
}
    .btn-close{
        background: url('/Assets/cross.svg') no-repeat center!important;
    }
`

export default function OpenSearchModalForMobile({show,setShow,className}:Props){
    console.log(show,"Show")
    console.log(setShow,"setShow")
    return(
        <>
            <SearchIcon className="me-2 d-md-none" size={20} onClick={() => setShow(true)}/>
            <StyledModalNavBar show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                <SearchBox className={`w-100 ${className}`} />
                </Modal.Header>
            </StyledModalNavBar>
        </>
    )
}
