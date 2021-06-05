import React from 'react';
import Card from './Card';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    }
  }

  async getInfo() {
    const info = await fetch('https://api.randomuser.me/');
    const infoJson = await info.json();
    const infoResult = infoJson.results[0];

    this.setState(() => ({
      loading: false,
      information: infoResult,
    }));

    console.log(infoResult);
  }

  componentDidMount() {
    this.getInfo();
  }
  

  render() {
    const { loading, information } = this.state;
    const loadingText = 'loading...';
    return (
      <div className='profile'>
        { loading ? loadingText : <Card info= { information } /> }
      </div>
    );
  }
}
