/**
 * Created by Nuwan Chathuranga on 1/21/2017.
 * nchathu2014@gmail.com
 */

import React,{Component,PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Student extends Component {

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this._initStudent();
    this.state = {};
  }

  /**
   *
   * @private
   */
  _initStudent() {
    //bind custom function here
  }

  /**
   * Life Cycle function - componentWillMount
   */
  componentWillMount() {
  }

  /**
   * Life Cycle function - componentDidMount
   */
  componentDidMount() {
  }

  /**
   * Life Cycle function - componentWillReceiveProps
   * @param newProps
   */
  componentWillReceiveProps(newProps) {
  }

  /**
   * Life Cycle function - shouldComponentUpdate
   * @param newProps
   * @param newState
   * @returns {boolean}
   */
  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  /**
   * Life Cycle function - componentWillUpdate
   * @param nextProps
   * @param nextState
   */
  componentWillUpdate(nextProps, nextState) {
  }

  /**
   * Life Cycle function - componentDidUpdate
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
  }

  /**
   * Life Cycle function - componentWillUnmount
   */
  componentWillUnmount() {
  }

  /**
   * Life Cycle function - render
   * @returns {XML}
   */
  render() {
    return (
      <div>Hi I am $NAME Component (React Redux) </div>
    );
  }
}

/**
 *
 * @type {{}}
 */
Student.propTypes = {};

/**
 *
 * @type {{}}
 */
Student.defaultProps = {};

/**
 *
 * @param state
 * @returns {{state: *}}
 */
function mapStateToProps(state) {
  return {
    state: state
  };
}

/**
 *
 * @param dispatch
 * @returns {{actions: *}}
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);
