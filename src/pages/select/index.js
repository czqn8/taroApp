import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtTag, AtIcon } from 'taro-ui'



class Select extends Component {
    config = {
        navigationBarTitleText: '精选内容',
        //navigationStyle: 'custom'
    }
    constructor () {
        super(...arguments)
        this.state = {
          val: '',
          TagList: Taro.getStorageSync('tagList')||[],
          isSearchIn: Taro.getStorageSync('tagList').length ? true : false
        }
    }
    save(){
        Taro.setStorageSync('tagList', this.state.TagList)
    }
    handleClick = (value)=>{
        if(!value || value == 0 || value.indexOf(' ') != -1){
            Taro.showModal({
                //title: '错误提示',
                content: '搜索错误',
                showCancel: false,
                confirmColor: '#2196f3'
            })
            return false;
        } 
        this.setState({
            val: value
        })
    }
    onClearClick = ()=>{
        this.setState({
            val: ''
        })
    }
    onActionClick () {
        this.setState({
            TagList:[...this.state.TagList,{title:this.state.val,active:false}],
            isSearchIn: true,
            val: ''
        },this.save)
    }
    handleSwitchChange = (i)=> {
        const TagList = [...this.state.TagList]
        TagList[i].active = !TagList[i].active
        this.setState({
            TagList:TagList
        },this.save)
        console.log(this)
    }
    handleClear = ()=>{
        Taro.showLoading({
            title: '正在删除中'
        })
        setTimeout(()=>{
            // this.setState({
            //     TagList: this.state.TagList.filter(v => !v.active)
            // }, this.save)
            this.setState({
                TagList: [],
                isSearchIn: false,
            }, this.save)
            Taro.hideLoading()
        },2000)
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }
    render() {
        return (
            <View className='page'>
                <View className='doc-body'>
                    <View className='panel'>
                        <View className='panel-content'>
                            <AtSearchBar className='search-input'
                                value={this.state.val}
                                onChange={this.handleClick.bind(this)}
                                onClear={this.onClearClick.bind(this)}
                                onActionClick={this.onActionClick.bind(this)}
                            />
                            {this.state.isSearchIn
                                ?   <View className='panel-title' >
                                        历史搜索
                                        <AtIcon className='clear-icon' value='trash' size='16' color='#9d9d9d' onClick={this.handleClear.bind(this)}></AtIcon>
                                    </View>
                                :   ''
                            }
                            <View className='at-row at-row--wrap'>
                                {
                                    this.state.TagList.map((item,index) => {
                                        return (
                                            <View className='at-col tags-item'>
                                                <AtTag 
                                                className={{item:item.active}}
                                                type='primary'
                                                circle 
                                                active={item.active}
                                                onClick={this.handleSwitchChange.bind(this, index)}
                                                >{item.title}</AtTag>
                                            </View>
                                        )
                                    })
                                }
                                
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Select