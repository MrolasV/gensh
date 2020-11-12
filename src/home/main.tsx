import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

type MainProps = RouteComponentProps;

class Main extends React.Component<MainProps,{}> {
  constructor (props: MainProps) {
    super(props);
  }

  render () {
    console.log(this.props.location);
    return <>
      <div>{`Hello! Am Main`}</div>
      <div>{`You are at ${this.props.location.pathname}`}</div>
    </>
  }
}

export default withRouter(Main);