import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtList, AtListItem } from 'taro-ui'
import * as Images from '../../assets/index.js'
import './index.scss';



class User extends Component {
    config = {
        navigationBarTitleText: '个人中心'
    }

    constructor(props){
        super(props)
        this.state = {
            menu:[
                {
                    title: '全部订单',
                    specialText: '',
                    url: ''
                },
                {
                    title: '会员中心',
                    specialText: '',
                    url: ''
                },
                {
                    title: '优惠券',
                    specialText: '',
                    url: ''
                },
                {
                    title: '常用旅客',
                    specialText: '',
                    url: ''
                },
                {
                    title: '联系客服',
                    specialText: '',
                    url: ''
                },
                {
                    title: '退出登录',
                    specialText: '',
                    url: ''
                }
            ]
        }
    }

    menuItemClick = (type)=> {
        switch (type) {
            case 0: 
                this.showTip();
                break;
            case 1: 
                this.showTip();
                break;
            case 2: 
                this.showTip();
                break;
            case 3: 
                this.showTip();
                break;
            case 4:
                Taro.makePhoneCall({
                    phoneNumber: '10086'
                 })
                break;
            case 5:
                Taro.showModal({
                    title: '确认退出登录',
                    showCancel: true,
                    confirmColor: '#00bcd4'
                });
                break;
            default: break;
        }
    }

    showTip = ()=> {
        Taro.showModal({
            title: '提示',
            content: '该部分仅展示，无具体功能!',
            confirmColor: '#00bcd4',
            showCancel: false
        });
    }
    render() {
        return (
            <View className='page wrapper'>
                <View className='doc-body'>
                    <View className='panel'>
                        <View className='panel__content'>
                            <View className='user-information user-line'>
                                <AtAvatar circle image={Images.Avatar}></AtAvatar>
                                <Text className='avatar-title'>授权登录</Text>
                            </View>
                            <AtList>
                            {
                                    this.state.menu.map((item, index) => {
                                        return (
                                            <AtListItem className='menu-title' title={item.title} onClick={this.menuItemClick.bind(this, index)} arrow='right' />
                                        )
                                    }, this)
                                        
                            }
                            </AtList>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default User