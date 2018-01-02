export const prefix = "react-meme"

//可选字体配置
export const fontFamily = [
    {
        label: "微软雅黑",
        value: "Microsoft YaHei"
    },
    {
        label: "海维提卡",
        value: "Helvetica"
    },{
        label:"草书",
        value:"cursive"
    }
]

//图片处理类型 TODO
export const imageProcess = [
    {
        label: "系统默认",
        value: "default"
    },
    {
        label: "翻转",
        value: "reversal"
    },
    {
        label: "压缩",
        value: "compress"
    }
]

//字体 14 - 60 (px)
export const fontSize = Array.from({ length: 60 }).map((_, i) => i+1).filter(v => v > 15)

//默认 20 px
export const defaultFontSize = fontSize[4]

export const defaultFontColor = "#444"

export const defaultFontText = "请输入文字"

//图片最大限制
export const img_max_size = 1024

//图片每次缩放的值
export const range = 0.05    

//文字每次缩放的值
export const textRange = 1        

//图片缩放 最大最小值限制
export const whellScaleRange = [0.4,3.0]

//文本缩放 最大最小值限制
export const textWhellScaleRange = [fontSize[0],fontSize[fontSize.length-1]]

//图片默认缩放比例
export const defaultScale = 1.0

//图片预览区域宽高
export const previewContentStyle = {
    width:300,
    height:300
}