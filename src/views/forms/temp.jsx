const radioButtonYesorNoOptions = [
  {
    id: 13888,
    webform_component_id: 13951,
    key: "Yes",
    value: "yes",
    selected: false
  },
  {
    id: 13889,
    webform_component_id: 13951,
    key: "No",
    value: "no",
    selected: false
  }
];
var formData = {
  id: 13951,
  webform_id: 1070,
  optionName: "ahakhs",
  page: 0,
  type: "radios",
  name: "What industry are you in?",
  webformcomponentoptions: radioButtonYesorNoOptions
};
class WebformApp extends React.Component {
  render() {
    return (
      <form>
        <label>{this.props.webform.name}</label>
        <div className="group-wrapper">
          <Radio radio={this.props.webform.webformcomponentoptions} />
        </div>
      </form>
    );
  }
}

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: "yes" };
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  renderOption(props) {
    return (
      <div>
        <h3>{props.index}</h3>
        <input
          type="radio"
          value={props.option.value}
          name={props.option.optionName}
          id={props.option.id}
          checked={props.status}
          onChange={props.clickeme}
        />
        <label htmlFor={props.option.id}>{props.option.key}</label>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.radio.map(function(radio) {
          var selected = this.state.selectedOption === radio.value;
          return (
            <this.renderOption
              option={radio}
              key={radio.value}
              status={selected}
              clickeme={e => this.handleOptionChange(e)}
            />
          );
        }, this)}
      </div>
    );
  }
}

ReactDOM.render(
  <WebformApp webform={formData} />,
  document.getElementById("app")
);
