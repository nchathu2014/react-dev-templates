/**
 * Created by Nuwan Chathuranga on 1/21/2017.
 * nchathu2014@gmail.com
 */

import React, {PropTypes,Component} from 'react';

class Student extends Component {

  /**
   * Student constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this._initStudent();
    this.state = {};
  }

  /**
   * Custom Function - Method binding to 'this'
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
      <div>Hi I am Student Component (State Full)</div>
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

export default Student;
