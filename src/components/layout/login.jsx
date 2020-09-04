import React from 'react'
import SiteNav from 'components/nav/aces-login'

export default class Layout extends React.Component {

  handleScroll = function(e) {
    if (window.pageYOffset > 84) {
      // document.getElementById('aces-public').classList.add('scrolled');
    } else {
      // document.getElementById('aces-public').classList.remove('scrolled');
    }
  }

  componentDidMount () {
    // window.document.body.classList.add("bg-purple-500")
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  render () {
    return (
      <div id="aces-public" className="bg-purplexxx-400">
        <div className="flex flex-col h-screen">
          <div className="bg-white">
            <SiteNav />
          </div>
          <div className="flex flex-grow bg-purple-400">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}