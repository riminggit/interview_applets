import { weBtoa } from './base64'

export const toImgBase64 = (svgString) => {
    if (process.env.TARO_ENV === 'weapp') {
        return `data:image/svg+xml;base64,${weBtoa(svgString)}`
    }
    return `data:image/svg+xml;base64,${window.btoa(svgString)}`
}



export const isDarkColor = (color) => {

    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
            let colorNew = "#";
            for (let i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        let colorChange = [];
        for (let i = 1; i < 7; i += 2) {
            colorChange.push(parseInt("0x" + color.slice(i, i + 2)) as never);
        }
        color = "rgb(" + colorChange.join(",") + ")";
    }

    color = color.replace("rgb(", "").replace(")", "")
    let RgbValueArry = color.split(",")

    let grayLevel = RgbValueArry[0] * 0.299 + RgbValueArry[1] * 0.587 + RgbValueArry[2] * 0.114

    if (grayLevel >= 192) {
        return false
    } else {
        return true
    }

}