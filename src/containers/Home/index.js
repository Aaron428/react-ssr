import React from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getHomeListAction} from './store/actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.getHomeList();
  }
  render() {
    return (
      <div>
        <Header />
        <h2>Hello {this.props.name}, welcome to the lesson for React ssr!</h2>
        <button onClick={() => alert('you clicked!')}>click me!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.home.name,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList: () => dispatch(getHomeListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
