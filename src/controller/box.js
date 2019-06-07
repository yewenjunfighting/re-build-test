import React from 'react'
import $ from 'jquery'

/**
 * function : 创建箱子, 根据当前level中box对象的x, y为box设置left和top值, 进行绝对定位
 * param : levelData 关卡的数据; changePos表示要对box重新进行定位, 这个参数在用户点击再玩一次时会被传入true
 * 这里之所以要引入changePos的原因是因为react的differ算法，是的在游戏胜利之后，我设置state的success为true之后，虽然组件执行了render函数
 * 但是由于乌龟和box的新旧virtual dom是一样的，导致乌龟和box不能自动复位,所以为了在用户点击再玩一次的时候它们能复位,就用changePos属性来判断操作类型: 定位 or 初始化, createTortoise方法也同理
 * return : none
 * */
export function createBox (levelData, changePos) {
    let box = levelData.box;
    let len = levelData.map.length;
    if(changePos) {
        $('.box').each((i, elem)=>{
            $(elem).css('left', box[i].x * 50);
            $(elem).css('top', box[i].y * 50);
        })
    }else return box.map((val, index)=>{
        let left = val.x * 50;
        let top = val.y * 50;
        return (
            <div className="box" style={{left, top}} key={len + index}></div>
        )
    });
}
