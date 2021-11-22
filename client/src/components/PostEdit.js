import React from 'react';
import { useParams } from 'react-router-dom';
//import { Field, reduxForm } from 'redux-form';

const PostEdit = () => {
        const { id } = useParams();
        //console.log(id)
        //first need to get the current post 
    
    
        return (
            <div>
                PostEdit
                {/* <form>
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label="Enter content"/>
                    <button className="ui button primary">Submit</button>
                </form> */}
            </div>
        )
    
}

export default PostEdit;