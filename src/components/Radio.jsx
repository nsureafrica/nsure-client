class Radio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {selectedOption: 'Other'};
    }
  
    handleOptionChange(changeEvent) {
      this.setState({
        selectedOption: changeEvent.target.value
      })
    };
  
    renderOption(props) {
      return (
        <div>
          <h3>{props.index}</h3>
          <input type="radio"
            value={props.option.value}
            name={props.option.webform_component_id}
            id={props.option.id}
            checked={props.status}
            onChange={props.clickeme} />
          <label htmlFor={props.option.id}>{props.option.key}</label>
        </div>
      )
    };
  
    render() {
      return (
        <div>
          {this.props.radio.map(function(radio) {
            var selected = this.state.selectedOption === radio.value;
            return <this.renderOption option={radio} key={radio.value} status={selected} clickeme={(e)=> this.handleOptionChange(e)} />;
          }, this)}
        </div>
      )
    };
  };