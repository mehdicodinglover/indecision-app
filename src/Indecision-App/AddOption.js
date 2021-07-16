import React from 'react';

class AddOption extends React.Component{
    handleAddOption= (e) =>{
        e.preventDefault();
        const l = e.target.dairy.value.trim();
        if(l) {
            this.props.handleAddOption(l);
        }
        e.target.reset();
    }
    render() {
        return <form onSubmit={this.handleAddOption}>
            <input
                type={"text"}
                placeholder={'Add a unique dairy!'}
                name = 'dairy'
            />
        </form>
    }
}

export default AddOption;