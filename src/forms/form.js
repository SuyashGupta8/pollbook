import { Button, Form, FormControl } from 'react-bootstrap';

const CustomForm = () => {
   return (
    <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success" className="white-color">Search</Button>
  </Form>
   )
}

export default CustomForm;