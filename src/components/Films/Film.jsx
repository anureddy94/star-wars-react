var React = require('react');

var Film = React.createClass({

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
          <h3>{this.props.title}</h3>
          <a href='#' onClick={this.onClick}>Show Details</a>
        </div>

        <div style={propsStyle} className="col-md-8">
          <div id={this.props.id} className="hidden compProps">
            <p><strong>Episode Id:</strong> {this.props.episode_id}</p>
            <p><strong>Opening Crawl:</strong> {this.props.opening_crawl}</p>
            <p><strong>Director:</strong> {this.props.director}</p>
            <p><strong>Producer(s):</strong> {this.props.producer}</p>
            <p><strong>Release Date:</strong> {this.props.release_date}</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Film;