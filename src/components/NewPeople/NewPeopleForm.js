import {Row, Col, Form, Button} from "react-bootstrap"

const NewPeopleForm = ({addPeople, setEmptyName, setEmptyAge}) => {
    const addNewPeople = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.age.value;

        if (!name) {
            setEmptyName(true);
            return;
        }

        if (!age) {
            setEmptyAge(true);
            return;
        }

        addPeople({
            id: Math.random(),
            name: name,
            age: age,
        })
    }

    return(
        <Form onSubmit={addNewPeople}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>이름</Form.Label>
    <Form.Control type="text" name="name" placeholder="이름을 입력해주세요." />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>나이</Form.Label>
    <Form.Control type="number" name="age" placeholder="나이를 입력해주세요." />
  </Form.Group>
  <Button variant="primary" type="submit">
    등록
  </Button>
</Form>
    )

}

export default NewPeopleForm;