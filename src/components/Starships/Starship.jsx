var React = require('react');

var Starship = React.createClass({

  onClick: function(event) {
    event.stopPropagation();

    // toggle hidden class
    // responsible for showing/hiding extra information on planets
    // hidden is in main_style.css sheet in public folder
    $('#' + this.props.id).toggleClass('hidden');
  },

  render: function() {

    var propsStyle = {
      marginTop: 25
    };

    return (
      <div className="col-sm-6">
        <div className="col-md-4">
          <h3>{this.props.name}</h3>
          <a href='#' onClick={this.onClick}>Show Details</a>
        </div>

        <div style={propsStyle} className="col-md-8">
          <div id={this.props.id} className="hidden compProps">
            <p><strong>Model:</strong> {this.props.model}</p>
            <p><strong>Starship Class:</strong> {this.props.starship_class}</p>
            <p><strong>Cost in Credits:</strong> {this.props.cost_in_credits}</p>
            <p><strong>Length:</strong> {this.props.length}</p>
            <p><strong>Passenger Size:</strong> {this.props.passengers}</p>
            <p><strong>Max Atmosphering Speed:</strong> {this.props.max_atmosphering_speed}</p>
            <p><strong>Hyperdrive Rating:</strong> {this.props.hyperdrive_rating}</p>
            <p><strong>MGLT:</strong> {this.props.MGLT}</p>
            <p><strong>Cargo Capacity:</strong> {this.props.cargo_capacity}</p>
            <p><strong>Consumables:</strong> {this.props.consumables}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Starship;