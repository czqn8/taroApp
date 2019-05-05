import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import * as Images from '../../assets/index.js'

import './index.scss'


class Index extends Component {

    config = {
        navigationBarTitleText: '去哪儿',
        backgroundColor: '#fff',
        navigationBarBackgroundColor: '#00bcd4',
        navigationBarTextStyle: 'white'
    }
    constructor(props) {
        super(props)
        this.state = {
            indexPageIcons: [
                {
                    class: 'radius-top-left',
                    bizTitle: '酒店',
                    pageSrc: Images.pageHotel,
                    showSpecialLogo: false,
                    specialText: '',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    class: '',
                    bizTitle: '机票',
                    pageSrc: Images.pageFlight,
                    showSpecialLogo: false,
                    specialText: '',
                    url: '../../pages/demo/flight/index'
                },
                {
                    class: 'radius-top-right',
                    bizTitle: '火车',
                    pageSrc: Images.pageTrain,
                    showSpecialLogo: false,
                    specialText: '',
                    url: '../../pages/demo/train/index'
                },
                {
                    class: '',
                    bizTitle: '汽车票',
                    pageSrc: Images.pageBus,
                    showSpecialLogo: false,
                    specialText: '',
                    url: '../../pages/demo/bus/index'
                },
                {
                    class: '',
                    bizTitle: '专车',
                    pageSrc: Images.pageCar,
                    showSpecialLogo: false,
                    specialText: '',
                    url: '../../pages/demo/exclusive/index'
                },
                {
                    class: '',
                    bizTitle: '船票',
                    pageSrc: Images.pageShip,
                    showSpecialLogo: false,
                    specialText: '',
                    url: '../../pages/demo/boat/index'
                },
                {
                    class: 'radius-bottom-left',
                    bizTitle: '度假',
                    pageSrc: Images.pageVacation,
                    showSpecialLogo: false,
                    specialText: '',
                    url: '../../pages/demo/holiday/index'
                },
                {
                    class: '',
                    bizTitle: '旅游',
                    pageSrc: Images.pageTicket,
                    showSpecialLogo: false,
                    specialText: '',
                    url: '../../pages/demo/tour/index'
                },
                {
                    class: 'radius-bottom-right',
                    bizTitle: '攻略',
                    pageSrc: Images.pageTravel,
                    showSpecialLogo: false,
                    specialText: '',
                    url: '../../pages/demo/strategy/index'
                }
            ],
            indexBannerIcons: [
                {
                    bannerSrc: Images.homePage1,
                    specialText: '',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    bannerSrc: Images.homePage2,
                    specialText: '',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    bannerSrc: Images.homePage3,
                    specialText: '',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    bannerSrc: Images.homePage4,
                    specialText: '',
                    url: '../../pages/demo/hotel/index'
                }
            ],
            indexToolIcons:[
                {
                    toolSrc: Images.iconBill,
                    specialText: '旅行账本',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    toolSrc: Images.iconLuggage,
                    specialText: '打包助手',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    toolSrc: Images.iconDynamic,
                    specialText: '航班动态',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    toolSrc: Images.iconRadar,
                    specialText: '高铁雷达',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    toolSrc: Images.iconHelpe,
                    specialText: '行程助手',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    toolSrc: Images.iconChair,
                    specialText: '在线值机',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    toolSrc: Images.iconMessages,
                    specialText: '驴友群聊',
                    url: '../../pages/demo/hotel/index'
                }
            ],
            indexActivityIcons: [
                {
                    toolSrc: Images.bannerPage1,
                    specialText: '低价机票',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    toolSrc: Images.bannerPage2,
                    specialText: '旅行特价',
                    url: '../../pages/demo/hotel/index'
                },
                {
                    toolSrc: Images.bannerPage3,
                    specialText: '酒店特价',
                    url: '../../pages/demo/hotel/index'
                }
            ],
            todos: Taro.getStorageSync('todos')||[]
        }
        this.gotoDetail= this.gotoDetail.bind(this)
    }

    
    gotoDetail = (url)=> {
        console.log('url', url);
        if (url){
            Taro.navigateTo({ url });
        } else {
            this.showTip();
        }
    }

    showTip = ()=> {
        Taro.showModal({
            title: '提示',
            content: '该部分仅展示，无具体功能!',
            showCancel: false
        });
    }
    

    onShareAppMessage = (res)=> {
        return {
            title: '标题',
            path: 'http://www.example.com',
            success: function(data) {
                Taro.showToast({ title: 'handling success'});
                console.log('handling success')
            },
            fail: function(data, code) {
                Taro.showToast({ title: `code=${code}, ${data}` });
                console.log(`code=${code}, ${data}`)
            }
        }
      }
    save(){
        Taro.setStorageSync('todos', this.state.todos)
    }

    componentDidMount() {
      console.log('页面挂载...');
    }
    componentWillMount() {
      console.log('页面加载...');
    }

    render() {
        return (
            <View className='page'>
                <Image className='top-image' onClick={this.gotoDetail.bind(this,'/pages/demo/test/index')} src='https://s.qunarzz.com/wechatapp/home/banner0510-002.png'/>
                <View className='doc-body'>
                    <View className='panel'>
                        <View className='panel-content'>
                            <View className='nav-wrapper'>
                                {
                                    this.state.indexPageIcons.map(function(item, index) {
                                        return (
                                            <View className='item-img' key={index} onClick={this.gotoDetail.bind(this,item.url)}>
                                                <Image className={`itemBgc ${item.class}`} src={item.pageSrc} />
                                                <Text className='biz-title'>{item.bizTitle}</Text>
                                            </View>
                                        )
                                    }, this)
                                }
                            </View>
                            <Swiper
                                className='content-banner'
                                indicatorColor='rgba(255, 255, 255, .8)'
                                indicatorActiveColor='#26b4e0'
                                circular
                                indicatorDots
                                autoplay>
                                {
                                    this.state.indexBannerIcons.map(function(item, index) {
                                        return (
                                            <SwiperItem  key={index}  onClick={this.gotoDetail.bind(this,item.url)}>
                                                <View className='page-item'>
                                                    <Image className='page-image' src={item.bannerSrc}/>
                                                </View>
                                            </SwiperItem>
                                        )
                                    }, this)
                                }
                            </Swiper>
                            <View className='panel-title'>小工具</View>
                            <View className='at-row at-row--wrap'>
                                {
                                    this.state.indexToolIcons.map(function(item, index) {
                                        return (
                                            <View className='at-col at-col-2 icons-item ' key={index}  onClick={this.gotoDetail.bind(this,item.url)}>
                                                <View className='icons'>
                                                    <Image src={item.toolSrc}></Image>
                                                </View>
                                                <Text className='title'>{item.specialText}</Text>
                                            </View>
                                        )
                                    }, this)
                                }
                            </View>
                            <View className='panel-title'>低价专区</View>
                            <View className='at-row at-row--wrap special-area'>
                                {
                                    this.state.indexActivityIcons.map(function(item, index) {
                                        return (
                                            <View className='at-col at-col-4 activity-item' key={index}  onClick={this.gotoDetail.bind(this,item.url)}>
                                                <View className='icons'>
                                                    <Image className='activity-img' src={item.toolSrc}></Image>
                                                </View>
                                                <Text className='title'>#{item.specialText}</Text>
                                            </View>
                                        )
                                    }, this)
                                }
                            </View>
                            <View className='panel-title'>活动专区</View>
                            <Image className='banner-image' onClick={this.gotoDetail.bind(this,'/pages/demo/test/index')} src='https://s.qunarzz.com/wechatapp/home/banner0510-002.png'/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Index