var React = require("react");

var Application = React.createClass({
  getInitialState: function() {
    return {
      selectedOption: "option1",
      items: [
        {
          value: "option1",
          text: "the first option"
        },
        {
          value: "option2",
          text: "the second option"
        },
        {
          value: "option3",
          text: "the third option"
        }
      ]
    };
  },

  handleOptionChange: function(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  },

  handleFormSubmit: function(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    console.log("You have selected:", this.state.selectedOption);
  },

  render: function() {
    var items = this.state.items.map(item => (
      <div className="custom-control custom-radio mb-3">
        <label>
          <input
            type="radio"
            className="custom-control-input"
            value={item.value}
            checked={this.state.selectedOption === item.value}
            onChange={this.handleOptionChange}
          />
          {item.text}
        </label>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {items}
              <button className="btn btn-default" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

<FormGroup>
  <label className="form-control-label">
    Maternity cover
  </label>
  <div className="custom-control custom-radio mb-3">
    <input
      className="custom-control-input"
      id="maternityCover"
      name="maternityCover"
      type="radio"
    />
    <label className="custom-control-label">Yes</label>
  </div>
  <div className="custom-control custom-radio mb-3">
    <input
      className="custom-control-input"
      defaultChecked
      name="maternityCover"
      type="radio"
    />
    <label className="custom-control-label">No</label>
  </div>
</FormGroup>;

ReactDOM.render(<Application />, document.getElementById("container"));
