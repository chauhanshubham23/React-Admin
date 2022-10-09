import React,{useState} from "react";
import '../css/productform.css'
import axios from "axios";
import { Col, Row } from 'antd';

const ProductForm = () => {
    const [users, setUser] = useState([{
        code: "",
        name: "",
        qty: "",
        price: "",
        status:""


      }]);
      const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser({
          ...users,
          [name]: value,
        });
      };
      // console.log(name,value);
      const send = () => {
        const { code, name, qty, price } = users;
        if ( code && name && qty && price  ) {
          axios
            .post("http://localhost:5000/admin", users)
            .then((res) => console.log(res));
        } else {
          alert("Please fill all the details..");
        }
      };    
  return (
    <>
      <div className="heading fixed-right">
        <h2 className="newProducts">New Products</h2>
        <form action="">
        <Row>
      <Col span={12}>
      <label htmlFor="" >
                Product Code <spam className='star'>*</spam>
              </label>
              <input
                type="text"
                class="form-control productForm my-2"
                name="code"
                value={users.code}
                onChange={handleInputs} 
              />
      </Col>
      <Col span={12}>
      <label htmlFor="" className="mx-5 mb-1">Status</label>
              <div class="form-check form-switch my-1">
                {/* <input
                  class="form-check-input"
                  type="checkbox"
                  name="status"
                  value={users.status}
                    onChange={handleInputs} 
                /> */}
                <input type="checkbox" name="status" className="toggle" id="rounded"  value={users.status}
                    onChange={handleInputs}   />
              <label htmlFor="rounded" data-checked= 'Inactive' className="rounded" data-unchecked = 'Active'></label>
              </div>
      </Col>
    </Row>
        
        
          <label htmlFor="" className="my-1">Name <spam className='star'>*</spam></label>
          <input
            type="text"
            class="form-control w-50"
            name="name"
            value={users.name}
            onChange={handleInputs} 
          />
          <label htmlFor="" className="my-2">Quantity <spam className='star'>*</spam></label>
          <input
            type="text"
            class="form-control formwidth "
            name="qty"
            value={users.qty}
            onChange={handleInputs} 
          />
          <label htmlFor="" className="my-2">Price</label>
          <input
            type="text"
            class="form-control formwidth"
            name="price"
            value= {users.price}
            onChange={handleInputs} 
          />
           <div className="button my-4">
           <button type="reset" className="btn btn-secondary btncancel" >
                  Cancle
                </button>
                <button type="button" className="btn btn-primary submitbtn mx-3" onClick={send} >
                  Submit
                </button>
           </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
