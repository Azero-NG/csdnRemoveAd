# CSDN极致去广告
## 重要
- 本脚本需要配合abp类插件
- 请在此类软件中加入过滤列表，以解决csdn反去广告问题，否则会提示"CSDN检测当前广告样式的广告位需要满足宽和高均大于等于40"
- 添加教程:https://github.com/Azero-NG/csdnRemoveAd/blob/master/abp添加自定义过滤器.md
- 列表地址:https://raw.githubusercontent.com/Azero-NG/csdnRemoveAd/master/csdnadfilters.txt

## 效果一览
![预览](https://raw.githubusercontent.com/Azero-NG/csdnRemoveAd/master/preview.png)

## 更新历史
### 1.19
- 伪装登录,解决代码块复制问题深入解决,添加watch功能,监视currentusername,同时由于tampermonkey grant,导致进入sandbox,通过unsafewindow解决,同时疑问:Object变量可以跨沙箱?


### 1.18
- 继续修复bug


### 1.17
- 修复bug


### 1.16
- 伪装登录,解决代码块复制问题


### 1.15
- 伪装登录,不登录显示评论


### 1.14
- 优化阅读全文


### 1.13
- 删除右侧第四栏

### 1.12
- 优化更新交互

### 1.11
- 借鉴@gorgiaxx 添加剪切板净化

### 1.10
- 重大更新,代码推倒重写,根据反馈,保留了评论,更新提示更加人性化

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

## abp规则更新

### abp规则110
- 优化abp规则,添加对abp监测脚本的过滤


### abp规则108
- 参考EasyList China+EasyList，乘风广告过滤规则，去除某些脚本,有空会好好学习abp规则