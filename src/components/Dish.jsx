import React from 'react'
import { Link } from 'react-router-dom'
import { dishmodelpost } from '../services/userservice';
import { useForm } from 'react-hook-form';

export const Dish = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitHandler = async (data) => {
        console.log(data)
        console.log("complete")
        dishmodelpost(data)
            .then((resp) => {
                console.log(resp)
                console.log("Done it is.")
            })
            .catch((errors) => {
                console.log("error", errors)
            })
    }
    return (
        <div className='caterarjsx'>
            <div class="container">
                <div class="form-container">
                    <h2>Add kitchen</h2>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div class="form-group">
                            <label for="restaurant-name">Dish Name</label>
                            <input type="text" id="Dish-name" name="Dish-name" placeholder="Dish name*" required {...register("dishName")} />
                        </div>
                        <div class="form-group">
                            <label for="restaurant-address">Dish Price</label>
                            <input type="text" id="dishprice" name="dishprice" placeholder="Dish Price*" required {...register("price")} />
                        </div>
                        <div class="form-group">
                            <label for="owner-name">Time to Prepare</label>
                            <input type="text" id="prepareTime" name="prepareTime" placeholder="Prepare Time*" required {...register("prepareTime")} />
                        </div>
                        <div class="form-group">
                            <label for="owner-name">Add caterarName</label>
                            <input type="text" id="caterarName" name="caterarName" placeholder="Caterar Name*" required {...register("caterarName")} />
                        </div>
                        <div class="form-footer">
                            <button type="button" class="btn"><Link to="/cart" className='nav-link'>Next</Link></button>
                        </div>

                        <button className="signinbtn" type='submit'>Submit</button>
                    </form>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    )
}
