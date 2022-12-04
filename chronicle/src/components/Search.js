import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Search() {
    return (
        <Form className='card'>
            <div className="card-header">Look Up Reccomndations</div>
            <fieldset className='card-body'>
                <Form.Group className="mb-3 inputGroup">
                    <Form.Label htmlFor="category">Category</Form.Label>
                    <Form.Select id="category">
                        <option disabled selected>All</option>
                        <option>Housing</option>
                        <option>Seasonal Clothing</option>
                        <option>Events</option>
                        <option>Nearby Attractions</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 inputGroup">
                   
                    <Form.Control id="disabledTextInput" placeholder="Search... " />
                    <Button type="submit" variant='danger'>Search</Button>
                    
                </Form.Group>

                
            </fieldset>
        </Form>
    );
}

export default Search;