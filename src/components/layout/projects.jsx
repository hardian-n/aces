import React from 'react'
import UserNav from 'components/nav/user-project'
import DashboardHeader from 'components/heading/projects'

export default class Layout extends React.Component {

  handleScroll = function(e) {
    if (window.pageYOffset > 64) {
      document.getElementById('aces-auth').classList.add('scrolled');
    } else {
      document.getElementById('aces-auth').classList.remove('scrolled');
    }
  }

  componentDidMount () {
    window.document.body.classList.remove("bg-purple-500")
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  render () {
    return (
      <div id="aces-auth">
        <UserNav license={null}/>
        <DashboardNav />
        <DashboardHeader />
        {this.props.children}
      </div>
    )
  }
}