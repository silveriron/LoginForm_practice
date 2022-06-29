import style from "./EmptyInputModal.module.css"
import { Button } from "react-bootstrap";

const EmptyNameModal = ({emptyName, emptyAge, resetModal}) => {
    return(
        <div className={`${style.background} ${emptyName === true && style.view} ${emptyAge === true && style.view }`} onClick={resetModal} >
            <div className={style.modal}>
                { emptyName === true && <p>이름을 입력해주세요.</p> }
                { emptyAge === true && <p>나이를 입력해주세요.</p> }
                <div>
                <Button onClick={resetModal} variant="primary">확인</Button>
                </div>
            </div>
        </div>
    )
}

export default EmptyNameModal;