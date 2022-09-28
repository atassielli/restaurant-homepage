export default function home () {
    let content = document.querySelector('.content');
    content.style.cssText = "display: flex; flex-direction: column; align-items: center; gap: 25px";

    let contentHeader = document.createElement('div');
    contentHeader.textContent = 'Italian Family Traditions'
    contentHeader.classList.add('contentHeader')
    content.appendChild(contentHeader);

    let contentBody = document.createElement('div');
    contentBody.classList.add('contentBody');
    contentBody.innerHTML = "We are excited to be bringing you traditional Italian dishes from our family kitchen. Opening in 2022 please come and support our family and our restaurant! <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p><p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.</p><p>Unwilling sportsmen he in questions september therefore described so. Attacks may set few believe moments was. Reasonably how possession shy way introduced age inquietude. Missed he engage no exeter of. Still tried means we aware order among on. Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking.</p>";
    content.appendChild(contentBody);
}