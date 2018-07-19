class Label extends React.Component {
  render () {
    return (
      <div>
        <h1><div>{this.props.label}</div></h1>
      </div>
    );
  }
}

Label.propTypes = {
  label: React.PropTypes.string
};
