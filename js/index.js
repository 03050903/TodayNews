/**
 * 绑定类别显示的样式和事件
 */
function bindLeftTypeStyle() {
    var typeList=document.getElementsByClassName("left_type");
    console.log(typeList.length+","+typeList.toString()+",type:"+typeof (typeList));
    var firstNode=typeList[0];
    firstNode.selected=true;
    setSelectedStyle(firstNode);
    for (var i=0;i<typeList.length;++i){
        var node=typeList[i];
        node.type=i.toString();
        node.addEventListener("mouseover",function (event) {
            setSelectedStyle(event.target);
        },false);
        node.addEventListener("mouseout",function (event) {
            var item=event.target;
            if(!item.selected){
                setUnselectedStyle(item);
            }
        },false);
        node.addEventListener("click",function (event) {
            changeSelectState(event.target);
        });
    }
}

/**
 * 设置选中的样式
 * @param selectItem 被选中的Item
 */
function setSelectedStyle(selectItem) {
    selectItem.style.backgroundColor="#ff0000";
    selectItem.style.color="#FFFFFF";
}

/**
 * 设置未选中的样式
 * @param unSelectItem
 */
function setUnselectedStyle(unSelectItem) {
    unSelectItem.style.backgroundColor="transparent";
    unSelectItem.style.color="#000000";
}
/**
 * 改变选中的状态
 * @param clickItem     当前被点击的item
 */
function changeSelectState(clickItem) {
    var typeList=document.getElementsByClassName("left_type");
    for(var i=0;i<typeList.length;++i){
        var node=typeList[i];
        console.log("type:"+node.type);
        if(node.selected&&node!=clickItem){
            node.selected=false;
            setUnselectedStyle(node);
            break;
        }
    }
    clickItem.selected=true;
}

/**
 * 初始化
 */
function init() {
    bindLeftTypeStyle();
}

init();