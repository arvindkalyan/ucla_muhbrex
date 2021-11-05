import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends React.Component {


    render() {
        return (
            <div>
                <form>
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label="Enter content"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default reduxForm()(PostForm);