import React, { Component } from 'react'
import { AppContainer } from 'AppStyles'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import MenuPanel from 'components/Menu/MenuPanel'
import logo from 'odeum_code_logo.svg'
import TabContainer from 'components/Tabs/TabContainer'
import Tab from 'components/Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'
// import { Route } from 'react-router-dom'
import NoTabsContainer from 'components/NoTabsContainer/NoTabsContainer'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			helpID: 0
		}
	}

	render() {
		return (
			<AppContainer>
				<Header logo={logo} search={false} notification={false} avatar={false} />
				<MenuPanel>
					<TabContainer icon={'assignment'} route='/menu1' label={'Assignments'}>
						<Tab icon={'assignment'} label={'Forms'} route={'/forms'}>
							<Workspace>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
								<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
								<p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
								<p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
								<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
								<p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
								<p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
								<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
								<p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
								<p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
								<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
								<p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
								<p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
								<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
								<p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
								<p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>

							</Workspace>
						</Tab>
						<Tab icon={'assignment_turned_in'} label={'Reports'} route={'/reports'} >
							<Workspace>
								Workspace2
							</Workspace>
						</Tab>
						<Tab icon={'phone'} label={'Phone'} route={'/phone'} >
							<Workspace>
								{<iframe title={'phone'} width="560" height="315" src="https://www.youtube.com/embed/EVBsypHzF3U?start=170" frameborder="0" allowfullscreen></iframe>}
							</Workspace>
						</Tab>
					</TabContainer>

					<TabContainer icon={'person'} route='/menu2' label={'Menu2'}>
						<Tab label={'tab4'} route={'/tab4'} >
							<Workspace>
								Workspace4
							</Workspace>
						</Tab>
						<Tab label={'tab5'} route={'/tab5'} >
							<Workspace>
								Workspace5
							</Workspace>
						</Tab>
						<Tab label={'tab6'} route={'/tab6'} >
							<Workspace>
								Workspace6
							</Workspace>
						</Tab>
						<Tab label={'tab7'} route={'/tab7'} >
						</Tab>
					</TabContainer>
					<NoTabsContainer route='/notabs' label='No Tabs' icon='info'>
						It works without tabs
					</NoTabsContainer>
				</MenuPanel>

				<Footer />
			</AppContainer>
		)
	}
}
