class Alert{
    /**
     * @param {string} title 
     * @param {string} content 
     * @param {() => {}} close 
     * @param {() => {}} btn 
     */
    show(title, content, close, btn){}
    hide(){}   
}
class Loading {
    show(){}
    hide(){}
}
class Toast {
    /**
     * @param {string} content 
     */
    show(content){}
    hide(){}
}
const alert = new Alert()
const loading = new Loading()
const toast = new Toast()
export {
    alert,
    loading,
    toast
}