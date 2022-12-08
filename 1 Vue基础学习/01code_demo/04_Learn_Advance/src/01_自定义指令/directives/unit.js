export default function directiveUnit(app) {
    app.directive("unit", {
        mounted(el, bindings) {
            console.log(el)
            const defaultText = el.textContent
            // bindings.value即为传入的符号
            let unit = bindings.value
            if (!unit) {
                unit = "￥"
            }
            el.textContent = unit + defaultText
        }
    })
}