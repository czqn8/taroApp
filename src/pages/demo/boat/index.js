import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'



class Test extends Component {
    config = {
        navigationBarTitleText: '测试内容'
    }
    render() {
        return (
            <View className='page'>
                <View className='doc-body'>
                    <View className='panel'>
                        <View className='panel-content'>
                        测试内容
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Test