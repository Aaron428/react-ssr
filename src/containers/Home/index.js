import React from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getHomeListAction} from './store/actions';

class Home extends React.Component {
  componentDidMount() {
    if (this.props.newList.length === 0) {
      this.props.getHomeList();
    }
  }
  render() {
    const {name, newList} = this.props;
    return (
      <div>
        <Header />
        <h2>Hello {name}, welcome to the lesson for React ssr!</h2>
        <button onClick={() => alert('you clicked!')}>click me!</button>
        <ul>
          {newList.map((news) => (
            <li key={news.id}>{news.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeListAction());
  // console.log('load data');
};

const mapStateToProps = (state) => ({
  name: state.home.name,
  newList: state.home.newList,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList: () => dispatch(getHomeListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
