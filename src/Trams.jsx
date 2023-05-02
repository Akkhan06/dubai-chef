import React from 'react';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <h1 className='text-5xl font-bold'>Our Trams and condition</h1>
            <p className="mt-5 font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quam! Aliquid iure incidunt, libero consequuntur quo sit commodi nihil! Error in suscipit esse voluptas eius praesentium accusantium dolorum. Quod magni fugiat dolorem incidunt illo et, consequatur nisi voluptas tempore odio dolorum repellat rem eaque sint numquam, autem qui ut. Distinctio, culpa! Reprehenderit dignissimos atque rem quo labore est ratione doloribus possimus fugit provident incidunt, eius, veritatis, vero doloremque aliquid assumenda. Error asperiores sequi qui unde quisquam eligendi nisi dignissimos ad reprehenderit reiciendis quos voluptate doloribus veritatis voluptatibus neque beatae aperiam commodi officia, aspernatur eos iure optio maxime quam id! Explicabo?
            </p>
            <h1 className='btn btn-link'><Link to="/register">Register</Link></h1>
        </div>
    );
};

export default Trams;