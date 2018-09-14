# CSDN极致去广告
## 重要
- 本脚本需要配合abp类插件
- 请在此类软件中加入过滤列表，以解决csdn反去广告问题，否则会提示"CSDN检测当前广告样式的广告位需要满足宽和高均大于等于40"
- 添加教程:https://github.com/Azero-NG/csdnRemoveAd/blob/master/abp添加自定义过滤器.md
- 列表地址:https://raw.githubusercontent.com/Azero-NG/csdnRemoveAd/master/csdnadfilters.txt

## 效果一览
![预览](https://raw.githubusercontent.com/Azero-NG/csdnRemoveAd/master/preview.png)

## 更新历史
### abp规则108
- 参考EasyList China+EasyList，乘风广告过滤规则，去除某些脚本,有空会好好学习abp规则

### 1.09
- 移除右部推荐
  
### 1.08
- 添加更新提示

### 1.07
- 添加abp 过滤列表

### 1.06
- 配合abp解决"CSDN检测当前广告样式的广告位需要满足宽和高均大于等于40"问题

### 1.05
- 删除下部div 广告

### 1.04
- 删除底部iframe广告(添加load listener)
- 删除newsfeed
- 将blog代码移入blog专属函数内，不在全局放置

### 1.03
- 删除顶部广告

### 1.02
- hide()改remove()

### 1.01
- 感谢@nmgwap的原版csdn去广告(https://greasyfork.org/zh-CN/scripts/42466-csdn%E5%8E%BB%E5%B9%BF%E5%91%8A)
- 本版本在@nmgwap csdn去广告(5.02.1128)上做了些许更改,删除了除文章以外的所有..(你懂得)
