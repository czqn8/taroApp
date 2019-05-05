import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import configStore from './store'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
    require('nerv-devtools')
}

const store = configStore()

class App extends Component {

    config = {
        pages: [
            'pages/index/index',
            'pages/select/index',
            'pages/user/index',
            'pages/demo/test/index',
            'pages/demo/hotel/index',
            'pages/demo/flight/index',
            'pages/demo/train/index',
            'pages/demo/bus/index',
            'pages/demo/exclusive/index',
            'pages/demo/boat/index',
            'pages/demo/holiday/index',
            'pages/demo/tour/index',
            'pages/demo/strategy/index'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            color: '#929292',
	        selectedColor: '#00bcd4',
	        borderStyle: 'black',
	        backgroundColor: '#ffffff',
            list: [
                {
                    pagePath: "pages/index/index",
                    iconPath: 'assets/image/homepage_normal.png',
	                selectedIconPath: 'assets/image/homepage_select.png',
                    text: '首页',
					name: 'Home'
                },
                {
                    pagePath: "pages/select/index",
                    iconPath: 'assets/image/chosen_normal.png',
	                selectedIconPath: 'assets/image/chosen_select.png',
                    text: '精选',
	                name: 'Select'
                },
                {
                    pagePath: "pages/user/index",
                    iconPath: 'assets/image/uc_normal.png',
	                selectedIconPath: 'assets/image/uc_select.png',
                    text: '我的',
	                name: 'User'
                }
            ]
        },
        permission: {
            "scope.userLocation": {
              "desc": "你的位置信息将用于小程序位置接口的效果展示"
            }
        }
    }
    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return ( 
            <Provider store={store}>
                <Index/>
            </Provider>
        )
    }
}

Taro.render( <App/> , document.getElementById('app'))