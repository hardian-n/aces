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
    window.document.body.classList.add("bg-purple-500")
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  render () {
    return (
      <div id="aces-public" className="bg-purple-400">
        <SiteNav />
        <div className="">
          {this.props.children}
        </div>
      </div>
    )
  }
}