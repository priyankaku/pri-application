import React from 'react';

export class Child extends React.Component {

    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this)
    }

    
    handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
    }
    
    render() {
        const styles =
        {
            'backgroundColor':'red'
        }
        
      return (
        <div>
          <h1 style={styles}>
            Hey my name is {this.props.name}!
          </h1>
          <select onChange = {this.handleChange}
            id="great-names">
            <option value="Priyanka">
              Priyanka
            </option>
  
            <option value="Gromulus">
              Gromulus
            </option>
  
            <option value="Thinkpiece">
              Thinkpiece
            </option>
          </select>
        </div>
      );
    }
  }