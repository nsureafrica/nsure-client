var formData = {
  "id": 13951,
  "webform_id": 1070,
  "name": "What industry are you in?",
  
}
var radioData = {
  "webformcomponentoptions": [
    {
      "id": 13888,
      "webform_component_id": 13951,
      "key": "Hospitality",
      "value": "Hospitality",
      "created_at": "2017-04-07 18:40:39",
      "updated_at": "2017-04-07 18:40:39",
      "group": "",
      "selected" : false
    },
    {
      "id": 13889,
      "webform_component_id": 13951,
      "key": "Yes",
      "value": "Retail",
      "created_at": "2017-04-07 18:40:39",
      "updated_at": "2017-04-07 18:40:39",
      "group": "",
      "selected" : false
    }
  ]
}
class WebformApp extends React.Component {
  render() {
    return (
      <form>
        <label>{this.props.webform.name}</label>
        <div className="group-wrapper">
          <Radio radio={this.props.webform.webformcomponentoptions} />
        </div>
      </form>
    )
  }
};

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption: false};
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

ReactDOM.render(
    <WebformApp webform={formData} />,
    document.getElementById('app')
);
