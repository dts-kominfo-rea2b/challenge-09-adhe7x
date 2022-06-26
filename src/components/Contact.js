// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    const {data} = props;

    return (
        <div className="card">
            <div className='photo'>
                <img src={data.photo} alt=""></img>
            </div>
            <div className="detail">
                <h4>{data.name}</h4>
                <br></br>
                <p>{data.phone}</p>
                <br></br>
                <p>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;
