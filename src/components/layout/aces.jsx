import React from 'react'
import SiteNav from 'components/nav/aces'

export default class Layout extends React.Component {

  handleScroll = function(e) {
    if (window.pageYOffset > 84) {
      document.getElementById('aces-public').classList.add('scrolled');
    } else {
      document.getElementById('aces-public').classList.remove('scrolled');
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  render () {
    return (
      <div id="aces-public" className="">
        <SiteNav />
        <div className="pt-16">
          {this.props.children}
        </div>
      </div>
    )
  }
}